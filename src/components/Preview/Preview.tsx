import { rh, reactivity, utils, tools, cs, builtin } from "@rhjs/rh";
import { RefProperty } from "../../types";
import { generateHTML } from "./generateHTML";
import { createDevtoolsSrc } from "./useDevtoolsSrc";

const { ref, unref } = reactivity;
const { computed, untrack, depend } = utils;
const { hookEffect } = cs;

function tick_once<Args extends any[]>(fn: (...args: Args) => any) {
  let caller = fn as any;
  const call_fn = (...args: Args) =>
    queueMicrotask(() => {
      caller(...args);
      caller = () => {};
    });
  return (...args: Args) => {
    caller = fn;
    call_fn(...args);
  };
}

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

  const message_handlers = {
    code_update: tick_once((code: string) => {
      untrack(iframeRef)!.contentWindow!.postMessage(
        { event: "CODE_UPDATE", value: code },
        "*"
      );
    }),
    dev_loaded: tick_once(() => {
      // FIXME: 好像是没用的...开启了反倒导致 runtime.enabled 重复注册...
      // untrack(iframeRef)?.contentWindow!.postMessage({ event: "LOADED" }, "*");
    }),
  };

  const iframeSrcUrl = ref("");
  hookEffect(
    () => {
      const html = generateHTML(
        untrack(isDark as any),
        JSON.stringify({ imports: unref(importMap) })
      );
      const url = URL.createObjectURL(
        new Blob([html], {
          type: "text/html",
        })
      );
      if (untrack(iframeSrcUrl)) {
        URL.revokeObjectURL(untrack(iframeSrcUrl));
      }
      iframeSrcUrl.value = url;
      // reset iframe ready state
      iframeReady.value = false;
    },
    { lazy: false }
  );
  cs.onUnmount(() => URL.revokeObjectURL(untrack(iframeSrcUrl)));

  // hook on dark theme change
  hookEffect(
    () => {
      const [dark, is_iframeReady, iframe] = depend(
        isDark,
        iframeReady,
        iframeRef
      );
      const { dev_loaded, code_injected, dark_injected } = unref(
        initialize_message_state
      );
      if (!is_iframeReady || !iframe || !dark_injected) return;
      iframe.contentDocument?.documentElement.classList.toggle("dark", dark);
    },
    { lazy: false }
  );

  // code update event
  hookEffect(
    () => {
      const [code_text, is_iframeReady, iframe] = depend(
        code,
        iframeReady,
        iframeRef
      );
      const { dev_loaded, code_injected, dark_injected } = unref(
        initialize_message_state
      );
      if (!is_iframeReady || !iframe || !code_injected || !dev_loaded) return;

      message_handlers.code_update(code_text);
    },
    { lazy: false }
  );

  // sync initial state
  hookEffect(
    () => {
      const [
        code_text,
        is_dark,
        is_iframeReady,
        is_devtoolsReady,
        iframe,
        devtoolsIframe,
      ] = depend(
        code,
        isDark,
        iframeReady,
        devtoolsIframeReady,
        iframeRef,
        devtoolsIframeRef
      );
      const { dev_loaded, code_injected, dark_injected } = untrack(
        initialize_message_state
      );
      if (!iframe) {
        return;
      }
      if (is_iframeReady) {
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
          message_handlers.code_update(code_text);
          initialize_message_state.value = {
            ...untrack(initialize_message_state),
            code_injected: true,
          };
        }
      }
      if (!devtoolsIframe) {
        return;
      }
      if (!dev_loaded && is_devtoolsReady) {
        message_handlers.dev_loaded();
        initialize_message_state.value = {
          ...untrack(initialize_message_state),
          dev_loaded: true,
        };
      }
    },
    { lazy: false }
  );

  const devtools_src = createDevtoolsSrc();

  const iframeMessageBus = (event: MessageEvent) => {
    const [iframe, devtoolsIframe] = [iframeRef.value, devtoolsIframeRef.value];
    if (!iframe || !devtoolsIframe) {
      return;
    }
    // console.log(
    //   event.data,
    //   event.source === devtoolsIframe.contentWindow ? "DEV" : "HTML"
    // );
    if (event.source === iframe.contentWindow) {
      devtoolsIframe.contentWindow!.postMessage(event.data, "*");
    } else if (event.source === devtoolsIframe.contentWindow) {
      iframe.contentWindow!.postMessage(
        { event: "DEV", data: event.data },
        "*"
      );
    }
  };
  window.addEventListener("message", iframeMessageBus);
  cs.onUnmount(() => window.removeEventListener("message", iframeMessageBus));

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
        src={devtools_src}
        frameBorder="0"
        onLoad={() => {
          devtoolsIframeReady.value = true;
        }}
      ></iframe>
    </div>
  );
};
