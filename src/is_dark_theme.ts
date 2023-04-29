import { reactivity } from "@rhjs/rh";

export const is_dark_theme = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const dark_theme_ref = reactivity.ref(is_dark_theme());
