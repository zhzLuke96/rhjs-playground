import { builtin, rh } from "@rhjs/rh";

export const globalStyle = (
  <builtin.GlobalStyle
    styleFn={() => ({
      fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      lineHeight: "1.5",
      fontWeight: "400",

      colorScheme: "light dark",
      color: "rgba(255, 255, 255, 0.87)",
      backgroundColor: "#242424",

      fontSynthesis: "none",
      textRendering: "optimizeLegibility",
      "-webkitFontSmoothing": "antialiased",
      "-moz-osxFontSmoothing": "grayscale",
      "-webkitTextSizeAdjust": "100%",

      body: {
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100vw",
        minHeight: "100vh",
      },
    })}
  ></builtin.GlobalStyle>
);
