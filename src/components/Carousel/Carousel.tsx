
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

const Carousel = () => {

     const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
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
    </div>
  )
}

export default Carousel