// import React from 'react'



const Tooltip = () => {

  

  return  <div className="flex max-h-screen items-center justify-center gap-10">
      
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


<div className="group relative">
  <button className="rounded-md bg-zinc-800 px-4 py-2 text-white">
    Custom tooltip
  </button>

  <span className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-md bg-violet-600 px-3 py-1.5 text-sm text-white group-hover:block">
    This is a custom tooltip
  </span>
</div>


    </div>;
};

export default Tooltip;
