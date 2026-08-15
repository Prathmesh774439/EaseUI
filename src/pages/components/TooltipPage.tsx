// import React from 'react'
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
// import { Button } from "@/components";
import Tooltip from "@/components/Tooltip/Tooltip";

const TooltipPage = () => {
  const toolTipcode = `
import Tooltip from "@/components/Tooltip/Tooltip";

{/* Top */}
      <div className="relative group">
        <button className="rounded bg-zinc-800 px-4 py-2 text-white">
          Top
        </button>

        <span className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded bg-black px-3 py-1 text-sm text-white group-hover:block">
          Tooltip on top
        </span>
      </div>

      {/* Bottom */}
      <div className="relative group">
        <button className="rounded bg-zinc-800 px-4 py-2 text-white">
          Bottom
        </button>

        <span className="absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 rounded bg-black px-3 py-1 text-sm text-white group-hover:block">
          Tooltip on bottom
        </span>
      </div>

      {/* Left */}
      <div className="relative group">
        <button className="rounded bg-zinc-800 px-4 py-2 text-white">
          Left
        </button>

        <span className="absolute right-full top-1/2 mr-2 hidden -translate-y-1/2 rounded bg-black px-3 py-1 text-sm text-white group-hover:block">
          Tooltip on left
        </span>
      </div>

      {/* Right */}
      <div className="relative group">
        <button className="rounded bg-zinc-800 px-4 py-2 text-white">
          Right
        </button>

        <span className="absolute left-full top-1/2 ml-2 hidden -translate-y-1/2 rounded bg-black px-2 py-1 text-sm text-white group-hover:block">
          Tooltip on right
        </span>
      </div>
       <span className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-md bg-violet-600 px-3 py-1.5 text-sm text-white group-hover:block">
    This is a custom tooltip
  </span>
</div>`;

  const propsData = [
    {
      prop: "content",
      type: "string",
      default: "—",
      description: "The content displayed inside the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "The position of the tooltip relative to the element",
    },
    {
      prop: "delay",
      type: "number",
      default: "0",
      description: "Delay in milliseconds before showing the tooltip",
    },
    {
      prop: "showArrow",
      type: "boolean",
      default: "true",
      description: "Whether to display the tooltip arrow",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the tooltip when set to true",
    },
  ];
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 space-y-12">
        <header className="space-y-2">
          <p
            className="text-4xl font-bold tracking-tight"
            style={{ color: "var(--text-color)" }}
          >
            Tooltip
          </p>
          <p className="text-lg text-gray-600">
            A tooltip is a small message that appears when a user hovers over,
            clicks, or focuses on an element to give extra information about it.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Usage</h2>
          <ComponentDemo code={toolTipcode}>
            <Tooltip />
          </ComponentDemo>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">API Reference</h2>
          <PropsTable data={propsData} />
        </section>
      </div>
    </div>
  );
};

export default TooltipPage;
