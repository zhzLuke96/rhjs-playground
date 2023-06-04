import {
  createMemo,
  onUnmounted,
  Ref,
  createWatcher,
  shallowRef,
  unref,
  unrefAll,
  untrack,
  createReducer,
} from "@rhjs/core";
import { generateHTML } from "./generateHTML";
import { PreviewProps } from "./types";

type PreviewState = {
  iframeReady: boolean;
  devtoolsIframeReady: boolean;
  devLoaded: boolean;

  codeURL?: string;
  codeInjected: boolean;
};

type PreviewAction =
  | { type: "IFRAME_READY"; iframe: HTMLIFrameElement }
  | { type: "DEVTOOLS_IFRAME_READY"; devIframe: HTMLIFrameElement }
  | { type: "DEV_LOADED" }
  | { type: "Debugger.enable" }
  | { type: "CODE_INJECTED" }
  | { type: "HTML_CHANGED"; iframeSrc: string }
  | { type: "HTML_RELOAD" }
  | { type: "CODE_UPDATE"; codeURL: string };

const useIframeMessageBus = (
  iframeRef: Ref<HTMLIFrameElement | null>,
  devtoolsIframeRef: Ref<HTMLIFrameElement | null>,
  state: Ref<PreviewState>,
  dispatch: (action: PreviewAction) => void
) => {
  const sender = {
    sendToIframe(message: any) {
      untrack(iframeRef)?.contentWindow?.postMessage(message, "*");
    },
    sendToDevtools(message: any) {
      untrack(devtoolsIframeRef)?.contentWindow?.postMessage(message, "*");
    },
  };
  const injectCode = () => {
    const { codeInjected, codeURL } = unref(state);
    if (codeInjected) {
      return;
    }
    if (!codeURL) {
      setTimeout(injectCode, 3);
      return;
    }
    requestAnimationFrame(() => {
      sender.sendToIframe({ event: "CODE_UPDATE", value: codeURL });
      dispatch({ type: "CODE_INJECTED" });
    });
  };
  const iframeMessageBus = (event: MessageEvent) => {
    const [iframe, devtoolsIframe] = unrefAll(iframeRef, devtoolsIframeRef);
    if (!iframe || !devtoolsIframe) {
      return;
    }
    // console.log(
    //   // event,
    //   event.data,
    //   event.source === devtoolsIframe.contentWindow ? "DEV" : "HTML"
    // );

    // 在这个事件之前注入代码可能导致console.log绑定不全
    if (event.data?.includes?.("Debugger.enable")) {
      console.log("Debugger.enable");
      dispatch({ type: "Debugger.enable" });
      injectCode();
    }
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
  onUnmounted(() => window.removeEventListener("message", iframeMessageBus));

  // setupWatch(state, (st) => {
  //   const { iframeReady, devtoolsIframeReady, codeInjected } = st;
  //   if (iframeReady && devtoolsIframeReady && !codeInjected) {
  //     sender.sendToIframe({ event: "LOADED" });
  //   }
  // });

  return sender;
};

const useIframeSrc = (
  props: PreviewProps,
  dispatch: (action: PreviewAction) => void
) => {
  const { importMap, isDark } = props;

  const iframeSrc = createMemo<string>(() => {
    const html = generateHTML(
      untrack(isDark),
      JSON.stringify({ imports: unref(importMap) })
    );
    const url = URL.createObjectURL(
      new Blob([html], {
        type: "text/html",
      })
    );
    return url;
  });
  createWatcher(iframeSrc, (src, prev_src) => {
    if (prev_src !== src && prev_src) {
      URL.revokeObjectURL(prev_src);
    }
    dispatch({
      type: "HTML_CHANGED",
      iframeSrc: src || "",
    });
  });
  onUnmounted(() => {
    URL.revokeObjectURL(untrack(iframeSrc) || "");
  });

  return {
    iframeSrc,
  };
};

// FIXME: css cant work with iframe
export const usePreviewState = (props: PreviewProps) => {
  const { isDark, code } = props;
  const iframeRef = shallowRef<HTMLIFrameElement | null>(null);
  const devtoolsIframeRef = shallowRef<HTMLIFrameElement | null>(null);

  const setupDark = (iframe: HTMLIFrameElement) =>
    iframe.contentDocument?.documentElement.classList.toggle(
      "dark",
      untrack(isDark)
    );
  const setupIframeSrc = (src: string) => {
    const iframe = untrack(iframeRef);
    if (iframe) {
      iframe.src = src;
    }
  };
  const reloadIframe = () => {
    untrack(iframeRef)?.contentWindow?.location.reload();
  };
  const reloadDevtool = () => {
    untrack(devtoolsIframeRef)?.contentWindow?.location.reload();
  };
  createWatcher(
    () => unref(isDark),
    (dark) => {
      const iframe = unref(iframeRef);
      iframe && setupDark(iframe);
    }
  );

  const [previewState, dispatch] = createReducer<PreviewState, PreviewAction>(
    (state, action) => {
      // console.log(state, action);
      switch (action.type) {
        case "IFRAME_READY":
          setupDark(action.iframe);
          let codeInjected = state.codeInjected;
          return {
            ...state,
            codeInjected,
            iframeReady: true,
          };
        case "DEVTOOLS_IFRAME_READY":
          return {
            ...state,
            devtoolsIframeReady: true,
          };
        case "DEV_LOADED":
          return {
            ...state,
            devLoaded: true,
          };
        case "HTML_CHANGED": {
          setupIframeSrc(action.iframeSrc);
          reloadDevtool();
          return {
            ...state,
            iframeReady: false,
            devtoolsIframeReady: false,
            devLoaded: false,
            codeInjected: false,
            darkInjected: false,
          };
        }
        case "HTML_RELOAD": {
          setTimeout(() => {
            reloadIframe();
            reloadDevtool();
          });
          return {
            ...state,
            iframeReady: false,
            devtoolsIframeReady: false,
            devLoaded: false,
            codeInjected: false,
            darkInjected: false,
          };
        }
        case "CODE_UPDATE": {
          return { ...state, codeURL: action.codeURL };
        }
        case "CODE_INJECTED":
          return {
            ...state,
            codeInjected: true,
          };
      }

      return state;
    },
    {
      iframeReady: false,
      devtoolsIframeReady: false,
      devLoaded: false,
      codeInjected: false,

      codeURL: untrack(code),
    }
  );

  const { sendToDevtools, sendToIframe } = useIframeMessageBus(
    iframeRef,
    devtoolsIframeRef,
    previewState,
    dispatch
  );

  createWatcher(
    () => unref(code),
    (codeURL) => {
      dispatch({ type: "CODE_UPDATE", codeURL });

      if (previewState.value.iframeReady) {
        requestAnimationFrame(() => {
          sendToIframe({ event: "CODE_UPDATE", value: codeURL });
          dispatch({ type: "CODE_INJECTED" });
        });
      }
    }
  );

  const { iframeSrc } = useIframeSrc(props, dispatch);

  createWatcher(iframeRef, (iframe) => {
    iframe?.addEventListener("load", () =>
      dispatch({ type: "IFRAME_READY", iframe })
    );
  });
  createWatcher(devtoolsIframeRef, (iframe) => {
    iframe?.addEventListener("load", () =>
      dispatch({ type: "DEVTOOLS_IFRAME_READY", devIframe: iframe })
    );
  });

  return {
    iframeSrc,
    iframeRef,
    devtoolsIframeRef,
    previewState,
    dispatch,
    sendToDevtools,
    sendToIframe,
  };
};
