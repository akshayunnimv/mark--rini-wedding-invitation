import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BIBLE_VERSES } from '../data/weddingData';
import { CrossFloralMotif, FloralDivider } from './FloralMotifs';
import { Quote } from 'lucide-react';

export const ScriptureSection: React.FC = () => {
  const [selectedVerseIndex, setSelectedVerseIndex] = useState(0);
  const activeVerse = BIBLE_VERSES[selectedVerseIndex];

  return (
    <section id="scripture" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-3">
            <CrossFloralMotif className="w-9 h-12 text-[#8C6D34]" />
          </div>
          <span className="font-sans text-xs uppercase tracking-[0.28em] text-[#8C6D34] font-medium">
            Sacred Scriptures
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#221E1B] font-normal tracking-tight mt-2">
            Verses of Faith &amp; Covenant
          </h2>
          <div className="flex justify-center mt-4">
            <FloralDivider className="w-52 h-6" />
          </div>
        </motion.div>

        {/* Featured Scripture Display Card with Motion Transitions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-3xl border border-[#E8DEC9] shadow-xl p-8 sm:p-16 text-center mb-12 overflow-hidden"
        >
          {/* Subtle watermarked cross in card background */}
          <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
            <CrossFloralMotif className="w-48 h-64 text-[#B58F49]" />
          </div>

          <Quote className="w-12 h-12 text-[#D9BA76]/50 mx-auto mb-8 animate-pulse-subtle" />

          <div className="min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVerse.reference}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#24201C] leading-relaxed font-normal">
                  &ldquo;{activeVerse.text}&rdquo;
                </p>

                <div className="mt-8 flex flex-col items-center">
                  <div className="h-0.5 w-16 bg-[#B58F49] mb-3" />
                  <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.26em] font-semibold text-[#8C6D34]">
                    {activeVerse.reference}
                  </span>
                  <span className="font-serif italic text-xs text-[#8C7F70] mt-1">
                    {activeVerse.theme}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Interactive Verse Selector Tabs with clean segmented styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto"
        >
          {BIBLE_VERSES.map((verse, idx) => {
            const isSelected = idx === selectedVerseIndex;
            return (
              <button
                key={verse.reference}
                onClick={() => setSelectedVerseIndex(idx)}
                className={`px-4 py-2 text-xs font-sans rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8C6D34] ${
                  isSelected
                    ? 'bg-[#221E1B] text-white shadow-md font-medium scale-105'
                    : 'bg-white/80 hover:bg-white text-[#6E6356] border border-[#E8DEC9] hover:border-[#8C6D34]/50'
                }`}
              >
                {verse.reference}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
