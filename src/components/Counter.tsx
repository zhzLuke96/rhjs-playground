import { utils, rh, FC, builtin } from "@rhjs/rh";

const { ref } = utils.reactivity;

export const Counter: FC<{
  defaultValue?: number;
  stepValue?: number;
}> = ({ defaultValue = 0, stepValue = 1 } = {}, ...children) => {
  const count = ref(defaultValue || 0);
  return () => (
    <button onClick={() => (count.value += stepValue)}>
      <builtin.Style
        styleFn={() => ({
          borderRadius: "8px",
          border: "1px solid transparent",
          padding: "0.6em 1.2em",
          fontSize: "1em",
          fontWeight: "500",
          fontFamily: "inherit",
          backgroundColor: "#1a1a1a",
          cursor: "pointer",
          transition: "border-color 0.25s",

          "&:hover": {
            borderColor: "#646cff",
          },
          "&:focus": {
            outline: `4px auto -webkit-focus-ring-color`,
          },
        })}
      ></builtin.Style>
      {children}
      <span>{count}</span>
    </button>
  );
};
