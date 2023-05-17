import { rh, ref, mount, unref } from "@rhjs/rh";

const App = () => {
  const nowDate = ref(new Date());
  setInterval(() => nowDate.value = new Date(), 1000);
  return () => (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {() => unref(nowDate).toLocaleTimeString()}.</h2>
    </div>
  );
};

mount("#app", App);
