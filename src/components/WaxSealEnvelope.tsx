import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, ChevronRight } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface WaxSealEnvelopeProps {
  onOpen: () => void;
}

export const WaxSealEnvelope: React.FC<WaxSealEnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleSealClick = () => {
    setIsOpening(true);
    // Smooth reveal timing matching floral animations
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1A18] px-4 overflow-hidden"
    >
      {/* Subtle ambient golden backglow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#B58F49]/10 blur-3xl pointer-events-none" />

      {/* Envelope Card matching user reference screenshot */}
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: -40 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-lg w-full bg-[#FAF7F2] border border-[#E2D5BE] shadow-2xl rounded-xl p-8 sm:p-12 text-center"
      >
        {/* Subtle decorative dot pattern */}
        <div
          className="absolute inset-2 sm:inset-3 border border-[#EADEC9] rounded-lg pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#D9BA76 0.75px, transparent 0.75px)',
            backgroundSize: '16px 16px',
            opacity: 0.35,
          }}
        />

        {/* Decorative corner framing */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#B58F49]/70 pointer-events-none" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#B58F49]/70 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#B58F49]/70 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#B58F49]/70 pointer-events-none" />

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#B58F49]" />
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#8C6D34] font-medium">
              Wedding Invitation
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#B58F49]" />
          </div>

          <p className="font-serif italic text-xs sm:text-sm text-[#73685B] mb-5 tracking-wide">
            With great joy, you are cordially invited to celebrate the marriage of
          </p>

          {/* Names */}
          <div className="my-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#24211E] tracking-tight font-normal">
              RINI <span className="font-script text-3xl sm:text-4xl text-[#B58F49] mx-1">&amp;</span> MARK
            </h1>
          </div>

          <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#8C6D34] font-semibold mt-2 mb-8">
            YAHIR AUDITORIUM, THIRUVALLA
          </p>

          {/* Realistic Burgundy Wax Seal with Monogram */}
          <div className="relative my-7 flex justify-center">
            {/* Glowing ring animation */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-28 h-28 rounded-full bg-[#8E2837]/25 blur-md pointer-events-none"
            />

            <motion.button
              type="button"
              onClick={handleSealClick}
              disabled={isOpening}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              animate={isOpening ? { scale: [1, 1.2, 0.8], rotate: [0, -10, 20], opacity: [1, 1, 0] } : {}}
              transition={{ duration: 0.8 }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full cursor-pointer focus:outline-hidden focus-visible:ring-4 focus-visible:ring-[#D9BA76] shadow-2xl transition-shadow group select-none"
              title="Click to open invitation"
              aria-label="Open wedding invitation"
            >
              {/* Wax Seal SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                {/* Organic wax irregular silhouette */}
                <path
                  d="M50 4 
                     C63 3, 76 9, 86 19 
                     C94 28, 97 42, 95 55 
                     C93 69, 84 81, 73 89 
                     C61 97, 46 97, 33 93 
                     C20 89, 9 78, 5 65 
                     C2 51, 6 36, 14 24 
                     C23 12, 37 4, 50 4 Z"
                  fill="url(#waxGrad)"
                  stroke="#5A1521"
                  strokeWidth="1.5"
                />

                {/* Inner impressed rim */}
                <circle cx="50" cy="50" r="38" fill="url(#waxInner)" stroke="#4A101A" strokeWidth="1" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#D9BA76" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.7" />

                <defs>
                  <linearGradient id="waxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9B293A" />
                    <stop offset="50%" stopColor="#7E1C2C" />
                    <stop offset="100%" stopColor="#55121E" />
                  </linearGradient>
                  <linearGradient id="waxInner" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#701826" />
                    <stop offset="100%" stopColor="#4A101A" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Seal Inscribed Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/95 pointer-events-none">
                <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#F2D79E] drop-shadow-xs">
                  M &amp; R
                </span>
                <Heart className="w-3.5 h-3.5 text-[#F2D79E] fill-[#F2D79E] mt-0.5" />
              </div>
            </motion.button>
          </div>

          {/* Action text */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-sans tracking-[0.2em] uppercase text-[#8C6D34] font-semibold animate-pulse-subtle">
            <Sparkles className="w-3.5 h-3.5 text-[#B58F49]" />
            <span>Tap the seal to open</span>
            <Sparkles className="w-3.5 h-3.5 text-[#B58F49]" />
          </div>

          {/* Bypass Link */}
          <div className="mt-8 pt-4 border-t border-[#E8DEC9]/60">
            <button
              onClick={onOpen}
              className="font-serif italic text-xs text-[#8A7E70] hover:text-[#24211E] underline underline-offset-4 transition-colors focus:outline-hidden"
            >
              Enter directly into invitation
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
