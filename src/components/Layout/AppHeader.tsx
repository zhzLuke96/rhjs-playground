import { builtin, reactivity, rh } from "@rhjs/rh";

const DarkSwitch = ({
  isDark,
}: {
  isDark: boolean | reactivity.Ref<boolean>;
}) => {
  return () => (
    <div
      title="switch dark"
      onClick={() => {
        if (!reactivity.isRef(isDark)) {
          return;
        }
        isDark.value = !isDark.value;
      }}
    >
      <builtin.Style
        styleFn={() => ({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "12px",
          paddingRight: "12px",
          cursor: "pointer",
          userSelect: "none",
          "&:hover": {
            backgroundColor: reactivity.unref(isDark)
              ? "rgba(64,64,64,1)"
              : "rgba(64,64,64,0.1)",
          },
        })}
      />
      <span>{() => (reactivity.unref(isDark) ? "🌘" : "🌖")}</span>
    </div>
  );
};

export const AppHeader = ({
  isDark,
}: {
  isDark: boolean | reactivity.Ref<boolean>;
}) => {
  return () => (
    <div>
      <builtin.Style
        styleFn={() => ({
          paddingLeft: "12px",
          paddingRight: "12px",
          height: "100%",
          width: "calc(100% - 24px)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 12px minmax(0, 1fr)",
        })}
      />

      <div style="display: inline-flex; align-items: center;">
        <span style="user-select: none;">🧩 rh.js</span>
        <DarkSwitch isDark={isDark} />
      </div>
      <div></div>
      <div style="display: inline-flex; align-items: center; justify-content: right;">
        <span>demos</span>
        <span>github</span>
      </div>
    </div>
  );
};
