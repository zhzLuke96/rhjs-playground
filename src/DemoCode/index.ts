import { ref } from "@rhjs/rh";
import { DemoManager, TDemo } from "./DemoCodeMgr";

// v2.0
import v2_code_bitcoin from "./v02/Bitcoin.tsx?raw";
import v2_code_marked from "./v02/Marked.tsx?raw";
import v2_code_html_tag from "./v02/HTMLTag.tsx?raw";

import v1_code_1 from "./v01/counter.jsx?raw";
import v1_code_2 from "./v01/helloworld.jsx?raw";
import v1_code_todoApp from "./v01/TodoApp.jsx?raw";

import v0_code_1 from "./demo1.jsx?raw";

const mgr = new DemoManager();

mgr.registerDemo("HelloWorld", "0.1.2", v1_code_2);
mgr.registerDemo("Counter", "0.1.2", v1_code_1);
mgr.registerDemo("TodoApp", "0.1.2", v1_code_todoApp);
mgr.registerDemo("Bitcoin", "0.2.1-dev.6", v2_code_bitcoin);

mgr.registerDemo("Markdown Editor", "0.2.1-dev.6", v2_code_marked);
mgr.registerDemo("HTML tag", "0.2.1-dev.6", v2_code_html_tag);

mgr.registerDemo("Counter", "0.0.34", v0_code_1);

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
