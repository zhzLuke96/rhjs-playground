export interface SourceFile {
  filename: string;
  source: string;
}

export type WorkerMessage<Event extends string, Payload> = {
  event: Event;
  message_token: string;
  payload: Payload;
};

type CompileOptions = any;

export type BabelMessage = WorkerMessage<
  "BABEL",
  {
    file: SourceFile;
    compile_options: CompileOptions;
  }
>;
export type RollupMessage = WorkerMessage<
  "ROLLUP",
  {
    files: SourceFile[];
    compile_options: CompileOptions;
  }
>;

export type CompilerMessage = BabelMessage | RollupMessage;
