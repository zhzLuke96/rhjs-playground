import { GlobalStyle } from "@rhjs/builtin";
import { Ref, rh, unref } from "@rhjs/core";

export const AppGlobalStyle =
  ({ isDark }: { isDark: boolean | Ref<boolean> }) =>
  () =>
    (
      <GlobalStyle
        styleFn={() => ({
          fontFamily: `'Karla', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
          lineHeight: "1.5",
          fontWeight: "400",

          colorScheme: unref(isDark) ? "light dark" : "dark",
          color: unref(isDark) ? "rgba(255, 255, 255, 0.87)" : "#242424",
          backgroundColor: unref(isDark) ? "#333" : "#fff",

          fontSynthesis: "none",
          textRendering: "optimizeLegibility",
          "-webkitFontSmoothing": "antialiased",
          "-moz-osxFontSmoothing": "grayscale",
          "-webkitTextSizeAdjust": "100%",

          height: "100vh",
          width: "100vw",

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
      ></GlobalStyle>
    );
