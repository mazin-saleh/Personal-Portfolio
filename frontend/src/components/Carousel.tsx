import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { urlFor } from '../sanityClient';

interface CarouselProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: any[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 group">
      {/* Main Image Container */}
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 shadow-md">
        <img
          src={urlFor(images[currentIndex])
            .width(1200)
            .height(800)
            .fit('max')
            .format('webp')
            .url()}
          alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
        
        {/* Caption Overlay */}
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 backdrop-blur-sm">
            <p className="text-sm font-serif text-center">{images[currentIndex].caption}</p>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white hover:text-primary shadow-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white hover:text-primary shadow-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
