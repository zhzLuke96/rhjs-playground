import {
  ref,
  rh,
  useRef,
  builtin,
  setupWatch,
  onUnmount,
  unref,
  Ref,
} from "@rhjs/rh";
import { throttle } from "lodash-es";

const { Style } = builtin;

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
  const [dragging, setDragging, draggingRef] = useRef<boolean>(false);

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

  setupWatch(draggingRef, (draggingValue) => {
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
  setupWatch(divRef, (divDom) => {
    if (divDom) {
      divDom.addEventListener("mousedown", onResizeStart, { passive: true });
      divDom.addEventListener("touchstart", onResizeStart, { passive: true });
    }
  });
  onUnmount(() => {
    unref(divRef)?.removeEventListener("mousedown", onResizeStart);
    unref(divRef)?.removeEventListener("touchstart", onResizeStart);
  });

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
          backgroundColor: unref(draggingRef) ? "rgba(255,255,255,0.3)" : "",
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
            backgroundColor: "rgba(255,255,255,0.3)",
          },
        })}
      ></Style>
      ⚪⚪⚪
    </div>
  );
};
