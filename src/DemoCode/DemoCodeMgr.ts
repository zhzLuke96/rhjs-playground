export type TDemo = {
  id: number;
  name: string;
  code: string;

  importMap?: any;
};

export class DemoManager {
  private idx = 0;

  demos = [] as TDemo[];
  currentDemo: TDemo | null = null;

  public registerDemo(demoCfg: Omit<TDemo, "id">) {
    const demo = {
      id: this.idx++,
      ...demoCfg,
    };

    this.demos.push(demo);
    this.currentDemo ||= demo;
  }

  public selectDemo(idx: number) {
    const demo = this.demos.find((d) => d.id === Number(idx));
    if (!demo) {
      throw new Error(`Cannot find demo with name ${name}`);
    }
    this.currentDemo = demo;
    return demo;
  }
}
