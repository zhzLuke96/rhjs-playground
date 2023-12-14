import { isRef, Ref, rh, unref, untrack } from "@rhjs/core";
import { onUnmounted, createEffect, createWatcher } from "@rhjs/hooks";

type MonacoEditorProps = {
  value: string | Ref<string>;
  onChange: (value: string) => any;
  isDark: boolean | Ref<boolean>;
  onSave?: (value: string) => any;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "onChange">;

const loadMonaco = () =>
  import(
    "https://unpkg.com/@monaco-editor/loader@1.3.3/lib/umd/monaco-loader.js" as any
  )
    .then(() => (window as any).monaco_loader)
    .then((module) => {
      // *when debugger open this config:
      //
      // module.config({
      //   paths: {
      //     vs: "https://cdn.jsdelivr.net/npm/monaco-editor@latest/dev/vs",
      //   },
      // });
      const monaco = module.init();
      return monaco;
    });

/**
 * monaco editor (tsx)
 *
 * TODO: support type check and autocompletion
 */

export const MonacoEditor = ({
  value,
  onChange,
  isDark,
  onSave,
  ...props
}: MonacoEditorProps) => {
  let editor: any, model: any, monaco: any;

  createEffect(() => {
    const is_dark = unref(isDark);
    if (monaco?.editor) {
      if (is_dark) {
        monaco.editor.setTheme("vs-dark");
      } else {
        monaco.editor.setTheme("vs");
      }
    }
  });

  onUnmounted(() => {
    editor?.dispose();
  });

  if (isRef(value)) {
    createWatcher(value, (code) => {
      if (model?.getValue() === code) {
        return;
      }
      model?.setValue(code);
    });
  }

  return () => (
    <div
      {...props}
      ref={async (dom: any) => {
        monaco = await loadMonaco();

        model = monaco.editor.createModel(
          untrack(value as any),
          "typescript",
          monaco.Uri.file("main.ts")
        );
        model.onDidChangeContent(() => onChange(model.getValue()));

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          jsx: "react",
        });
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: true,
          noSyntaxValidation: true,
        });

        editor = monaco.editor.create(dom, {
          // value: untrack(defaultValue as any),
          // language: "typescript",
          automaticLayout: true,
          wordWrap: true,
          theme: untrack(isDark as any) ? "vs-dark" : "vs",
        });
        editor.setModel(model);

        if (onSave) {
          editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
            onSave(model.getValue());
          });
        }
      }}
    ></div>
  );
};
