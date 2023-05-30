import { rh } from "@rhjs/rh";
import { connectDemoCode } from "../../DemoCode";

export const DemoSelector = () => {
  const { selectDemo, demos } = connectDemoCode();
  return () => (
    <div>
      <select onChange={(ev: any) => selectDemo(ev.target.value)}>
        {demos.map((demo) => (
          <option value={demo.id}>
            {demo.name} @{demo.version}
          </option>
        ))}
      </select>
    </div>
  );
};
