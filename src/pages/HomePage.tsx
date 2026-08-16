import { useRef } from "react";
import { useNavigate } from "react-router";
import { Copy } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomePage = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-badge", { opacity: 0, y: -12, duration: 0.5 })
      .from(".hero-title", { opacity: 0, y: 24, duration: 0.7 }, "-=0.2")
      .from(".hero-sub", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
      .from(".hero-cta", { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 }, "-=0.3")
      .from(".hero-install", { opacity: 0, scale: 0.96, duration: 0.4 }, "-=0.2")
      .from(".feature-card", { opacity: 0, y: 20, duration: 0.5, stagger: 0.12 }, "-=0.1");
  }, { scope: heroRef });

  return (
    <div className="w-full px-6 md:px-8" ref={heroRef}>
      {/* Hero */}
      <section className="max-w-5xl mx-auto pt-24 pb-20 flex flex-col items-center text-center">
        <span className="hero-badge inline-flex items-center gap-2 text-xs font-medium text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-950 border border-violet-200 dark:border-violet-900 rounded-full px-3 py-1 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
          v1.0 now live
        </span>

        <h1 className="hero-title font-[Poppins] font-bold text-4xl md:text-6xl leading-tight max-w-3xl">
          Build interfaces that feel{" "}
          <span className="text-violet-600 dark:text-violet-400">effortless</span>
        </h1>

        <p className="hero-sub mt-5 text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl">
          A React + TypeScript component library with GSAP-powered motion,
          built for developers who care about the details.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={() => navigate("components")}
            className="hero-cta px-5 py-2.5 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
          >
            Browse components
          </button>
          <button
            onClick={() => window.open("https://github.com/Prathmesh774439/EaseUI.git", "_blank")}
            className="hero-cta px-5 py-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            GitHub
          </button>
        </div>

        {/* Install snippet */}
        <div className="hero-install mt-10 flex items-center gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 text-sm font-mono text-zinc-600 dark:text-zinc-300">
          <span className="text-violet-600 dark:text-violet-400">$</span>
          npm install ease-ui
          <button
            onClick={() => navigator.clipboard.writeText("npm install ease-ui")}
            className="ml-2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
          >
            <Copy size={14} />
          </button>
        </div>
      </section>

      {/* Feature strip */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pb-24">
        {[
          { title: "Fully typed", desc: "Strict TypeScript, no any's, predictable props." },
          { title: "Animated", desc: "GSAP motion built into every interactive component." },
          { title: "Composable", desc: "Radix primitives, cn() utilities, forwardRef by default." },
        ].map((f) => (
          <div
            key={f.title}
            className="feature-card bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5"
          >
            <h3 className="font-medium text-zinc-900 dark:text-white mb-1">{f.title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;