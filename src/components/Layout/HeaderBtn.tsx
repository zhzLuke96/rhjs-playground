import { builtin, Ref, rh, untrack, unref, isRef, onMount } from "@rhjs/rh";

export const HeaderBtn = (
  {
    styleFn,
    isDark,
    ...props
  }: {
    styleFn?: () => any;
    isDark: boolean | Ref<boolean>;
  } & JSX.HTMLAttributes<HTMLDivElement>,
  state: any,
  children: any[]
) => {
  return () => (
    <div {...props}>
      <builtin.Style
        styleFn={() => ({
          height: "30px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "12px",
          paddingRight: "12px",
          cursor: "pointer",
          userSelect: "none",
          marginLeft: "4px",
          "&:hover": {
            backgroundColor: unref(isDark)
              ? "rgba(64,64,64,1)"
              : "rgba(64,64,64,0.1)",
          },
          "&:active": {
            outline: "solid 1px",
            outlineColor: !unref(isDark) ? "rgba(64,64,64,1)" : "#fff",
          },
          ...styleFn?.(),
        })}
      />
      {children}
    </div>
  );
};
