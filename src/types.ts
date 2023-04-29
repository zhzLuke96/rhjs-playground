import { reactivity } from "@rhjs/rh";

export type RefProperty<T extends Record<keyof any, any>> = {
  [K in keyof T]: reactivity.Ref<T[K]> | T[K];
};
