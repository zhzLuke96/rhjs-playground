import { ref } from "@rhjs/core";
import { DemoManager, TDemo } from "./DemoCodeMgr";

// v2.0
import v2_code_helloworld from "./v02/helloworld.tsx?raw";
import v2_code_bitcoin from "./v02/Bitcoin.tsx?raw";
import v2_code_marked from "./v02/Marked.tsx?raw";
import v2_code_html_tag from "./v02/HTMLTag.tsx?raw";
import v2_code_twind from "./v02/twind.tsx?raw";
import v2_code_atomic_css from "./v02/atomic-css.tsx?raw";

import v1_code_1 from "./v01/counter.jsx?raw";
import v1_code_2 from "./v01/helloworld.jsx?raw";
import v1_code_todoApp from "./v01/TodoApp.jsx?raw";

import v0_code_1 from "./demo1.jsx?raw";

const mgr = new DemoManager();

const rhjsImportMap = (v: string) => ({
  "@rhjs/rh": `https://unpkg.com/@rhjs/rh@${v}/dist/main.module.mjs`,
});

// v2 demo
const v2importmap = (
  coreVersion = "latest",
  builtinVersion = "latest",
  tagVersion = "latest"
) => ({
  "@rhjs/core": `https://unpkg.com/@rhjs/core@${coreVersion}/dist/main.module.mjs`,
  "@rhjs/builtin": `https://unpkg.com/@rhjs/builtin@${builtinVersion}/dist/main.module.mjs`,
  "@rhjs/tag": `https://unpkg.com/@rhjs/tag@${tagVersion}/dist/main.module.mjs`,
});
mgr.registerDemo({
  name: "Hello World",
  code: v2_code_helloworld,
  importMap: {
    ...v2importmap("0.2.2", "0.1.2", "0.1.3"),
  },
});
mgr.registerDemo({
  name: "Bitcoin",
  code: v2_code_bitcoin,
  importMap: {
    ...v2importmap("0.2.2", "0.1.2", "0.1.3"),
  },
});
mgr.registerDemo({
  name: "Markdown Editor",
  code: v2_code_marked,
  importMap: {
    ...v2importmap("0.2.2", "0.1.2", "0.1.3"),
  },
});
mgr.registerDemo({
  name: "HTML tag",
  code: v2_code_html_tag,
  importMap: {
    ...v2importmap("0.2.2", "0.1.2", "0.1.3"),
  },
});
mgr.registerDemo({
  name: "twind",
  code: v2_code_twind,
  importMap: {
    ...v2importmap("0.2.2", "0.1.2", "0.1.3"),
  },
});
mgr.registerDemo({
  name: "atomic-css",
  code: v2_code_atomic_css,
  importMap: {
    "@rhjs/atomic-css":
      "https://unpkg.com/@rhjs/atomic-css@latest/dist/main.module.mjs",
    ...v2importmap("0.2.2", "0.1.2", "0.1.3"),
  },
});

// v1 demo
mgr.registerDemo({
  name: "HelloWorld",
  code: v1_code_2,
  importMap: {
    ...rhjsImportMap("0.1.2"),
  },
});
mgr.registerDemo({
  name: "Counter",
  code: v1_code_1,
  importMap: {
    ...rhjsImportMap("0.1.2"),
  },
});
mgr.registerDemo({
  name: "TodoApp",
  code: v1_code_todoApp,
  importMap: {
    ...rhjsImportMap("0.1.2"),
  },
});

// v0 demo
mgr.registerDemo({
  name: "Counter",
  code: v0_code_1,
  importMap: {
    ...rhjsImportMap("0.0.34"),
  },
});

const currentDemo = ref<TDemo | null>(mgr.currentDemo);

export const connectDemoCode = () => {
  return {
    mgr,
    currentDemo,
    selectDemo(idx: number) {
      currentDemo.value = mgr.selectDemo(idx);
    },
    demos: mgr.demos,
  };
};
