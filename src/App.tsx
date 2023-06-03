import {
  rh,
  ref,
  untrack,
  onUnmounted,
  onMounted,
  createWatcher,
  createMemo,
  provide,
  Style,
} from "@rhjs/rh";
import { createTextUrlRef } from "./components/createTextURL";
import { MonacoEditor } from "./components/Editor/MonacoEditor";
import { AppHeader } from "./components/Layout/AppHeader";
import { Preview } from "./components/Preview/Preview";
import { AppGlobalStyle } from "./globalStyle";

import { app_runtime } from "./runtime";
import { SourceFile } from "./runtime/types";
import { connectDemoCode } from "./DemoCode";

const connectCompiler = () => {
  let current_processor: ReturnType<
    (typeof app_runtime)["compileFile"]
  > | null = null;
  onUnmounted(() => current_processor?.dispose());
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

const disposeCode = `import("@rhjs/rh").then(({cs, ElementSource, View}) => window.dispose = () => View ? View.globalView.unmount() : (cs || ElementSource).global_source.emit("unmount"));`;

export const App = () => {
  const isDark = ref(true);
  provide("isDark", isDark);

  const { currentDemo } = connectDemoCode();
  const importMap = createMemo(() => ({
    "@rhjs/rh": `https://unpkg.com/@rhjs/rh@latest/dist/main.module.mjs`,
    "@rhjs/fluent-web-components":
      "https://unpkg.com/@rhjs/fluent-web-components@latest/dist/main.module.mjs",
    ...currentDemo.value?.importMap,
    // type check error
  })) as any;

  const code = ref("");
  const codeUrl = createTextUrlRef(code, {
    type: "text/javascript",
  });

  const editorCode = ref(currentDemo.value?.code || "");

  const compiler = connectCompiler();
  const compileCodeCache = async () => {
    const codeText = untrack(editorCode);
    if (!codeText) {
      return;
    }
    const result = (await compiler.compileFile({
      filename: "main.tsx",
      source: codeText,
    })) as {
      compiled: string;
    };
    // console.log(result);
    code.value = `${result.compiled}\n${disposeCode}`;
  };
  onMounted(compileCodeCache);

  createWatcher(currentDemo, (demo) => {
    if (!demo) {
      return;
    }
    if (editorCode.value === demo.code) {
      return;
    }
    // console.log("change");
    editorCode.value = demo.code;
    compileCodeCache();
  });

  return () => (
    <div>
      <AppGlobalStyle isDark={isDark} />
      <Style
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
      ></Style>

      <header style={"height: 30px; width: 100%;"}>
        <AppHeader isDark={isDark} />
      </header>
      <div style={"flex: 1;"}>
        <Style
          styleFn={() => ({
            position: "relative",
            display: "flex",
            flexFlow: "row",
            width: "100%",
            height: "100%",
          })}
        ></Style>
        <MonacoEditor
          style={"flex: 1;"}
          value={editorCode}
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
