import { useState } from 'react'



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

const ControlCarousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
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
  )
}

export default ControlCarousel