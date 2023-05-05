import { rh, reactivity } from "@rhjs/rh";
const { ref } = reactivity;

const App = () => {
  const count = ref(1);
  return () => (
    <button
      onClick={() => {
        count.value += 1;
        console.log(count.value);
      }}
    >
      {count}
    </button>
  );
};

rh.mount(document.querySelector("#app"), App);
