// @ts-ignore
import transformJSX from "@babel/plugin-transform-react-jsx";

const rhjs_preset_options = {
  runtime: "classic",
  pragma: "rh",
  pragmaFrag: "bulitin.Fragment",
};

export default (context: any, options = {}) => ({
  plugins: [
    [
      transformJSX,
      {
        ...rhjs_preset_options,
        ...options,
      },
    ],
  ],
});
