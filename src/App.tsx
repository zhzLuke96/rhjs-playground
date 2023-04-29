import { builtin, reactivity, rh, tools } from "@rhjs/rh";
import { createTextUrlRef } from "./components/createTextURL";
import { MonacoEditor } from "./components/Editor/MonacoEditor";
import { Preview } from "./components/Preview/Preview";
import { AppGlobalStyle } from "./globalStyle";

const { ref } = reactivity;

export const App = () => {
  const importMap = {};
  const code = ref('setTimeout(() => console.log("hello world~"), 1000);');
  const codeUrl = createTextUrlRef(code, {
    type: "text/javascript",
  });
  const isDark = ref(true);
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
        })}
      ></builtin.Style>

      <header style={"height: 30px;"}>
        <button onClick={() => (isDark.value = !isDark.value)}>{isDark}</button>
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
          onChange={(value) => (code.value = value)}
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
