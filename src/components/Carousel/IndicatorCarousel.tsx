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

const IndicatorCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full shrink-0">
            <img src={slide.src} alt={slide.alt} className="block h-96 w-full object-cover" />
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
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentSlide === index
                ? "w-6 bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default IndicatorCarousel;
