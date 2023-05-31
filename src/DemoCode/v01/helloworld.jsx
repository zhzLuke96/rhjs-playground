import { rh, ref, mount, unref, computed, onUnmount } from "@rhjs/rh";

const createInterval = (cb, ms) => {
  const timer = setInterval(cb, ms);
  onUnmount(() => clearInterval(timer));
};

const App = () => {
  const nowDate = ref(new Date());
  const timeStr = computed(() => unref(nowDate).toLocaleTimeString());
  /**
   * Update the date value every 100ms using setInterval.
   * However, the computed property `timeStr` will only be recomputed and the view updated
   * when the `timeStr` ref value changes (is "dirty"), thanks to reactivity system.
   * */
  createInterval(() => (nowDate.value = new Date()), 100);

  return () => (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {timeStr}.</h2>
    </div>
  );
};

mount("#app", App);
