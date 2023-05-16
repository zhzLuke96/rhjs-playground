import { ref } from "@rhjs/rh";
import { DemoManager, TDemo } from "./DemoCodeMgr";

import v1_code_1 from "./v01/counter.jsx?raw";
import v0_code_1 from "./demo1.jsx?raw";

const mgr = new DemoManager();

mgr.registerDemo("Counter", "0.0.34", v0_code_1);
mgr.registerDemo("Counter", "0.1.1-dev.7", v1_code_1);

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
