import { Ref } from "@rhjs/core";

export type RefProperty<T extends Record<keyof any, any>> = {
  [K in keyof T]: Ref<T[K]> | T[K];
};
