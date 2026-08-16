import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const navItems = [
  { label: "Components", path: "components/button" },
  { label: "About", path: "about" },
  { label: "Templates", path: "templates" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );

  const searchRef = useRef<HTMLInputElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const themeIconRef = useRef<HTMLLIElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Entrance animation
  useGSAP(() => {
    gsap.from(".nav-item", {
      opacity: 0,
      y: -10,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
    });
  }, { scope: navRef });

  // Logo hover animation
  useGSAP(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const dot = logo.querySelector(".logo-dot");

    const handleEnter = () => {
      gsap.to(dot, { scale: 1.6, backgroundColor: "#7c3aed", duration: 0.3, ease: "back.out(3)" });
    };
    const handleLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    logo.addEventListener("mouseenter", handleEnter);
    logo.addEventListener("mouseleave", handleLeave);

    return () => {
      logo.removeEventListener("mouseenter", handleEnter);
      logo.removeEventListener("mouseleave", handleLeave);
    };
  }, { scope: navRef });

  // Theme toggle icon swap animation
  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const icon = themeIconRef.current?.querySelector("svg");
    if (!icon) return;

    gsap.fromTo(
      icon,
      { rotate: -90, scale: 0.5, opacity: 0 },
      { rotate: 0, scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }
    );
  }, [mode]);

  return (
    <nav
      ref={navRef}
      className="h-16 w-full flex items-center justify-between px-6 md:px-8 border-b border-zinc-200 dark:border-zinc-800 bg-[#FAFAF9] dark:bg-zinc-950 sticky top-0 z-50"
    >
      <div className="flex items-center gap-8">
        <h1
          ref={logoRef}
          onClick={() => navigate("/")}
          className="nav-item flex items-center gap-2 font-bold text-xl font-[Poppins] cursor-pointer text-zinc-900 dark:text-white"
        >
          <span className="logo-dot h-2 w-2 rounded-full bg-violet-600 inline-block" />
          Ease-Ui
        </h1>

        <div className="nav-item hidden sm:flex items-center bg-white dark:bg-zinc-900 rounded-md px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 focus-within:border-violet-400 dark:focus-within:border-violet-700 transition-colors">
          <Search size={16} className="text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            ref={searchRef}
            placeholder="Search components"
            className="ml-2 bg-transparent outline-none text-sm text-zinc-700 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 w-40"
          />
          <kbd className="ml-3 hidden lg:inline-block text-[10px] font-medium text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 py-0.5">
            Ctrl + /
          </kbd>
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-6 text-base text-zinc-500 dark:text-zinc-400">
        {navItems.map((item) => {
          const isActive = location.pathname.includes(item.path);
          return (
            <li
              key={item.path}
              onClick={() => navigate(item.path)}
              className="nav-item relative cursor-pointer group"
            >
              <span
                className={`transition-colors font-[Libertinus_Serif] ${
                  isActive
                    ? "text-violet-600 dark:text-violet-400 font-bold"
                    : "font-medium group-hover:text-zinc-900 dark:group-hover:text-white"
                }`}
              >
                {item.label}
              </span>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-violet-600 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          );
        })}

        <span className="nav-item h-5 w-px bg-zinc-200 dark:bg-zinc-800" />

        <li
          ref={themeIconRef}
          className="nav-item cursor-pointer p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          onClick={() => dispatch(toggleTheme())}
        >
          {mode === "dark" ? (
            <Sun size={18} className="text-amber-400" />
          ) : (
            <Moon size={18} className="text-zinc-600" />
          )}
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button className="md:hidden p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900">
        <Menu size={20} />
      </button>
    </nav>
  );
};

export default Navbar;