import { rh, unref, computed, builtin } from "@rhjs/rh";
import { PreviewProps } from "./types";
import { createDevtoolsSrc } from "./useDevtoolsSrc";
import { usePreviewState } from "./usePreviewReducer";

export const Preview = (previewProps: PreviewProps) => {
  const { importMap, code, devtools, isDark, ...props } = previewProps;
  const { iframeSrc, iframeRef, devtoolsIframeRef, previewState, dispatch } =
    usePreviewState(previewProps);

  const devtools_src = createDevtoolsSrc();

  const devtools_style = computed(
    () =>
      `width: 100%; height: 100%; ${
        unref(devtools) ? "display: block;" : "display: none;"
      }`
  );

  return () => (
    <div {...props}>
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
        src={iframeSrc}
        style={"width: 100%;height: 100%;"}
        frameBorder={0}
        sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      ></iframe>

      <div>TODO: resizer</div>

      <iframe
        ref={devtoolsIframeRef}
        style={devtools_style}
        src={devtools_src}
        frameBorder="0"
      ></iframe>
    </div>
  );
};
