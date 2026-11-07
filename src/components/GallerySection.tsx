import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/weddingData';
import { FloralDivider } from './FloralMotifs';
import { ResilientImage } from './ResilientImage';

interface GallerySectionProps {
  onSelectPhoto: (filename: string, title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  // Exclude photo-1 (used in CoupleSection) and ensure Hands of Devotion is removed
  const photos = GALLERY_PHOTOS.slice(1).filter(
    (p) => !p.title.toLowerCase().includes('hands') && p.id !== 'photo-4'
  );

  // Mobile Carousel State
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play effect for mobile carousel
  useEffect(() => {
    if (isPaused || photos.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, photos.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
    pauseTemporarily();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
    pauseTemporarily();
  };

  const pauseTemporarily = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4500);
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    const deltaX = touchDeltaX.current;
    if (deltaX > 40) {
      // Swiped right -> previous slide
      setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
    } else if (deltaX < -40) {
      // Swiped left -> next slide
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }
    touchStartX.current = null;
    touchStartY.current = null;
    touchDeltaX.current = 0;
    pauseTemporarily();
  };

  return (
    <section id="moments" className="py-24 sm:py-32 px-4 sm:px-6 bg-white/70 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="font-sans text-xs uppercase tracking-[0.28em] text-[#8C6D34] font-medium">
            Visual Harmony
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#221E1B] font-normal tracking-tight mt-2">
            Moments &amp; Memories
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#6E6152] mt-3 max-w-xl mx-auto">
            Expressions of pure love, devotion, and celebration leading to the sacred vows
          </p>
          <div className="flex justify-center mt-4">
            <FloralDivider className="w-52 h-6" />
          </div>
        </motion.div>

        {/* ========================================================
            DESKTOP VIEW: Exactly 4 images in ONE single row (md:grid)
           ======================================================== */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-[#E8DEC9] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col hover:-translate-y-1"
            >
              <div className="p-3 bg-[#FAF7F2]">
                <div className="rounded-xl overflow-hidden border border-[#EFE7D8] relative">
                  <ResilientImage
                    filename={photo.filename}
                    alt={photo.title}
                    title={photo.title}
                    category={photo.category}
                    aspectRatioClass="aspect-[3/4]"
                    onImageClick={() => onSelectPhoto(photo.filename, photo.title)}
                  />
                </div>
              </div>

              <div className="p-5 text-center flex-1 flex flex-col justify-center">
                <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#8C6D34] font-medium">
                  {photo.category.toUpperCase()} &middot; 0{index + 1}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#221E1B] mt-1.5 font-normal">
                  {photo.title}
                </h3>
                <p className="font-serif italic text-xs text-[#73685B] mt-1 line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            MOBILE VIEW: Smooth Auto-moving Carousel with Touch Swipe (md:hidden)
           ======================================================== */}
        <div className="md:hidden relative">
          {/* Touch Track Container */}
          <div
            className="overflow-hidden w-full relative rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {photos.map((photo, index) => (
                <div key={photo.id} className="w-full shrink-0 px-1">
                  <div className="bg-white rounded-2xl border border-[#E8DEC9] overflow-hidden shadow-md flex flex-col">
                    <div className="p-2.5 bg-[#FAF7F2]">
                      <div className="rounded-xl overflow-hidden border border-[#EFE7D8] relative">
                        <ResilientImage
                          filename={photo.filename}
                          alt={photo.title}
                          title={photo.title}
                          category={photo.category}
                          aspectRatioClass="aspect-[3/4]"
                          onImageClick={() => onSelectPhoto(photo.filename, photo.title)}
                        />
                      </div>
                    </div>

                    <div className="p-4 text-center">
                      <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#8C6D34] font-medium">
                        {photo.category.toUpperCase()} &middot; 0{index + 1} OF 0{photos.length}
                      </span>
                      <h3 className="font-serif text-xl text-[#221E1B] mt-1 font-normal">
                        {photo.title}
                      </h3>
                      <p className="font-serif italic text-xs text-[#73685B] mt-0.5">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Left / Right Carousel Controls */}
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#E2D5BE] shadow-md flex items-center justify-center text-[#24211E] hover:bg-white active:scale-95 transition-all focus:outline-hidden"
            >
              <ChevronLeft className="w-5 h-5 text-[#8C6D34]" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#E2D5BE] shadow-md flex items-center justify-center text-[#24211E] hover:bg-white active:scale-95 transition-all focus:outline-hidden"
            >
              <ChevronRight className="w-5 h-5 text-[#8C6D34]" />
            </button>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {photos.map((photo, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={photo.id}
                  onClick={() => {
                    setActiveIndex(index);
                    pauseTemporarily();
                  }}
                  aria-label={`Go to photo ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-hidden ${
                    isActive ? 'w-7 bg-[#8C6D34]' : 'w-2 bg-[#D9BA76]/40 hover:bg-[#D9BA76]'
                  }`}
                />
              );
            })}
          </div>

          {/* Swipe Hint */}
          <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[11px] font-sans text-[#9E907E]">
            <Sparkles className="w-3 h-3 text-[#B58F49]" />
            <span>Swipe or tap arrows to explore moments</span>
          </div>
        </div>
      </div>
    </section>
  );
};
