import { builtin, cs, reactivity, rh, tools, utils } from "@rhjs/rh";
import { createTextUrlRef } from "./components/createTextURL";
import { MonacoEditor } from "./components/Editor/MonacoEditor";
import { AppHeader } from "./components/Layout/AppHeader";
import { Preview } from "./components/Preview/Preview";
import { AppGlobalStyle } from "./globalStyle";

import demo1JSX from "./DemoCode/demo1.jsx?raw";
import { app_runtime } from "./runtime";
import { SourceFile } from "./runtime/types";

const { ref } = reactivity;
const { untrack } = utils;

// const version = "0.0.24";
const version = "latest";
const importMap = {
  "@rhjs/rh": `https://unpkg.com/@rhjs/rh@${version}/dist/main.module.mjs`,
};

const connectCompiler = () => {
  let current_processor: ReturnType<
    (typeof app_runtime)["compileFile"]
  > | null = null;
  cs.onUnmount(() => current_processor?.dispose());
  return {
    compileFile(file: SourceFile) {
      current_processor?.dispose();
      current_processor = app_runtime.compileFile(file);
      return current_processor.recv;
    },
    compileFiles(files: SourceFile[]) {
      current_processor?.dispose();
      current_processor = app_runtime.compileFiles(files);
      return current_processor.recv;
    },
  };
};

export const App = () => {
  const code = ref("");
  const codeUrl = createTextUrlRef(code, {
    type: "text/javascript",
  });
  const isDark = ref(true);

  const editorCode = ref(demo1JSX);

  const compiler = connectCompiler();
  const compileCodeCache = async () => {
    const result = (await compiler.compileFile({
      filename: "main.tsx",
      source: untrack(editorCode),
    })) as {
      compiled: string;
    };
    console.log(result);
    code.value = result.compiled;
  };
  cs.onMount(() => compileCodeCache());
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
          defaultValue={editorCode}
          onChange={(value) => (editorCode.value = value)}
          onSave={compileCodeCache}
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
