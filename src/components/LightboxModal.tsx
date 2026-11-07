import React, { useEffect } from 'react';
import { X, Quote, Heart, Calendar, MapPin, Sparkles } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { GALLERY_PHOTOS, WEDDING_DETAILS } from '../data/weddingData';
import { FloralDivider } from './FloralMotifs';

interface LightboxModalProps {
  photo: {
    filename: string;
    title: string;
  } | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  // Retrieve rich quote & reflection for this specific photo
  const photoData = GALLERY_PHOTOS.find(
    (p) =>
      p.filename === photo.filename ||
      p.title.toLowerCase() === photo.title.toLowerCase() ||
      photo.title.toLowerCase().includes(p.title.toLowerCase())
  );

  const displayTitle = photoData?.title || photo.title || 'Sacred Celebration';
  const quoteText =
    photoData?.quote ||
    'Two are better than one, because they have a good return for their labor... A cord of three strands is not quickly broken.';
  const quoteSource = photoData?.quoteSource || 'Ecclesiastes 4:9, 12';
  const reflectionText =
    photoData?.reflection ||
    'A sacred union anchored in Christ, where two separate lives intertwine into one harmonious song of everlasting devotion.';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={displayTitle}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all focus:outline-hidden cursor-pointer"
          aria-label="Close photo view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Two-Column Expanded Showcase Card */}
        <div className="w-full max-h-[86vh] rounded-2xl overflow-y-auto lg:overflow-hidden border border-[#D9BA76]/50 shadow-2xl bg-[#181412] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Full Photo Display */}
          <div className="lg:col-span-7 bg-[#100D0C] flex items-center justify-center relative p-2 sm:p-4">
            <div className="w-full h-full max-h-[78vh] flex items-center justify-center rounded-xl overflow-hidden shadow-inner">
              <ResilientImage
                filename={photo.filename}
                alt={displayTitle}
                title={displayTitle}
                category="couple"
                aspectRatioClass="aspect-[4/5] sm:aspect-[3/4]"
                containerClassName="w-full h-full max-h-[75vh]"
                className="object-contain sm:object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column: Love, Marriage & Relationship Editorial Quote */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#211B18] via-[#1A1513] to-[#120F0E] p-6 sm:p-8 md:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#D9BA76]/30 text-white">
            
            {/* Header Tag */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9BA76]/15 border border-[#D9BA76]/40 text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] text-[#E2C98A]">
                  <Sparkles className="w-3 h-3 text-[#E2C98A]" />
                  <span>Holy Matrimony</span>
                </span>
                <span className="text-[11px] font-sans text-white/50 tracking-wider">
                  Dec 19, 2026
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight mb-1">
                {displayTitle}
              </h3>
              <p className="font-sans text-xs uppercase tracking-[0.16em] text-[#CBB27E] mb-6">
                Mark Thomson E &amp; Rini V Rajan
              </p>

              {/* Decorative Quote Section */}
              <div className="relative pl-6 py-2 border-l-2 border-[#D9BA76]/60 my-4">
                <Quote className="w-6 h-6 text-[#D9BA76]/40 mb-2 rotate-180" />
                <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#F5EDE0] leading-relaxed">
                  &ldquo;{quoteText}&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-[#D9BA76]/60" />
                  <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#D9BA76] font-medium">
                    {quoteSource}
                  </span>
                </div>
              </div>

              {/* Marital Reflection */}
              <p className="font-sans text-xs sm:text-sm text-[#B8AA97] leading-relaxed mt-5">
                {reflectionText}
              </p>
            </div>

            {/* Footer Details */}
            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#D9BA76]/90 font-sans">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-[#E2C98A]" />
                <span className="truncate">Yahir Auditorium, Thiruvalla, Kerala</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/60 font-sans">
                <Calendar className="w-3.5 h-3.5 shrink-0 text-[#E2C98A]" />
                <span>Saturday, December 19, 2026 · 10:00 AM IST</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
