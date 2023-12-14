import { rh, reactivity } from "@rhjs/rh";
const { ref } = reactivity;

const App = () => {
  const count = ref(1);
  return () =>
    rh(
      "button",
      {
        onClick: () => {
          count.value += 1;
          console.log(count.value);
        },
      },
      count
    );
};

rh.mount(document.querySelector("#app"), App);
