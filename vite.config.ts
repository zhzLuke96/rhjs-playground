import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  esbuild: {
    jsxFactory: "rh",
    jsxFragment: "Fragment",
    // TODO support injection
    //     jsxInject: `import { rh, builtin } from '@rhjs/rh';
    // const { Fragment } = builtin;`,
  },
});
