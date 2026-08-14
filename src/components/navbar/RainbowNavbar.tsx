import { Github, Rainbow, ArrowUpRight } from "lucide-react";



const RainbowNavbar = () => {
  return (
    <nav className="group relative mx-auto mt-6 flex h-20 w-[95%] items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b12]/95 px-6 text-white shadow-2xl backdrop-blur-xl">

      {/* Rainbow glow */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl transition-all duration-700 group-hover:bg-pink-500/30" />

      <div className="pointer-events-none absolute -right-20 -bottom-24 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl transition-all duration-700 group-hover:bg-cyan-400/30" />

      {/* Logo */}
      <div className="relative flex cursor-pointer items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-pink-500 via-purple-500 to-cyan-400 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:rotate-6 hover:scale-110">
          <Rainbow size={22} />
        </div>

        <span className="text-xl font-bold tracking-tight">
          Rainbow
          <span className="bg-linear-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Max
          </span>
        </span>
      </div>

      {/* Navigation */}
      <div className="relative flex items-center gap-2 rounded-xl border border-white/5 bg-white/3 p-1">
        {["Home", "About", "Message Us", "Rainbow"].map((item) => (
          <a
            key={item}
            href="#"
            className="group/link relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-white/[0.07] hover:text-white"
          >
            <span className="relative z-10">{item}</span>

            {/* Animated underline */}
            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-pink-400 via-purple-400 to-cyan-400 transition-all duration-300 group-hover/link:w-8" />
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="relative flex items-center gap-3">

        {/* GitHub */}
        <button
          className="group/github flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/4 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
          title="GitHub"
        >
          <Github
            size={19}
            className="transition-transform duration-300 group-hover/github:rotate-12"
          />
        </button>

  {/* Logout */}
        <button
          className="group/logout flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
        >
          <Rainbow
            size={17}
            className="transition-transform duration-500 group-hover/logout:rotate-180"
          />

          <span>Logout</span>

          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover/logout:translate-x-1 group-hover/logout:-translate-y-1"
          />
        </button>

      </div>
    </nav>
  )
}

export default RainbowNavbar