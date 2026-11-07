import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { WEDDING_DETAILS, getGoogleCalendarUrl } from '../data/weddingData';
import { CrossFloralMotif, FloralDivider } from './FloralMotifs';

export const HeroSection: React.FC = () => {
  const calendarUrl = getGoogleCalendarUrl();

  return (
    <section
      id="invitation"
      className="relative min-h-[92vh] flex flex-col justify-between items-center pt-32 pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6F0E6] to-[#FAF7F2]"
    >
      {/* Delicate floating background motifs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial from-[#EADEC9]/40 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

      {/* Top subtle decorative ribbon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center text-center z-10"
      >
        <CrossFloralMotif className="w-9 h-12 text-[#B58F49] mb-3" />
        <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#8C6D34] font-medium">
          Holy Matrimony &middot; The Sacred Covenant
        </span>
      </motion.div>

      {/* Main Website Hero Typography */}
      <div className="max-w-4xl w-full mx-auto text-center z-10 my-auto py-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif italic text-base sm:text-lg text-[#7A6D5E] mb-4 tracking-wide"
        >
          Together with their parents,
        </motion.p>

        {/* Parents Names - Airy Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-serif text-[#5E5244] mb-8"
        >
          <span>Mr. Rajan V Abraham &amp; Mrs. Mariamma Rajan</span>
          <span className="hidden sm:inline text-[#B58F49]">&middot;</span>
          <span>Mr. Eslin Victor Raj S &amp; Mrs. Eve Jessica E</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-sm sm:text-base text-[#857766] mb-4"
        >
          cordially invite you to celebrate the wedding ceremony of
        </motion.p>

        {/* Names - Majestic Fluid Web Scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="my-4 sm:my-6"
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#221E1B] tracking-tight font-normal leading-[1.08]">
            Rini V Rajan
          </h1>
          <div className="flex items-center justify-center my-3 sm:my-4">
            <span className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#B58F49]" />
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#B58F49] px-4 font-normal">
              &amp;
            </span>
            <span className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#B58F49]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#221E1B] tracking-tight font-normal leading-[1.08]">
            Mark Thomson E
          </h2>
        </motion.div>

        {/* Floral Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center my-6 sm:my-8"
        >
          <FloralDivider className="w-56 sm:w-72 h-6" />
        </motion.div>

        {/* Date & Venue Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="space-y-2 mb-10"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#24211E] tracking-wide font-normal">
            {WEDDING_DETAILS.date.displayDate}
          </p>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.24em] text-[#8C6D34] font-semibold">
            At {WEDDING_DETAILS.date.time}
          </p>
          <p className="font-serif text-lg sm:text-xl text-[#52473A] pt-1">
            {WEDDING_DETAILS.venue.name} &middot; {WEDDING_DETAILS.venue.city}
          </p>
        </motion.div>

        {/* Interactive Action Controls: Exclusively Google Calendar & Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-sans uppercase tracking-[0.16em] font-medium text-white bg-[#24211E] hover:bg-[#8C6D34] rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B58F49]"
          >
            <Calendar className="w-4 h-4 text-[#E2C98A]" />
            <span>Save to Google Calendar</span>
          </a>

          <a
            href={WEDDING_DETAILS.venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-sans uppercase tracking-[0.16em] font-medium text-[#24211E] bg-white hover:bg-[#FAF7F2] border border-[#D9BA76] rounded-lg transition-all duration-300 hover:border-[#8C6D34] shadow-xs hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B58F49]"
          >
            <MapPin className="w-4 h-4 text-[#8C6D34]" />
            <span>View Venue on Map</span>
          </a>
        </motion.div>
      </div>

      {/* Smooth Scroll prompt */}
      <motion.a
        href="#couple"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col items-center gap-1.5 text-[#8A7E70] hover:text-[#24211E] transition-colors focus:outline-hidden z-10 cursor-pointer pt-6"
        aria-label="Scroll to couple section"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.24em]">The Couple</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#B58F49]" />
      </motion.a>
    </section>
  );
};
