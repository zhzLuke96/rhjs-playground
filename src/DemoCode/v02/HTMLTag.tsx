import { mount, createState } from "@rhjs/core";
// @ts-ignore
import { html, css } from "@rhjs/tag";

const AppStyle = () => {
  return () => css`
    .card {
      width: 500px;
      margin: auto;

      padding: 2rem;
      border-radius: 1rem;
      box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
        rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
        rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .card-title {
      font-weight: bold;
      font-size: 1.2rem;
    }
    .card-text {
      font-size: 0.8rem;
    }

    .btn {
      padding: 0.6em 2em;
      border: none;
      outline: none;
      color: rgb(255, 255, 255);
      background: #111;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    .btn:before {
      content: "";
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
      );
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      -webkit-filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing-btn 20s linear infinite;
      transition: opacity 0.3s ease-in-out;
      border-radius: 10px;
    }

    @keyframes glowing-btn {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }

    .btn:after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: #222;
      left: 0;
      top: 0;
      border-radius: 10px;
    }
  `;
};

const Card = () => {
  const [count, setCount] = createState(0);
  return () => html`
    <div class="card">
      <h2 class="card-title">Card title</h2>
      <p class="card-text">
        Lorem ipsum dolor sit amet, ferri dicunt ius an, dico nihil suscipit pro
        cu. In nostrud deterruisset mei, at vis partiendo pertinacia
        interpretaris. Regione feugait ponderum usu an, mei facer dolorum
        scripserit no, omnium inimicus te usu. Usu graeco iudicabit efficiendi
        at, cu ridens possit admodum sit.
      </p>
      <div onclick=${() => setCount((c) => c + 1)} class="btn btn-primary">
        Count: ${count}
      </div>
    </div>
  `;
};

const App = () => {
  return () => html`
    <h1>Hello HTML Tag</h1>
    <small>and css tag</small>
    <${AppStyle} />
    <${Card} />
  `;
};

mount("#app", App);
