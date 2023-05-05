import { transform } from "@babel/standalone";

import { bundle } from "./bundler";
import RhjsPreset from "./RhjsPreset";
import { SourceFile, CompilerMessage } from "../types";

async function compile(files: SourceFile[], event: string) {
  const filesRecord: Record<string, string> = {};
  for (const file of files) {
    filesRecord[`./${file.filename.replace(/.(tsx|jsx)$/, "")}`] = file.source;
  }
  const bundled = bundle("./main", filesRecord);
  return { event, compiled: bundled };
}

async function babel(file: SourceFile, compileOpts: any) {
  const { code } = await transform(file.source, {
    presets: [
      [RhjsPreset, compileOpts],
      ["typescript", { onlyRemoveTypeImports: true }],
    ],
    filename: file.filename,
  });
  return { event: "BABEL", compiled: code };
}

self.addEventListener("message", async ({ data }) => {
  const message = data as CompilerMessage;

  const recv = (recv_message: any) => {
    self.postMessage({
      ...recv_message,
      message_token: message.message_token,
    });
  };

  try {
    if (message.event === "BABEL") {
      const {
        payload: { file, compile_options },
      } = message;
      recv(await babel(file, compile_options));
    } else if (message.event === "ROLLUP") {
      const {
        payload: { files, compile_options },
      } = message;
      recv(await compile(files, "ROLLUP"));
    } else {
      recv({
        event: "ERROR",
        error: `Unknown event name [${(<any>message).event}].`,
      });
    }
  } catch (error) {
    recv({ event: "ERROR", error: (error as Error).message });
  }
});

export {};
