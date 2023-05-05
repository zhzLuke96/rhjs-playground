import { builtin, reactivity, rh, utils } from "@rhjs/rh";

const { untrack } = utils;

const HeaderBtn = (
  {
    styleFn,
    isDark,
    ...props
  }: {
    styleFn?: () => any;
    isDark: boolean | reactivity.Ref<boolean>;
  } & JSX.HTMLAttributes<HTMLDivElement>,
  ...children: any[]
) => {
  return () => (
    <div {...props}>
      <builtin.Style
        styleFn={() => ({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "12px",
          paddingRight: "12px",
          cursor: "pointer",
          userSelect: "none",
          marginLeft: "4px",
          "&:hover": {
            backgroundColor: reactivity.unref(isDark)
              ? "rgba(64,64,64,1)"
              : "rgba(64,64,64,0.1)",
          },
          "&:active": {
            outline: "solid 1px",
            outlineColor: !reactivity.unref(isDark)
              ? "rgba(64,64,64,1)"
              : "#fff",
          },
          ...styleFn?.(),
        })}
      />
      {children}
    </div>
  );
};

const DarkSwitch = ({
  isDark,
}: {
  isDark: boolean | reactivity.Ref<boolean>;
}) => {
  return () => (
    <HeaderBtn
      onClick={() => {
        if (!reactivity.isRef(isDark)) {
          return;
        }
        isDark.value = !untrack(isDark);
      }}
      isDark={isDark}
    >
      <span>{() => (reactivity.unref(isDark) ? "🌘" : "🌖")}</span>
    </HeaderBtn>
  );
};

const HeaderLink = (
  {
    isDark,
    href,
    target = "_blank",
  }: {
    href: string;
    isDark: boolean | reactivity.Ref<boolean>;
    target?: string;
  },
  ...children: any[]
) => {
  return () => (
    <HeaderBtn
      isDark={isDark}
      onClick={() => {
        window.open(href, target);
      }}
    >
      <a
        href={href}
        target={target}
        style="text-decoration: none; color: inherit;"
      >
        {children}
      </a>
    </HeaderBtn>
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
        <HeaderLink
          isDark={isDark}
          href="https://zhzluke96.github.io/rhjs-demos/#demo"
          target="_self"
        >
          demos
        </HeaderLink>
        <HeaderLink isDark={isDark} href="https://github.com/zhzLuke96/rh.js">
          github
        </HeaderLink>
      </div>
    </div>
  );
};
