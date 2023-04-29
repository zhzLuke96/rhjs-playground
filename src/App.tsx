import { builtin, rh } from "@rhjs/rh";
import { Counter } from "./components/Counter";
import { RandomLight } from "./components/RandomLight";
import { globalStyle } from "./globalStyle";
import { TsLogo } from "./ts-lettermark-white";

export const App = () => {
  return () => (
    <div>
      {globalStyle}
      <builtin.Style
        styleFn={() => ({
          position: "relative",
          display: "inline-flex",
          flexFlow: "column",
          alignItems: "center",
          "& .logo": {
            willChange: "filter",
            transition: "filter 300ms",
          },
          "& .ts-logo:hover": {
            filter: "drop-shadow(0 0 1em #3178c6aa)",
          },
          "& .rhjs-logo": {
            zIndex: "1",
            fontSize: "100px",
            position: "absolute",
            top: "-50px",
            left: "-50px",
            "&:hover": {
              filter: `drop-shadow(0 0 1em #16c60c)`,
            },
          },
          "& a": {
            textDecoration: "none",
          },
        })}
      ></builtin.Style>
      <a
        class={"logo rhjs-logo"}
        href="https://github.com/zhzLuke96/rh.js"
        target={"_blank"}
      >
        🧩
      </a>
      <a
        class={"logo ts-logo"}
        href="https://www.typescriptlang.org/"
        target={"_blank"}
      >
        <TsLogo />
      </a>
      <h1 style="margin-top: 40px; margin-bottom: 40px;">
        Rh.js + Vite + TypeScript(tsx)
      </h1>
      <Counter>
        {" "}
        <RandomLight style={"margin-right: 0.5rem;filter: blur(4px);"} />
        {"count is "}
      </Counter>
      <p style="margin-top: 60px;color: #888;">
        Click on the Rh.js and TypeScript logos to learn more
      </p>

      <a
        href="https://www.github.com/zhzluke96/rhjs-vite-tsx-starter"
        target={"_blank"}
      >
        this template source
      </a>
    </div>
  );
};
