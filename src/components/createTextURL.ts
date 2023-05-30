import { createEffect, Ref, ref, untrack, unref, onUnmounted } from "@rhjs/rh";

/**
 * create text/plain content Ref<string>
 *
 * FIXME: If the url is used by an iframe, it may not revoke in time
 */
export const createTextUrlRef = (
  text: string | Ref<string>,
  options?: BlobPropertyBag | undefined
) => {
  const urlRef = ref("");
  createEffect(() => {
    const prev_url = untrack(urlRef);
    if (prev_url) {
      URL.revokeObjectURL(prev_url);
    }
    urlRef.value = URL.createObjectURL(
      new Blob([unref(text)], { type: "text/plain", ...options })
    );
  });
  onUnmounted(() => URL.revokeObjectURL(urlRef.value));
  return urlRef;
};
