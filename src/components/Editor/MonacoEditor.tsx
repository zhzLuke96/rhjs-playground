import { cs, reactivity, rh, utils } from "@rhjs/rh";
import { RefProperty } from "../../types";

const { hookEffect } = cs;
const { unref } = reactivity;
const { untrack } = utils;

type MonacoEditorProps = {
  defaultValue: string | reactivity.Ref<string>;
  onChange: (value: string) => any;
  isDark: boolean | reactivity.Ref<boolean>;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "onChange">;

export const MonacoEditor = ({
  defaultValue,
  onChange,
  isDark,
  ...props
}: MonacoEditorProps) => {
  const loadMonaco = () =>
    import(
      "https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.min.js" as any
    ).then(() => (window as any).monaco_loader.init());
  let editor: any, model: any, monaco: any;

  hookEffect(() => {
    const is_dark = unref(isDark);
    if (monaco?.editor) {
      if (is_dark) {
        monaco.editor.setTheme("vs-dark");
      } else {
        monaco.editor.setTheme("vs");
      }
    }
  });
  return () => (
    <div
      {...props}
      ref={async (dom: any) => {
        monaco = await loadMonaco();
        editor = monaco.editor.create(dom, {
          value: untrack(defaultValue as any),
          language: "javascript",
          automaticLayout: true,
          wordWrap: true,
          theme: untrack(isDark as any) ? "vs-dark" : "vs",
        });
        model = editor.getModel();
        model.onDidChangeContent(() => onChange(model.getValue()));
      }}
    ></div>
  );
};
