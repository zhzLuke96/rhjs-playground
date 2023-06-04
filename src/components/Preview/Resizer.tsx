import { Style } from "@rhjs/builtin";
import {
  ref,
  rh,
  createState,
  createWatcher,
  onUnmounted,
  unref,
  Ref,
  computed,
  inject,
} from "@rhjs/core";

const silentAllIframe = () =>
  document
    .querySelectorAll("iframe")
    .forEach((iframe) => (iframe.style.pointerEvents = "none"));
const reSilentAllIframe = () =>
  document
    .querySelectorAll("iframe")
    .forEach((iframe) => (iframe.style.pointerEvents = "auto"));

export const Resizer = ({
  isHorizontal,
  onResize,
  ref: upperDivRef,
}: {
  isHorizontal?: boolean;
  onResize: (clientX: number, clientY: number) => any;
  ref?: Ref<any>;
}) => {
  const [draggingRef, setDragging] = createState<boolean>(false);

  const onResizeStart = () => setDragging(true);
  const onResizeEnd = () => setDragging(false);

  const onMouseMove = (e: MouseEvent) => {
    onResize(e.clientX, e.clientY);
  };

  const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    onResize(touch.clientX, touch.clientY);
  };

  const divRef = ref<null | HTMLElement>(null);

  createWatcher(draggingRef, (draggingValue) => {
    if (draggingValue) {
      silentAllIframe();
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onResizeEnd);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onResizeEnd);
    } else {
      reSilentAllIframe();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onResizeEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onResizeEnd);
    }
  });
  createWatcher(divRef, (divDom) => {
    if (divDom) {
      divDom.addEventListener("mousedown", onResizeStart, { passive: true });
      divDom.addEventListener("touchstart", onResizeStart, { passive: true });
    }
  });
  onUnmounted(() => {
    unref(divRef)?.removeEventListener("mousedown", onResizeStart);
    unref(divRef)?.removeEventListener("touchstart", onResizeStart);
  });

  const isDark = inject("isDark");
  const highlight = computed(() =>
    unref(isDark) ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)"
  );

  return () => (
    <div
      ref={(dom: any) => {
        divRef.value = dom;
        if (upperDivRef) {
          upperDivRef.value = dom;
        }
      }}
    >
      <Style
        styleFn={() => ({
          backgroundColor: unref(draggingRef) ? unref(highlight) : "",
          width: isHorizontal ? "100%" : "12px",
          height: isHorizontal ? "12px" : "100%",
          zIndex: unref(draggingRef) ? "10" : "auto",
          cursor: isHorizontal ? "row-resize" : "col-resize",
          userSelect: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",

          "&:hover": {
            backgroundColor: unref(highlight),
          },
        })}
      ></Style>
      ⚪⚪⚪
    </div>
  );
};
