import { builtin, reactivity, rh } from "@rhjs/rh";

export const AppGlobalStyle =
  ({ isDark }: { isDark: boolean | reactivity.Ref<boolean> }) =>
  () =>
    (
      <builtin.GlobalStyle
        styleFn={() => ({
          fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          lineHeight: "1.5",
          fontWeight: "400",

          colorScheme: reactivity.unref(isDark) ? "light dark" : "dark",
          color: reactivity.unref(isDark)
            ? "rgba(255, 255, 255, 0.87)"
            : "#242424",
          backgroundColor: reactivity.unref(isDark) ? "#333" : "#fff",

          fontSynthesis: "none",
          textRendering: "optimizeLegibility",
          "-webkitFontSmoothing": "antialiased",
          "-moz-osxFontSmoothing": "grayscale",
          "-webkitTextSizeAdjust": "100%",

          html: {
            height: "100vh",
            width: "100vw",
          },

          body: {
            margin: "0",
            minWidth: "100vw",
            minHeight: "100vh",
            width: "100%",
            height: "100%",
          },

          "#app": {
            width: "100%",
            height: "100%",
          },
        })}
      ></builtin.GlobalStyle>
    );
