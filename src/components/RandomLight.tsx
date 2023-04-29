import { rh, utils, builtin, cs } from "@rhjs/rh";

const { Style } = builtin;
const { onMount, onUnmount } = cs;

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const hex =
    "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
  return hex;
}
const crateRandomColorRef = () => {
  const color = utils.reactivity.ref(randomColor());
  const timerSymbol = Symbol("timer");
  onMount((cs) => {
    cs.__context[timerSymbol] = setInterval(() => {
      color.value = randomColor();
    }, 1000);
  });
  onUnmount((cs) => {
    clearInterval(cs.__context[timerSymbol]);
  });
  return color;
};

export const RandomLight = (props: any) => {
  const color = crateRandomColorRef();
  return () => (
    <div {...props}>
      <Style
        styleFn={() => ({
          display: "inline-block",
          transition: "all 1s ease-in-out",
          backgroundColor: color.value,
          width: "1rem",
          height: "1rem",
          borderRadius: "1rem",
        })}
      ></Style>
    </div>
  );
};
