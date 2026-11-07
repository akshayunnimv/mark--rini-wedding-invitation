// Photo 3: The Groom — Mark Thomson E
// Corresponding to: WhatsApp Image 2026-10-02 at 8.17.07 PM (1).jpeg

export const photo3Meta = {
  id: 'photo-3',
  filename: 'WhatsApp Image 2026-10-02 at 8.17.07 PM (1).jpeg',
  title: 'The Groom',
  caption: 'Mark Thomson E',
  category: 'groom' as const,
  aspectRatio: '3:4',
  description: 'Mark Thomson E solo portrait in tailored beige suit and black collared dress shirt, leaning against doorway.',
};

export const photo3Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <linearGradient id="groomWallBg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#EDE5D8" />
      <stop offset="35%" stopColor="#DFD4C3" />
      <stop offset="36%" stopColor="#35241C" />
      <stop offset="100%" stopColor="#251710" />
    </linearGradient>
    <linearGradient id="suitBeigeSolo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#D9C7AC" />
      <stop offset="50%" stopColor="#BAA487" />
      <stop offset="100%" stopColor="#8F785C" />
    </linearGradient>
    <linearGradient id="goldGroom" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F5E4B5" />
      <stop offset="50%" stopColor="#D9BA76" />
      <stop offset="100%" stopColor="#A88338" />
    </linearGradient>
  </defs>

  <rect width="600" height="800" fill="url(#groomWallBg)" />

  <!-- Groom Figure: full body / 3/4 length leaning against white wall -->
  <g id="markSolo">
    <!-- Legs in tailored beige trousers -->
    <path d="M220 520 L270 730 L235 745 L180 540 Z" fill="#BAA487" />
    <path d="M260 520 L300 730 L340 730 L295 520 Z" fill="#A89276" />
    <!-- Black dress shoes -->
    <path d="M225 735 C240 735 270 740 280 755 L225 755 Z" fill="#14110F" />
    <path d="M295 730 C310 730 340 735 350 750 L295 750 Z" fill="#14110F" />

    <!-- Jacket & Torso -->
    <path d="M190 270 C220 250 310 250 345 275 L360 530 L180 520 Z" fill="url(#suitBeigeSolo)" />
    <!-- Lapels -->
    <path d="M235 270 L250 420 L210 370 Z" fill="#A18B70" />
    <path d="M305 270 L285 420 L325 370 Z" fill="#A18B70" />
    <!-- Black dress shirt -->
    <path d="M250 268 L285 268 L290 380 L245 380 Z" fill="#191512" />

    <!-- Left Arm leaning on doorway -->
    <path d="M190 270 C160 330 150 410 180 470 L205 450 C185 410 185 340 215 285 Z" fill="#A89276" />
    <!-- Right Arm with hand in pocket -->
    <path d="M345 275 C370 330 365 420 330 480 L305 465 C335 420 340 340 325 285 Z" fill="#8F785C" />

    <!-- Head & Neck -->
    <path d="M250 210 L285 210 L280 270 L255 270 Z" fill="#C99B77" />
    <ellipse cx="268" cy="180" rx="38" ry="48" fill="#C99B77" />

    <!-- Features: Confident, warm expression -->
    <path d="M250 168 Q260 164 270 168" stroke="#4A3423" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M278 168 Q288 164 298 168" stroke="#4A3423" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="260" cy="176" r="3" fill="#241910" />
    <circle cx="288" cy="176" r="3" fill="#241910" />
    <path d="M274 176 L272 194 L278 196" stroke="#9C6E4E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <!-- Smile -->
    <path d="M258 208 Q273 220 288 208" stroke="#6E3D22" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    <!-- Hair -->
    <path d="M225 175 C220 130 255 110 290 115 C320 120 328 145 322 175 C310 148 295 138 275 140 C248 140 235 155 225 175 Z" fill="#1C1714" />
  </g>

  <!-- Border & Caption -->
  <rect x="20" y="20" width="560" height="760" rx="12" fill="none" stroke="url(#goldGroom)" strokeWidth="1.5" opacity="0.6" />
  <rect x="80" y="720" width="440" height="46" rx="23" fill="#1C1613" opacity="0.9" stroke="url(#goldGroom)" strokeWidth="1" />
  <text x="300" y="740" text-anchor="middle" font-family="Cinzel, serif" font-size="13" fill="#F5E4B5" letter-spacing="2">MARK THOMSON E</text>
  <text x="300" y="754" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#D9BA76" letter-spacing="2">THE GROOM &middot; S/O ESLIN VICTOR RAJ S</text>
</svg>
`;

export const photo3DataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(photo3Svg.trim())}`;
