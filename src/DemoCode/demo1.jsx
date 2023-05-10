import { Button, ensureFluentUILoaded } from "@rhjs/fluent-web-components";
import { rh, reactivity } from "@rhjs/rh";
const { ref } = reactivity;

ensureFluentUILoaded()
  .then(() => console.log('FluentUI initialized.'));

const App = () => {
  const count = ref(1);
  return () => (
    <Button
      appearance="accent"
      onClick={() => {
        count.value += 1;
        console.log(count.value);
      }}
    >
      {count}
    </Button>
  );
};

rh.mount(document.querySelector("#app"), App);
