import { WorkerMessage } from "./types";

export class WorkerRegistry {
  private registry: {
    [type: string]: Worker;
  } = {};

  registerWorker(type: string, worker: Worker) {
    if (this.registry[type]) {
      console.warn(`Worker of type ${type} already registered.`);
    } else {
      this.registry[type] = worker;
    }
  }

  removeWorker(type: string) {
    delete this.registry[type];
  }

  getWorker(type: string) {
    const worker = this.registry[type];
    if (worker) {
      return worker;
    } else {
      throw new Error(`No worker of type ${type} registered.`);
    }
  }

  postMessage<T extends WorkerMessage<any, any>>(type: string, message: T) {
    const worker = this.getWorker(type);
    worker.postMessage(message);
  }

  listenRecv(type: string, token: string) {
    const worker = this.getWorker(type);
    let resolver: any;
    const handler = (event: MessageEvent<any>) => {
      const { message_token } = event.data || {};
      if (message_token !== token) {
        return;
      }
      const result = { ...event.data };
      delete result["message_token"];
      resolver(result);
      worker.removeEventListener("message", handler);
    };
    worker.addEventListener("message", handler);
    return {
      // TODO reject flow
      recv: new Promise((resolve, reject) => {
        resolver = resolve;
      }),
      dispose: () => worker.removeEventListener("message", handler),
    };
  }
}
