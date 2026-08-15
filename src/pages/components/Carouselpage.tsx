import ComponentDemo from "@/pages/ComponentsDemo"; // your reusable ComponentDemo
import PropsTable from "@/components/Personal/PropsTable";
import Carousel from "@/components/Carousel/Carousel";
import ControlCarousel from "@/components/Carousel/ControlCarousel";
import IndicatorCarousel from "@/components/Carousel/IndicatorCarousel";

const Carouselpage = () => {
  const carouselCode = `
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.pexels.com/photos/5864593/pexels-photo-5864593.jpeg",
    alt: "First slide",
  },
  {
    src: "https://images.pexels.com/photos/25568757/pexels-photo-25568757.jpeg",
    alt: "Second slide",
  },
  {
    src: "https://images.pexels.com/photos/19814654/pexels-photo-19814654.jpeg",
    alt: "Third slide",
  },
];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
     return () => clearInterval(interval);
  }, []);

<div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: "translateX(-\${currentSlide * 100}%)",
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              className="block w-full"
            />
          </div>
        ))}
      </div>
    </div>  

  `;

  const Controlcode = `
  import React, { useState } from 'react'

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    src: "https://plus.unsplash.com/premium_photo-1661780043624-8154b56cea55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNsaWRlcnN8ZW58MHx8MHx8fDA%3D",
    alt: "First slide",
  },
  {
    src: "https://images.unsplash.com/photo-1764463976425-c4e72ea94d6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2xpZGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    alt: "Second slide",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1698362819146-bb3233129fda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpZGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    alt: "Third slide",
  },]

   <div className="relative w-full overflow-hidden">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: \`translateX(-\${currentSlide * 100}%)\`,
    }}
  >
    {slides.map((slide, index) => (
      <div key={index} className="w-full shrink-0">
        <img
          src={slide.src}
          alt={slide.alt}
          className="block w-full"
        />
      </div>
    ))}
  </div>

  <button
    type="button"
    onClick={() =>
      setCurrentSlide(
        (prev) => (prev - 1 + slides.length) % slides.length
      )
    }
    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-white hover:bg-black/70"
  >
    ←
  </button>

  <button
    type="button"
    onClick={() =>
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-white hover:bg-black/70"
  >
    →
  </button>
</div>
  `;

  const IndicatorCode = `
    import { useState } from "react";

    const slides = [
  {
    src: "https://images.unsplash.com/photo-1624328754537-e4b3467b1f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2xpZGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    alt: "First slide",
  },
  {
    src: "https://images.unsplash.com/photo-1626166292740-aa57374179e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2xpZGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    alt: "Second slide",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1698362819146-bb3233129fda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpZGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    alt: "Third slide",
  },
];

const [currentSlide, setCurrentSlide] = useState(0);

<div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: \`translateX(-\${currentSlide * 100}%)\`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full shrink-0">
            <img src={slide.src} alt={slide.alt} className="block w-full" />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-white hover:bg-black/70"
      >
        ←
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-white hover:bg-black/70"
      >
        →
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={\`Go to slide \${index + 1}\`}
            className={\`h-2.5 w-2.5 rounded-full transition-all \${
              currentSlide === index
                ? "w-6 bg-white"
                : "bg-white/50 hover:bg-white/75"
            }\`}
          />
        ))}
      </div>
    </div>
  
  `;
  const propsData = [
    {
      prop: "slides",
      type: "{ src: string; alt: string }[]",
      default: "[]",
      description: "The collection of images displayed in the carousel",
    },
    {
      prop: "autoplay",
      type: "boolean",
      default: "true",
      description: "Automatically advances to the next slide",
    },
    {
      prop: "interval",
      type: "number",
      default: "3000",
      description: "The time in milliseconds between automatic slide changes",
    },
    {
      prop: "showControls",
      type: "boolean",
      default: "true",
      description: "Displays previous and next arrow controls",
    },
    {
      prop: "showIndicators",
      type: "boolean",
      default: "true",
      description: "Displays indicators for navigating between slides",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Carousel
        </p>
        <p className="text-lg text-gray-600">
          A slideshow component for cycling through elements—images or slides of
          text—like a carousel.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-600">Usage</h2>
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Slides only
        </h1>
        <p className="text-lg text-gray-600">
          A slides-only carousel automatically cycles through a collection of
          slides without navigation controls such as arrows or indicators.
        </p>
        <ComponentDemo code={carouselCode}>
          <Carousel />
        </ComponentDemo>
      </section>

      <h1
        className="text-4xl font-bold tracking-tight"
        style={{ color: "var(--text-color)" }}
      >
        With Controls
      </h1>
      <p className="text-lg text-gray-600">
        Adding in the previous and next controls:
      </p>

      <ComponentDemo code={Controlcode}>
        <ControlCarousel />
      </ComponentDemo>

      <h1
        className="text-4xl font-bold tracking-tight"
        style={{ color: "var(--text-color)" }}
      >
        With Indicators
      </h1>
      <p className="text-lg text-gray-600">
        You can also add the indicators to the carousel, alongside the controls,
        too :
      </p>

      <ComponentDemo code={IndicatorCode}>
        <IndicatorCarousel />
      </ComponentDemo>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-600"  style={{ color: "var(--text-color)" }}>API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default Carouselpage;
