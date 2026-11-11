import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { getGoogleCalendarUrl } from '../data/weddingData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calendarUrl = getGoogleCalendarUrl();

  const navLinks = [
    { label: 'Invitation', href: '#invitation' },
    { label: 'The Couple', href: '#couple' },
    { label: 'Moments', href: '#moments' },
    { label: 'Venue & Map', href: '#venue' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EADFCB] shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#invitation"
          className="font-serif text-xl sm:text-2xl tracking-wide text-[#2D2926] hover:text-[#B58F49] transition-colors whitespace-nowrap"
        >
          Mark <span className="font-script text-2xl sm:text-3xl text-[#B58F49] mx-0.5">&amp;</span> Rini
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-sans uppercase tracking-[0.16em] text-[#6A6258]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#B58F49] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B58F49] hover:after:w-full after:transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3">
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-sans font-medium text-white bg-[#2D2926] hover:bg-[#B58F49] rounded-md transition-colors shadow-xs whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B58F49]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#DDC385]" />
            <span>Add to Calendar</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4A4238] hover:text-[#2D2926] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B58F49]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#EADFCB] px-6 py-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-sans tracking-wide text-[#4A4238] hover:text-[#B58F49] py-1.5 transition-colors border-b border-[#EADFCB]/40 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
