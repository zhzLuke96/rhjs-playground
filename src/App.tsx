import { builtin, reactivity, rh, tools, utils } from "@rhjs/rh";
import { createTextUrlRef } from "./components/createTextURL";
import { MonacoEditor } from "./components/Editor/MonacoEditor";
import { AppHeader } from "./components/Layout/AppHeader";
import { Preview } from "./components/Preview/Preview";
import { AppGlobalStyle } from "./globalStyle";

import demo1 from "./DemoCode/demo1.js?raw";

const { ref } = reactivity;
const { untrack } = utils;

// const version = "0.0.24";
const version = "latest";
const importMap = {
  "@rhjs/rh": `https://unpkg.com/@rhjs/rh@${version}/dist/main.module.mjs`,
};

export const App = () => {
  const code = ref(demo1);
  const codeUrl = createTextUrlRef(code, {
    type: "text/javascript",
  });
  const isDark = ref(true);

  let codeCache = untrack(code);
  return () => (
    <div>
      <AppGlobalStyle isDark={isDark} />
      <builtin.Style
        styleFn={() => ({
          position: "relative",
          display: "flex",
          flexFlow: "column",
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          maxHeight: "100vh",
          overflow: "hidden",
        })}
      ></builtin.Style>

      <header style={"height: 30px; width: 100%;"}>
        <AppHeader isDark={isDark} />
      </header>
      <div style={"flex: 1;"}>
        <builtin.Style
          styleFn={() => ({
            position: "relative",
            display: "flex",
            flexFlow: "row",
            width: "100%",
            height: "100%",
          })}
        ></builtin.Style>
        <MonacoEditor
          style={"flex: 1;"}
          defaultValue={code}
          onChange={(value) => (codeCache = value)}
          onSave={() => (code.value = codeCache)}
          isDark={isDark}
        ></MonacoEditor>
        <Preview
          style={"flex: 1;"}
          importMap={importMap}
          code={codeUrl}
          devtools
          isDark={isDark}
        ></Preview>
      </div>
    </div>
  );
};
