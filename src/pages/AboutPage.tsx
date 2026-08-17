import { useRef } from "react";
import { Github, Sparkles, Code2, Palette } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".about-badge", { opacity: 0, y: -12, duration: 0.5 })
      .from(".about-title", { opacity: 0, y: 24, duration: 0.7 }, "-=0.2")
      .from(".about-sub", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
      .from(".value-card", { opacity: 0, y: 20, duration: 0.5, stagger: 0.12 }, "-=0.2")
      .from(".stat-item", { opacity: 0, y: 16, duration: 0.4, stagger: 0.1 }, "-=0.2")
      .from(".cta-block", { opacity: 0, y: 16, duration: 0.5 }, "-=0.1");
  }, { scope: pageRef });

  return (
    <div className="w-full px-6 md:px-8" ref={pageRef}>
      {/* Header */}
      <section className="max-w-3xl mx-auto pt-24 pb-16 flex flex-col items-center text-center">
        <span className="about-badge inline-flex items-center gap-2 text-xs font-medium text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-950 border border-violet-200 dark:border-violet-900 rounded-full px-3 py-1 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
          About Ease-Ui
        </span>

        <h1 className="about-title font-[Poppins] font-bold text-4xl md:text-5xl leading-tight">
          Built by a developer,{" "}
          <span className="text-violet-600 dark:text-violet-400">for developers</span>
        </h1>

        <p className="about-sub mt-5 text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl">
          Ease-Ui started as a personal frontend project — a React + TypeScript
          component library focused on strict typing, clean composition, and
          motion that feels intentional, not decorative.
        </p>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pb-20">
        {[
          {
            icon: Code2,
            title: "Type-safe by default",
            desc: "Strict TypeScript, forwardRef, and predictable prop contracts across every component.",
          },
          {
            icon: Sparkles,
            title: "Motion with purpose",
            desc: "GSAP-powered animations abstracted into reusable hooks — subtle, never distracting.",
          },
          {
            icon: Palette,
            title: "Composable design",
            desc: "Built on Radix primitives and cn() utilities so components stay flexible and unopinionated.",
          },
        ].map((v) => (
          <div
            key={v.title}
            className="value-card bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5"
          >
            <v.icon size={20} className="text-violet-600 dark:text-violet-400 mb-3" />
            <h3 className="font-medium text-zinc-900 dark:text-white mb-1">{v.title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{v.desc}</p>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="max-w-3xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-6 pb-20 border-y border-zinc-200 dark:border-zinc-800 py-10">
        {[
          { value: "TypeScript", label: "Strict mode" },
          { value: "GSAP", label: "Animation engine" },
          { value: "Radix UI", label: "Primitives" },
          { value: "Tailwind", label: "Styling" },
        ].map((s) => (
          <div key={s.label} className="stat-item text-center">
            <p className="font-[Poppins] font-bold text-lg text-zinc-900 dark:text-white">
              {s.value}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{s.label}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="cta-block max-w-2xl mx-auto text-center pb-24">
        <h2 className="font-[Poppins] font-bold text-2xl text-zinc-900 dark:text-white mb-3">
          Follow the build
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Ease-Ui is under active development. Source, issues, and progress
          are all open on GitHub.
        </p>
        <button
          onClick={() => window.open("https://github.com/Prathmesh774439/EaseUI.git", "_blank")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
        >
          <Github size={16} />
          View on GitHub
        </button>
        <h1 className="font-bold text-3xl font-[Poppins]" >Prathmesh Kolam</h1>
      </section>
    </div>
  );
};

export default AboutPage;