import { reactivity, cs, tools, utils } from "@rhjs/rh";
const { hookEffect } = cs;
const {} = tools;
const { ref, unref } = reactivity;
const { untrack } = utils;

export const createTextUrlRef = (
  text: string | reactivity.Ref<string>,
  options?: BlobPropertyBag | undefined
) => {
  const urlRef = ref("");
  hookEffect(
    () => {
      const prev_url = untrack(urlRef);
      if (prev_url) {
        URL.revokeObjectURL(prev_url);
      }
      urlRef.value = URL.createObjectURL(
        new Blob([unref(text)], { type: "text/plain", ...options })
      );
    },
    { lazy: false }
  );
  cs.onUnmount(() => URL.revokeObjectURL(urlRef.value));
  return urlRef;
};
