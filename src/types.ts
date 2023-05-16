import { Ref } from "@rhjs/rh";

export type RefProperty<T extends Record<keyof any, any>> = {
  [K in keyof T]: Ref<T[K]> | T[K];
};
