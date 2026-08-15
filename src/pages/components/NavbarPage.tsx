import { Navbar } from "@/components/navbar";
import ComponentDemo from "@/pages/ComponentsDemo"; // your reusable ComponentDemo
import PropsTable from "@/components/Personal/PropsTable";
import DarkThemeNavbar from "@/components/navbar/DarkThemeNavbar";
import RainbowNavbar from "@/components/navbar/RainbowNavbar";


const NavbarPage = () => {
  const lightNavbar = `import ComponentDemo from "../ComponentsDemo";

      <nav className="w-[98%] mx-auto mt-7 h-20 bg-white rounded-lg shadow-md flex items-center justify-between px-8">
      
      {/* Logo */}
      <div className="text-xl text-gray-900">
        Logo
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-7 text-lg text-gray-900">
        <a href="#" className="hover:text-gray-600 transition">
          Home
        </a>

        <a href="#" className="hover:text-gray-600 transition">
          About
        </a>

        <a href="#" className="hover:text-gray-600 transition">
          Customer
        </a>
      </div>

      {/* Profile Button */}
      <button className="w-36 h-14 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition">
        Profile
      </button>
      
    </nav>
`
const darkNavbar = `
   import DarkThemeNavbar from "@/components/navbar/DarkThemeNavbar";

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
`
const rainNav = `
import RainbowNavbar from "@/components/navbar/RainbowNavbar";

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

`;



const propsData = [
  {
    prop: "title",
    type: "string",
    default: `"Helios"`,
    description: "Defines the title or logo displayed on the left side of the navbar.",
  },
  {
    prop: "navLinks",
    type: "array",
    default: `["Home", "About", "Contact", "Challenges"]`,
    description: "Defines the navigation links displayed in the navbar.",
  },
  {
    prop: "showThemeButton",
    type: "boolean",
    default: "true",
    description: "Controls whether the dark theme button is displayed.",
  },
  {
    prop: "themeText",
    type: "string",
    default: `"Dark"`,
    description: "Defines the text displayed inside the theme button.",
  },
  {
    prop: "showGithub",
    type: "boolean",
    default: "true",
    description: "Controls whether the GitHub button is displayed.",
  },
  {
    prop: "githubText",
    type: "string",
    default: `"GitHub"`,
    description: "Defines the text displayed inside the GitHub button.",
  },
];  

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <ComponentDemo code={lightNavbar}>
        <Navbar />
      </ComponentDemo>
   
    <ComponentDemo code={darkNavbar}>
       <DarkThemeNavbar/>

      </ComponentDemo>
 
  <ComponentDemo code={rainNav}>
      <RainbowNavbar/>

      </ComponentDemo>


       <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-600"  style={{ color: "var(--text-color)" }}>API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
