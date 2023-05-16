export type TDemo = {
  id: number;
  name: string;
  version: string;
  code: string;
};

export class DemoManager {
  private idx = 0;

  demos = [] as TDemo[];
  currentDemo: TDemo | null = null;

  public registerDemo(name: string, version: string, code: string) {
    const demo = {
      id: this.idx++,
      name,
      version,
      code,
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
