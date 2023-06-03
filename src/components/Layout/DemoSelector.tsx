import { rh } from "@rhjs/rh";
import { connectDemoCode } from "../../DemoCode";
import { TDemo } from "../../DemoCode/DemoCodeMgr";

const getDemoVersion = (demo: TDemo) => {
  const url = demo.importMap?.["@rhjs/rh"];
  if (url) {
    const [, v] = /@rhjs\/rh@(.+?)\//.exec(url) || [];
    if (v) {
      return v;
    }
  }
  return "latest";
};

export const DemoSelector = () => {
  const { selectDemo, demos } = connectDemoCode();
  return () => (
    <div>
      <select onChange={(ev: any) => selectDemo(ev.target.value)}>
        {demos.map((demo) => (
          <option value={demo.id}>
            {demo.name} @{getDemoVersion(demo)}
          </option>
        ))}
      </select>
    </div>
  );
};
