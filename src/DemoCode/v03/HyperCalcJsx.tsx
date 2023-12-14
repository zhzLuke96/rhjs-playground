// @ts-nocheck
import { Scope } from "@rhjs/builtin";
import { hyper } from "@rhjs/hyper";
import { css as _css } from "@rhjs/tag";
import { rh, mount } from "@rhjs/core";

const text = String;
const css = _css.minify;

const computer = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const initialState = {
  fn: "",
  carry: 0,
  value: 0,
  hasCarry: false,
};

const Clear = () => initialState;

const NewDigit = (state, number) => ({
  ...state,
  hasCarry: false,
  value: (state.hasCarry ? 0 : state.value) * 10 + number,
});

const NewFn = (state, fn) => ({
  ...state,
  fn,
  hasCarry: true,
  carry: state.value,
  value:
    state.hasCarry || !state.fn
      ? state.value
      : computer[state.fn](state.carry, state.value),
});

const Equal = (state) => ({
  ...state,
  hasCarry: true,
  carry: state.hasCarry ? state.carry : state.value,
  value: state.fn
    ? computer[state.fn](
        state.hasCarry ? state.value : state.carry,
        state.hasCarry ? state.carry : state.value
      )
    : state.value,
});

const displayView = (value) => <div class={"display"}>{value}</div>;

const keysView = (...children) => <div class={"keys"}>{children}</div>;

const fnView = (props, act) =>
  props.keys.map((fn) => (
    <button class="function" onclick={act(NewFn, fn)}>
      {fn}
    </button>
  ));

const digitsView = ({ digits }, act) =>
  digits.map((digit) => (
    <button class={{ zero: digit === 0 }} onClick={act(NewDigit, digit)}>
      {digit}
    </button>
  ));

const acView = (act) => <button onClick={act(Clear)}>AC</button>;

const eqView = (act) => (
  <button onClick={act(Equal)} class={"equal"}>
    =
  </button>
);

export const Calculator = hyper(initialState, ({ value }, { act }) => (
  <Scope>
    {css`
      main {
        width: 500px;
      }

      .display {
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 2.5em;
        margin-bottom: 12px;
        padding: 0.2em 0.4em;
        text-align: right;
      }

      .keys {
        display: grid;
        grid-gap: 0.5rem;
        grid-template-columns: repeat(4, 1fr);
      }

      .keys .function {
        background: rgba(0, 0, 0, 0.3);
        font-weight: bolder;
      }

      .keys .equal {
        background: rgb(75, 150, 255);
        grid-column: -2;
        grid-row: 2 / span 4;
      }

      .keys .zero {
        grid-column: span 2;
      }

      button {
        padding: 10px;
        padding-right: 30px;
        padding-left: 30px;
        border-radius: 4px;
        border: none;
      }
    `}
    <main
      tabIndex={-1}
      onKeyDown={act((state, e) =>
        "0123456789".includes(e.key)
          ? [NewDigit, Number(e.key)]
          : "+-*/".includes(e.key)
          ? [NewFn, e.key]
          : e.key === "=" || e.key === "Enter"
          ? [Equal]
          : e.key === "Escape"
          ? [Clear]
          : state
      )}
    >
      {displayView(value)}
      {keysView(
        ...fnView({ keys: Object.keys(computer) }, act),
        ...digitsView({ digits: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0] }, act),
        acView(act),
        eqView(act)
      )}
    </main>
  </Scope>
));

const App = () => {
  return () => (
    <div>
      <h1> Calculator </h1>
      <div
        style={{
          width: "300px",
        }}
      >
        <Calculator></Calculator>
      </div>
    </div>
  );
};

mount("#app", App);
