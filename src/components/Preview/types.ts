import { RefProperty } from "../../types";

export type PreviewProps = RefProperty<{
  importMap: Record<string, string>;
  code: string;
  devtools: boolean;
  isDark: boolean;
}> &
  JSX.HTMLAttributes<HTMLDivElement>;
