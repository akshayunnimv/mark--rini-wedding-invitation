import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { FloralCanvas } from './components/FloralCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CoupleSection } from './components/CoupleSection';
import { GallerySection } from './components/GallerySection';
import { ScriptureSection } from './components/ScriptureSection';
import { VenueSection } from './components/VenueSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { WaxSealEnvelope } from './components/WaxSealEnvelope';
import { Mail } from 'lucide-react';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{
    filename: string;
    title: string;
  } | null>(null);

  const handleSelectPhoto = (filename: string, title: string) => {
    setSelectedPhoto({ filename, title });
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221E1B] relative selection:bg-[#E8DCC4] selection:text-[#382C1E]">
      {/* Interactive Wax Seal Invitation Opener (Matching Reference Screenshot) */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <WaxSealEnvelope onOpen={() => setIsEnvelopeOpen(true)} />
        )}
      </AnimatePresence>

      {/* Soft floating botanical petal animation */}
      <FloralCanvas />

      {/* 3-Zone Clean Website Navigation Bar */}
      <Navbar />

      {/* Main Website Sections */}
      <main className="overflow-hidden">
        {/* Full-bleed Website Hero */}
        <HeroSection />

        {/* Single Couple Photo representing Bride & Groom with Family Lines */}
        <CoupleSection onSelectPhoto={handleSelectPhoto} />

        {/* Remaining Photos in Modern Editorial Gallery */}
        <GallerySection onSelectPhoto={handleSelectPhoto} />

        {/* Biblical Scriptures on Matrimony */}
        <ScriptureSection />

        {/* Ceremony, Venue & Google Maps */}
        <VenueSection />
      </main>

      {/* Footer with Blessing */}
      <Footer />

      {/* Fullscreen Photo Lightbox Modal */}
      <LightboxModal photo={selectedPhoto} onClose={handleCloseLightbox} />

      {/* Re-open Envelope Button */}
      {isEnvelopeOpen && (
        <button
          onClick={() => setIsEnvelopeOpen(false)}
          className="fixed bottom-4 left-4 z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E2D5BE] text-xs font-sans text-[#736657] hover:text-[#221E1B] shadow-xs hover:bg-white transition-all focus:outline-hidden"
          title="View envelope again"
        >
          <Mail className="w-3.5 h-3.5 text-[#8C6D34]" />
          <span>View Envelope</span>
        </button>
      )}
    </div>
  );
}
