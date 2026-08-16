import { useRef } from "react";
import { Check } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    desc: "For solo devs trying things out.",
    features: ["Core components", "Community support", "MIT license", "Basic theming"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    desc: "For teams shipping production UI.",
    features: [
      "Everything in Free",
      "Advanced components",
      "GSAP animation presets",
      "Priority support",
      "Figma kit access",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For orgs with custom needs.",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom component builds",
      "SLA guarantee",
    ],
    cta: "Contact us",
    highlighted: false,
  },
];

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".pricing-header > *", {
      opacity: 0,
      y: 16,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
    });
    gsap.from(".pricing-card", {
      opacity: 0,
      y: 24,
      duration: 0.5,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.15,
    });
  }, { scope: sectionRef });

  return (
    <div className="w-full px-6 md:px-8" ref={sectionRef}>
      <section className="max-w-5xl mx-auto py-24">
        <div className="pricing-header flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-950 border border-violet-200 dark:border-violet-900 rounded-full px-3 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
            Pricing
          </span>
          <h2 className="font-[Poppins] font-bold text-3xl md:text-4xl">
            Simple pricing, no surprises
          </h2>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-md">
            Start free. Upgrade when your team needs more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative flex flex-col rounded-xl p-6 ${
                plan.highlighted
                  ? "border-2 border-violet-600 bg-white dark:bg-zinc-900"
                  : "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-violet-600 text-white px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              <h3 className="font-medium text-zinc-900 dark:text-white">{plan.name}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{plan.desc}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-[Poppins] font-bold text-3xl text-zinc-900 dark:text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{plan.period}</span>
                )}
              </div>

              <button
                className={`mt-6 w-full py-2.5 rounded-md text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100"
                    : "border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <Check size={16} className="text-violet-600 dark:text-violet-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PricingSection;