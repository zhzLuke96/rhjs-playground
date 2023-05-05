import ComplierWorker from "./workers/complier.worker.ts?worker";
import { SourceFile, WorkerMessage } from "./types";

import { WorkerRegistry } from "./WorkerRegistry";

/**
 * app runtime
 *
 * TODO: add editor runtime (highlight or lint or format)
 */
export class AppRuntime {
  registry = new WorkerRegistry();

  constructor() {
    this.initialize();
  }

  private async initialize() {
    this.registry.registerWorker("complier", new ComplierWorker());
  }

  private worker_caller(
    eventType: string,
    worker_message: Omit<WorkerMessage<any, any>, "message_token">
  ) {
    const token = Math.random().toString(36).slice(2);
    const message = {
      ...worker_message,
      message_token: token,
    };
    this.registry.postMessage(eventType, message);
    return this.registry.listenRecv(eventType, token);
  }

  compileFile(source: SourceFile) {
    return this.worker_caller("complier", {
      event: "BABEL",
      payload: {
        file: source,
        compile_options: {},
      },
    });
  }

  compileFiles(sourceFiles: SourceFile[]) {
    return this.worker_caller("complier", {
      event: "ROLLUP",
      payload: {
        files: sourceFiles,
        compile_options: {},
      },
    });
  }
}
