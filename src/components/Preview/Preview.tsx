import { rh, reactivity, utils, tools, cs, builtin } from "@rhjs/rh";
import { RefProperty } from "../../types";
import { generateHTML } from "./generateHTML";
import { createDevtoolsSrc } from "./useDevtoolsSrc";

const { ref, unref } = reactivity;
const { computed, untrack } = utils;
const { hookEffect } = cs;

type PreviewProps = RefProperty<{
  importMap: Record<string, string>;
  code: string;
  devtools: boolean;
  isDark: boolean;
}> &
  JSX.HTMLAttributes<HTMLDivElement>;

export const Preview = ({
  importMap,
  code,
  devtools,
  isDark,
  ...props
}: PreviewProps) => {
  const iframeRef = ref<HTMLIFrameElement | null>();
  const devtoolsIframeRef = ref<HTMLIFrameElement | null>();
  const outerContainerRef = ref<HTMLDivElement | null>();

  const iframeReady = ref(false);
  const devtoolsIframeReady = ref(false);

  // initialize state
  const initialize_message_state = ref({
    dev_loaded: false,
    code_injected: false,
    dark_injected: false,
  });

  const iframeSrcUrl = ref("");
  hookEffect(() => {
    const html = generateHTML(
      untrack(isDark as any),
      JSON.stringify({ imports: unref(importMap) })
    );
    const url = URL.createObjectURL(
      new Blob([html], {
        type: "text/html",
      })
    );
    if (iframeSrcUrl.value) {
      URL.revokeObjectURL(iframeSrcUrl.value);
    }
    iframeSrcUrl.value = url;
    // reset iframe ready state
    iframeReady.value = false;
  });

  // hook on dark theme change
  hookEffect(() => {
    const [dark, is_iframeReady, iframe] = [
      unref(isDark),
      unref(iframeReady),
      unref(iframeRef),
    ];
    const { dev_loaded, code_injected, dark_injected } = unref(
      initialize_message_state
    );
    if (!is_iframeReady || !iframe || !dark_injected) return;
    iframe.contentDocument?.documentElement.classList.toggle("dark", dark);
  });

  // code update event
  hookEffect(() => {
    const [code_text, is_iframeReady, iframe] = [
      unref(code),
      unref(iframeReady),
      unref(iframeRef),
    ];
    const { dev_loaded, code_injected, dark_injected } = unref(
      initialize_message_state
    );
    if (!is_iframeReady || !iframe || !code_injected || !dev_loaded) return;

    iframe.contentWindow?.postMessage(
      { event: "CODE_UPDATE", value: code_text },
      "*"
    );
  });

  // sync initial state
  hookEffect(() => {
    const [
      code_text,
      is_dark,
      is_iframeReady,
      is_devtoolsReady,
      iframe,
      devtoolsIframe,
    ] = [
      unref(code),
      unref(isDark),
      unref(iframeReady),
      unref(devtoolsIframeReady),
      unref(iframeRef),
      unref(devtoolsIframeRef),
    ];
    const { dev_loaded, code_injected, dark_injected } = untrack(
      initialize_message_state
    );
    if (is_iframeReady && iframe) {
      if (!dark_injected) {
        iframe.contentDocument!.documentElement.classList.toggle(
          "dark",
          is_dark
        );
        initialize_message_state.value = {
          ...untrack(initialize_message_state),
          dark_injected: true,
        };
      }
      if (!code_injected) {
        iframe.contentWindow!.postMessage(
          { event: "CODE_UPDATE", value: code_text },
          "*"
        );
        initialize_message_state.value = {
          ...untrack(initialize_message_state),
          code_injected: true,
        };
      }
    }
    if (!dev_loaded && is_devtoolsReady && devtoolsIframe && iframe) {
      iframe.contentWindow!.postMessage({ event: "LOADED" }, "*");
      initialize_message_state.value = {
        ...untrack(initialize_message_state),
        dev_loaded: true,
      };
    }
  });

  const devtools_text = createDevtoolsSrc();

  const messageListener = (event: MessageEvent) => {
    const [iframe, devtoolsIframe] = [iframeRef.value, devtoolsIframeRef.value];
    if (!iframe || !devtoolsIframe) {
      return;
    }
    if (event.source === iframe.contentWindow) {
      devtoolsIframe.contentWindow!.postMessage(event.data, "*");
    }
    if (event.source === devtoolsIframe.contentWindow) {
      iframe.contentWindow!.postMessage(
        { event: "DEV", data: event.data },
        "*"
      );
    }
  };
  window.addEventListener("message", messageListener);
  cs.onUnmount(() => window.removeEventListener("message", messageListener));

  const devtools_style = computed(
    () =>
      `width: 100%; height: 100%; ${
        unref(devtools) ? "display: block;" : "display: none;"
      }`
  );

  return () => (
    <div {...props} ref={outerContainerRef}>
      <builtin.Style
        styleFn={() => {
          const rows = unref(devtools)
            ? `minmax(0, 1fr) 12px minmax(0, 1fr)`
            : "minmax(0, 1fr)";
          return {
            display: "grid",
            height: "100%",
            width: "100%",
            gridTemplateRows: rows,
          };
        }}
      ></builtin.Style>
      <iframe
        ref={iframeRef}
        src={iframeSrcUrl}
        style={"width: 100%;height: 100%;"}
        frameBorder={0}
        onLoad={() => {
          iframeReady.value = true;
        }}
        sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      ></iframe>

      <div>TODO: resizer</div>

      <iframe
        ref={devtoolsIframeRef}
        style={devtools_style}
        src={devtools_text}
        frameBorder="0"
        onLoad={() => {
          devtoolsIframeReady.value = true;
        }}
      ></iframe>
    </div>
  );
};
