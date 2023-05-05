import { cs, reactivity, rh, utils } from "@rhjs/rh";

const { hookEffect } = cs;
const { unref } = reactivity;
const { untrack } = utils;

type MonacoEditorProps = {
  defaultValue: string | reactivity.Ref<string>;
  onChange: (value: string) => any;
  isDark: boolean | reactivity.Ref<boolean>;
  onSave?: (value: string) => any;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "onChange">;

const loadMonaco = () =>
  import(
    "https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.min.js" as any
  ).then(() => (window as any).monaco_loader.init());

/**
 * monaco editor (tsx)
 *
 * FIXME: 现在hover到变量上会报错...最好还是不要用@monaco-editor/loader直接用库
 */

export const MonacoEditor = ({
  defaultValue,
  onChange,
  isDark,
  onSave,
  ...props
}: MonacoEditorProps) => {
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

  cs.onUnmount(() => editor?.dispose());
  return () => (
    <div
      {...props}
      ref={async (dom: any) => {
        monaco = await loadMonaco();
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          jsx: "react",
        });
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: false,
          noSyntaxValidation: false,
        });
        editor = monaco.editor.create(dom, {
          value: untrack(defaultValue as any),
          language: "typescript",
          automaticLayout: true,
          wordWrap: true,
          theme: untrack(isDark as any) ? "vs-dark" : "vs",
        });
        model = editor.getModel();
        model.onDidChangeContent(() => onChange(model.getValue()));
        if (onSave) {
          editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
            onSave(model.getValue());
          });
        }
      }}
    ></div>
  );
};
