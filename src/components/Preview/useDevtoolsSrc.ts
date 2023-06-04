import { onUnmounted } from "@rhjs/core";

export const createDevtoolsSrc = () => {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <meta charset="utf-8" />
  <title>DevTools</title>
  <style>
    @media (prefers-color-scheme: dark) {
      body {
        background-color: rgb(41 42 45);
      }
    }
  </style>
  <meta name="referrer" content="no-referrer" />
  <script src="https://unpkg.com/@ungap/custom-elements/es.js"></script>
  <script
    type="module"
    src="https://cdn.jsdelivr.net/npm/chii@1.8.0/public/front_end/entrypoints/chii_app/chii_app.js"
  ></script>
  <body class="undocked" id="-blink-dev-tools"></body>
</html>
`.trim();
  const devtoolsRawUrl = URL.createObjectURL(
    new Blob([html], { type: "text/html" })
  );
  onUnmounted(() => URL.revokeObjectURL(devtoolsRawUrl));
  return `${devtoolsRawUrl}#?embedded=${encodeURIComponent(location.origin)}`;
};
