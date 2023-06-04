import { Style } from "@rhjs/builtin";
import { rh, unref, createMemo, ref, unrefAll } from "@rhjs/core";
import { HeaderBtn } from "../Layout/HeaderBtn";
import { Resizer } from "./Resizer";
import { PreviewProps } from "./types";
import { createDevtoolsSrc } from "./useDevtoolsSrc";
import { usePreviewState } from "./usePreviewReducer";

export const Preview = (previewProps: PreviewProps) => {
  const {
    importMap,
    code,
    devtools: devtoolsEnable,
    isDark,
    ...props
  } = previewProps;

  const containerRef = ref<HTMLElement | null>(null);

  const { iframeSrc, iframeRef, devtoolsIframeRef, previewState, dispatch } =
    usePreviewState(previewProps);

  const devtools_src = createDevtoolsSrc();

  const devtools_style = createMemo(
    () =>
      `width: 100%; height: 100%; ${
        unref(devtoolsEnable) ? "display: block;" : "display: none;"
      }`
  );

  const iframeHeight = ref<number>(0.625);

  const resizerRef = ref<HTMLElement | null>(null);
  const changeIframeHeight = (clientX: number, clientY: number) => {
    const [outerContainer, resizer] = unrefAll(containerRef, resizerRef);
    if (!outerContainer || !resizer) {
      return;
    }

    let position: number;
    let size: number;

    const rect = outerContainer.getBoundingClientRect();

    position = clientY - rect.top - resizer.offsetHeight / 2;
    size = outerContainer.offsetHeight - resizer.offsetHeight;
    const percentage = position / size;

    iframeHeight.value = percentage;
  };

  return () => (
    <div {...props} ref={containerRef}>
      <Style
        styleFn={() => {
          const ihPer = unref(iframeHeight);
          const rows = unref(devtoolsEnable)
            ? `30px minmax(0, ${ihPer}fr) 12px minmax(0, ${1 - ihPer}fr)`
            : "30px minmax(0, 1fr)";
          return {
            display: "grid",
            height: "100%",
            width: "100%",
            gridTemplateRows: rows,
          };
        }}
      ></Style>
      <div style="border-bottom: 1px solid;border-top: 1px solid;overflow: hidden;">
        <HeaderBtn
          title={"reload page"}
          isDark={isDark}
          onClick={() => dispatch({ type: "HTML_RELOAD" })}
        >
          ♻️relaod
        </HeaderBtn>
      </div>

      <iframe
        ref={iframeRef}
        src={iframeSrc}
        style={"width: 100%;height: 100%;"}
        frameBorder={0}
        sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      ></iframe>

      <div>
        <Resizer ref={resizerRef} isHorizontal onResize={changeIframeHeight} />
      </div>

      <iframe
        ref={devtoolsIframeRef}
        style={devtools_style}
        src={devtools_src}
        frameBorder="0"
      ></iframe>
    </div>
  );
};
