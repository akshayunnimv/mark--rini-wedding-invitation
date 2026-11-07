import React from 'react';

// Delicate Holy Christian Cross with Olive Leaf flourishes
export const CrossFloralMotif: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 100 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Subtle radiant rays */}
    <circle cx="50" cy="45" r="28" stroke="url(#goldGrad)" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />
    
    {/* Main Cross beams with serif terminals */}
    <path
      d="M48 10 H52 V43 H78 V47 H52 V118 H48 V47 H22 V43 H48 V10 Z"
      fill="url(#goldGrad)"
    />
    {/* Center diamond gemstone accent */}
    <polygon points="50,40 55,45 50,50 45,45" fill="#FAF7F2" stroke="url(#goldGrad)" strokeWidth="1" />
    
    {/* Delicate olive branches entwining the beam */}
    <path
      d="M52 52 C56 50 62 52 64 56 C61 58 55 56 52 55"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M48 65 C43 62 37 64 35 68 C38 70 44 68 48 66"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M52 78 C57 75 63 77 65 81 C62 83 56 81 52 79"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
    />

    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A47E3B" />
        <stop offset="50%" stopColor="#D9BA76" />
        <stop offset="100%" stopColor="#9C7734" />
      </linearGradient>
    </defs>
  </svg>
);

// Botanical Ribbon / Flourish Divider
export const FloralDivider: React.FC<{ className?: string }> = ({ className = 'w-48 h-6' }) => (
  <svg
    viewBox="0 0 300 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 15 H115 C125 15 130 11 135 7 C140 3 145 11 150 15 C155 19 160 27 165 23 C170 19 175 15 185 15 H290"
      stroke="url(#goldGradDivider)"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="150" cy="15" r="3.5" fill="url(#goldGradDivider)" />
    <circle cx="138" cy="11" r="2" fill="#D9BA76" opacity="0.8" />
    <circle cx="162" cy="19" r="2" fill="#D9BA76" opacity="0.8" />
    <defs>
      <linearGradient id="goldGradDivider" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D9BA76" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#B58F49" stopOpacity="1" />
        <stop offset="100%" stopColor="#D9BA76" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

// Interlocking Monogram Seal: M & R
export const MonogramSeal: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      {/* Outer botanical laurel ring */}
      <circle cx="60" cy="60" r="54" stroke="#D8CEBE" strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
      <circle cx="60" cy="60" r="50" stroke="url(#goldRing)" strokeWidth="1.2" />

      {/* Foliage leaves along ring */}
      <path d="M50 11 C54 7 60 7 60 11 C60 15 54 15 50 11 Z" fill="#B58F49" opacity="0.7" />
      <path d="M60 11 C60 7 66 7 70 11 C66 15 60 15 60 11 Z" fill="#B58F49" opacity="0.7" />

      <path d="M50 109 C54 113 60 113 60 109 C60 105 54 105 50 109 Z" fill="#B58F49" opacity="0.7" />
      <path d="M60 109 C60 113 66 113 70 109 C66 105 60 105 60 109 Z" fill="#B58F49" opacity="0.7" />

      <defs>
        <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A88344" />
          <stop offset="50%" stopColor="#E2C98A" />
          <stop offset="100%" stopColor="#9C7838" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center select-none">
      <span className="font-serif text-2xl font-semibold text-[#8C6D34] tracking-tighter">M</span>
      <span className="font-script text-3xl text-[#B58F49] mx-[-2px] translate-y-[-2px]">&amp;</span>
      <span className="font-serif text-2xl font-semibold text-[#8C6D34] tracking-tighter">R</span>
    </div>
  </div>
);
