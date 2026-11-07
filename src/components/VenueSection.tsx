import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, ExternalLink, Copy, Check, Clock, Navigation, Compass } from 'lucide-react';
import { WEDDING_DETAILS, getGoogleCalendarUrl } from '../data/weddingData';
import { FloralDivider } from './FloralMotifs';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const calendarUrl = getGoogleCalendarUrl();

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(WEDDING_DETAILS.venue.fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="venue" className="py-24 sm:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="font-sans text-xs uppercase tracking-[0.28em] text-[#8C6D34] font-medium">
            Join The Celebration
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#221E1B] font-normal tracking-tight mt-2">
            Ceremony &amp; Venue
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#6E6152] mt-3">
            We eagerly await celebrating this holy union in fellowship with you
          </p>
          <div className="flex justify-center mt-4">
            <FloralDivider className="w-52 h-6" />
          </div>
        </motion.div>

        {/* Central Venue Layout with Website Presence */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="bg-[#FAF7F2] rounded-3xl border border-[#E8DEC9] shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Timing & Service Details */}
            <div className="lg:col-span-6 p-8 sm:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EADEC9]">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2D5BE] text-xs font-sans text-[#8C6D34] font-medium mb-6 shadow-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Saturday, December 19, 2026</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#221E1B] mb-2 font-normal">
                  Holy Matrimony
                </h3>
                <p className="font-sans text-sm font-semibold tracking-wide text-[#8C6D34] mb-6">
                  Commencing promptly at 10:00 AM IST
                </p>

                <p className="font-serif text-base sm:text-lg text-[#5E5244] leading-relaxed mb-8">
                  The sacrament of marriage service will be followed by blessings, bridal felicitation, and a celebratory traditional luncheon banquet.
                </p>

                {/* Date Grid */}
                <div className="grid grid-cols-3 gap-3.5 my-6 text-center">
                  <div className="bg-white p-4 rounded-xl border border-[#E8DEC9] shadow-xs">
                    <span className="block font-sans text-[10px] uppercase tracking-wider text-[#9E907E]">Day</span>
                    <span className="font-serif text-2xl sm:text-3xl text-[#221E1B] font-semibold">19</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#E8DEC9] shadow-xs">
                    <span className="block font-sans text-[10px] uppercase tracking-wider text-[#9E907E]">Month</span>
                    <span className="font-serif text-xl sm:text-2xl text-[#221E1B] font-medium">Dec &apos;26</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#E8DEC9] shadow-xs">
                    <span className="block font-sans text-[10px] uppercase tracking-wider text-[#9E907E]">Time</span>
                    <span className="font-serif text-lg sm:text-xl text-[#221E1B] font-medium">10:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Primary Google Calendar Button Only */}
              <div className="pt-6">
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-sans uppercase tracking-[0.16em] font-medium text-white bg-[#221E1B] hover:bg-[#8C6D34] rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B58F49]"
                >
                  <Calendar className="w-4 h-4 text-[#E2C98A]" />
                  <span>Save to Google Calendar</span>
                </a>
              </div>
            </div>

            {/* Right: Venue Location & Map Link */}
            <div className="lg:col-span-6 p-8 sm:p-14 bg-white flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E2D5BE] text-xs font-sans text-[#8C6D34] font-medium mb-6 shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Auditorium Location</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#221E1B] mb-2 font-normal">
                  {WEDDING_DETAILS.venue.name}
                </h3>
                <p className="font-serif text-lg text-[#615648] mb-6">
                  Thiruvalla, Pathanamthitta District, Kerala
                </p>

                {/* Full address card */}
                <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E8DEC9] mb-6">
                  <p className="font-serif text-sm sm:text-base text-[#4E4437] leading-relaxed mb-4">
                    {WEDDING_DETAILS.venue.fullAddress}
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-2 text-xs font-sans text-[#8C6D34] hover:text-[#221E1B] font-medium transition-colors focus:outline-hidden cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Address Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Guest Transport Notes */}
                <div className="space-y-2.5 text-xs font-sans text-[#736758] mb-8">
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-[#8C6D34] shrink-0" />
                    <span>Prime location in Thiruvalla town with ample guest parking</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Navigation className="w-4 h-4 text-[#8C6D34] shrink-0" />
                    <span>Easily accessible from Thiruvalla Railway Station (TRVL)</span>
                  </div>
                </div>
              </div>

              {/* Direct Google Maps Action Button */}
              <div className="pt-4">
                <a
                  href={WEDDING_DETAILS.venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-sans uppercase tracking-[0.16em] font-medium text-[#221E1B] bg-[#FAF7F2] hover:bg-white border-2 border-[#8C6D34] rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B58F49]"
                >
                  <MapPin className="w-4 h-4 text-[#8C6D34]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 opacity-75 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
