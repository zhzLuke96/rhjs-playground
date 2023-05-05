import { defineConfig } from "vite";

export default defineConfig((env) => ({
  base: "./",
  esbuild: {
    jsxFactory: "rh",
    jsxFragment: "Fragment",
    // TODO support injection
    //     jsxInject: `import { rh, builtin } from '@rhjs/rh';
    // const { Fragment } = builtin;`,
  },
  define: {
    "process.env.BABEL_TYPES_8_BREAKING": "true",
    "process.env.NODE_DEBUG": "false",
    ...(env.command == "build" ? {} : { global: "globalThis" }),
  },
}));
