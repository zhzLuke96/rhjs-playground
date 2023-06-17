import { Ref, rh, untrack, unref, isRef } from "@rhjs/core";
import { Style } from "@rhjs/builtin";
import { DemoSelector } from "./DemoSelector";
import { HeaderBtn } from "./HeaderBtn";

const DarkSwitch = ({ isDark }: { isDark: boolean | Ref<boolean> }) => {
  return () => (
    <HeaderBtn
      onClick={() => {
        if (!isRef(isDark)) {
          return;
        }
        isDark.value = !untrack(isDark);
      }}
      isDark={isDark}
    >
      <span>{() => (unref(isDark) ? "🌘" : "🌖")}</span>
    </HeaderBtn>
  );
};

function HeaderLink(
  {
    isDark,
    href,
    target = "_blank",
  }: {
    href: string;
    isDark: boolean | Ref<boolean>;
    target?: string;
  },
  state: any,
  children: any[]
) {
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
}

export const AppHeader = ({ isDark }: { isDark: boolean | Ref<boolean> }) => {
  return () => (
    <div>
      <Style
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
        <span style="user-select: none;word-break: keep-all;white-space: nowrap;">
          🧩 <b>R</b>
          <small>eactive</small>
          <b>H</b>
          <small>ydrate</small>
          <b>JS</b> PLAYGROUND
        </span>
        <DarkSwitch isDark={isDark} />
        <DemoSelector />
      </div>
      <div></div>
      <div style="display: inline-flex; align-items: center; justify-content: right;">
        {/* NOTE: 暂时不显示这个链接了...因为其实现在的demo都在playground里 */}
        {/* <HeaderLink
          isDark={isDark}
          href="https://zhzluke96.github.io/rhjs-demos/#demo"
          target="_self"
        >
          demos
        </HeaderLink> */}
        <HeaderLink isDark={isDark} href="https://github.com/zhzLuke96/rh.js">
          github
        </HeaderLink>
      </div>
    </div>
  );
};
