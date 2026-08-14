// import React from 'react'


const DarkThemeNavbar = () => {
  return (
     <nav className="w-[95%] mx-auto mt-6 h-18 px-6 rounded-xl border border-zinc-800 bg-zinc-950 text-white flex items-center justify-between shadow-lg">
      
      {/* Logo / Title */}
      <div className="text-xl font-bold tracking-wide cursor-pointer hover:text-indigo-400 transition-colors duration-200">
        Helios
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8 text-sm font-medium">
        <a
          href="#"
          className="cursor-pointer text-zinc-400 hover:text-white transition-colors duration-200"
        >
          Home
        </a>

        <a
          href="#"
          className="cursor-pointer text-zinc-400 hover:text-white transition-colors duration-200"
        >
          About
        </a>

        <a
          href="#"
          className="cursor-pointer text-zinc-400 hover:text-white transition-colors duration-200"
        >
          Contact
        </a>

        <a
          href="#"
          className="cursor-pointer text-zinc-400 hover:text-white transition-colors duration-200"
        >
          Challenges
        </a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* Dark Theme Button */}
        <button
          className="px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white cursor-pointer transition-all duration-200"
        >
          Dark
        </button>

        {/* GitHub Button */}
        <button
          className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 cursor-pointer transition-all duration-200"
        >
          GitHub
        </button>

      </div>

    </nav>
  )
}

export default DarkThemeNavbar