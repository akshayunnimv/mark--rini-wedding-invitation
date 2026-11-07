import React from 'react';
import { motion } from 'motion/react';
import { WEDDING_DETAILS } from '../data/weddingData';
import { MonogramSeal, FloralDivider } from './FloralMotifs';
import { ResilientImage } from './ResilientImage';
import { Heart } from 'lucide-react';

interface CoupleSectionProps {
  onSelectPhoto: (filename: string, title: string) => void;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ onSelectPhoto }) => {
  const couplePhoto = 'WhatsApp Image 2026-10-02 at 8.17.06 PM.jpeg';

  return (
    <section id="couple" className="py-24 sm:py-32 px-4 sm:px-6 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="font-sans text-xs uppercase tracking-[0.28em] text-[#8C6D34] font-medium">
            Sacred Covenant
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#221E1B] font-normal tracking-tight mt-2">
            The Bride &amp; Groom
          </h2>
          <div className="flex justify-center mt-4">
            <FloralDivider className="w-52 h-6" />
          </div>
        </motion.div>

        {/* Website Style Editorial Showcase: Single Couple Photo representing Bride & Groom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: The Bride's Lineage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 text-center lg:text-right order-2 lg:order-1"
          >
            <div className="space-y-4">
              <span className="inline-block font-sans text-[11px] uppercase tracking-[0.24em] text-[#8C6D34] font-medium border-b border-[#D9BA76]/40 pb-1">
                The Bride
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#221E1B]">
                {WEDDING_DETAILS.bride.name}
              </h3>
              <div className="font-serif text-sm sm:text-base text-[#695D4F] leading-relaxed pt-1">
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#9C8F7E] mb-1">
                  Daughter of
                </p>
                <p className="text-[#363028] font-medium text-base sm:text-lg">
                  {WEDDING_DETAILS.bride.father}
                </p>
                <p className="text-[#363028] font-medium text-base sm:text-lg">
                  &amp; {WEDDING_DETAILS.bride.mother}
                </p>
              </div>
              <p className="font-serif italic text-xs text-[#8C7F70] pt-2">
                Adorned in grace, walking in faith
              </p>
            </div>
          </motion.div>

          {/* Center Column: The Single Prominent Couple Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md sm:max-w-lg p-3 sm:p-4 rounded-t-[140px] sm:rounded-t-[180px] rounded-b-2xl border border-[#D9BA76]/60 bg-white shadow-2xl">
              {/* Outer decorative gold ring */}
              <div className="absolute -inset-1.5 rounded-t-[146px] sm:rounded-t-[186px] rounded-b-[22px] border border-[#D9BA76]/25 pointer-events-none" />

              <div className="rounded-t-[130px] sm:rounded-t-[170px] rounded-b-xl overflow-hidden shadow-inner">
                <ResilientImage
                  filename={couplePhoto}
                  alt="Rini V Rajan & Mark Thomson E"
                  title="Mark & Rini"
                  category="couple"
                  aspectRatioClass="aspect-[4/5] sm:aspect-[3/4]"
                  containerClassName="w-full"
                  onImageClick={() =>
                    onSelectPhoto(couplePhoto, 'Mark Thomson E & Rini V Rajan')
                  }
                />
              </div>

              {/* Monogram Seal floating badge at bottom of photo frame */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-[#FAF7F2] p-2 rounded-full border border-[#D9BA76]/60 shadow-lg">
                <MonogramSeal className="w-14 h-14 text-[#8C6D34]" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Groom's Lineage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 text-center lg:text-left order-3"
          >
            <div className="space-y-4 pt-6 lg:pt-0">
              <span className="inline-block font-sans text-[11px] uppercase tracking-[0.24em] text-[#8C6D34] font-medium border-b border-[#D9BA76]/40 pb-1">
                The Groom
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#221E1B]">
                {WEDDING_DETAILS.groom.name}
              </h3>
              <div className="font-serif text-sm sm:text-base text-[#695D4F] leading-relaxed pt-1">
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#9C8F7E] mb-1">
                  Son of
                </p>
                <p className="text-[#363028] font-medium text-base sm:text-lg">
                  {WEDDING_DETAILS.groom.father}
                </p>
                <p className="text-[#363028] font-medium text-base sm:text-lg">
                  &amp; {WEDDING_DETAILS.groom.mother}
                </p>
              </div>
              <p className="font-serif italic text-xs text-[#8C7F70] pt-2">
                Guided by devotion, bound in covenant
              </p>
            </div>
          </motion.div>
        </div>

        {/* Biblical Union Sub-banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center max-w-2xl mx-auto pt-6"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-[0.22em] text-[#8C6D34] font-semibold mb-2">
            <Heart className="w-3.5 h-3.5 fill-[#8C6D34]" />
            <span>Bound in Love &middot; December 19, 2026</span>
            <Heart className="w-3.5 h-3.5 fill-[#8C6D34]" />
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[#52473A] leading-relaxed">
            &ldquo;Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.&rdquo;
          </p>
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#9E907E] mt-1 block">
            Ecclesiastes 4:12
          </span>
        </motion.div>
      </div>
    </section>
  );
};
