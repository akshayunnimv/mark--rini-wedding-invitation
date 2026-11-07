// Photo 4: Hands of Devotion
// Corresponding to: WhatsApp Image 2026-10-02 at 8.17.07 PM (2).jpeg

export const photo4Meta = {
  id: 'photo-4',
  filename: 'WhatsApp Image 2026-10-02 at 8.17.07 PM (2).jpeg',
  title: 'Hands of Devotion',
  caption: 'A touch that whispers forever',
  category: 'detail' as const,
  aspectRatio: '3:4',
  description: 'Macro shot of bride manicured hand with rose gold watch on groom beige suit chest, groom holding her hand with black chronograph.',
};

export const photo4Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <!-- Suit Fabric Texture -->
    <linearGradient id="suitTexture" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#C9B496" />
      <stop offset="50%" stopColor="#B39D7D" />
      <stop offset="100%" stopColor="#968060" />
    </linearGradient>

    <!-- Red Lehenga trim -->
    <linearGradient id="redTrim" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#DC2848" />
      <stop offset="100%" stopColor="#871024" />
    </linearGradient>

    <!-- Rose Gold watch -->
    <linearGradient id="roseGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F9D7D0" />
      <stop offset="50%" stopColor="#D99B8F" />
      <stop offset="100%" stopColor="#A86B5F" />
    </linearGradient>

    <!-- Black watch -->
    <linearGradient id="blackWatch" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#4A4441" />
      <stop offset="50%" stopColor="#25211F" />
      <stop offset="100%" stopColor="#12100F" />
    </linearGradient>

    <!-- Gold Accent -->
    <linearGradient id="goldDetail" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F5E4B5" />
      <stop offset="50%" stopColor="#D9BA76" />
      <stop offset="100%" stopColor="#A88338" />
    </linearGradient>
  </defs>

  <!-- Background: Groom beige suit chest & jacket -->
  <rect width="600" height="800" fill="url(#suitTexture)" />
  <!-- Jacket Lapel seam -->
  <path d="M420 0 L400 800" stroke="#7A664A" strokeWidth="3" opacity="0.6" />
  <!-- Pocket flap line -->
  <rect x="420" y="380" width="160" height="18" rx="3" fill="#A89274" />

  <!-- Left: Bride red choli shoulder/arm visible -->
  <path d="M0 0 L150 0 L100 800 L0 800 Z" fill="url(#redTrim)" />
  <!-- Gold embroidery edge on choli -->
  <path d="M150 0 L100 800" stroke="url(#goldDetail)" strokeWidth="6" strokeDasharray="6 3" />

  <!-- Groom Hand holding Bride's Hand (Bottom) -->
  <path d="M180 500 C240 450 350 480 340 600 L280 750 L120 700 Z" fill="#B38662" />
  <!-- Groom Matte Black Chronograph Watch -->
  <g id="groomBlackWatch">
    <!-- Watch Strap -->
    <rect x="220" y="650" width="130" height="40" rx="4" fill="url(#blackWatch)" transform="rotate(-25 220 650)" />
    <!-- Watch Dial -->
    <circle cx="280" cy="670" r="42" fill="url(#blackWatch)" stroke="#59524D" strokeWidth="4" />
    <circle cx="280" cy="670" r="34" fill="#1C1816" stroke="#38322E" strokeWidth="2" />
    <!-- Dial hands -->
    <line x1="280" y1="670" x2="280" y2="648" stroke="#D9BA76" strokeWidth="2" />
    <line x1="280" y1="670" x2="295" y2="675" stroke="#D9BA76" strokeWidth="2" />
  </g>

  <!-- Bride Manicured Hand resting on Groom chest (Center) -->
  <g id="brideHand">
    <!-- Arm -->
    <path d="M120 600 C180 550 250 480 290 380 L350 420 C300 500 240 600 160 660 Z" fill="#D4A37D" />

    <!-- Rose Gold Luxury Watch on Bride Wrist -->
    <g id="brideRoseGoldWatch">
      <!-- Bracelet strap -->
      <rect x="215" y="475" width="90" height="26" rx="4" fill="url(#roseGold)" transform="rotate(-35 215 475)" stroke="#C78A7E" strokeWidth="1.5" />
      <!-- Dial case -->
      <circle cx="270" cy="460" r="28" fill="url(#roseGold)" stroke="#FFF" strokeWidth="1" />
      <circle cx="270" cy="460" r="22" fill="#4A2622" stroke="url(#roseGold)" strokeWidth="1.5" />
      <!-- Small dial hands -->
      <line x1="270" y1="460" x2="270" y2="445" stroke="#F5D2C9" strokeWidth="1.5" />
      <line x1="270" y1="460" x2="282" y2="465" stroke="#F5D2C9" strokeWidth="1.5" />
    </g>

    <!-- Palm & Delicate Fingers with French Manicure -->
    <!-- Palm -->
    <path d="M280 390 C310 350 360 300 390 270 L460 330 C430 380 360 450 310 440 Z" fill="#DDB08A" />
    <!-- Thumb resting gently -->
    <path d="M285 360 C295 330 330 320 350 340 L340 370 Z" fill="#D4A37D" />
    <!-- Index Finger -->
    <path d="M375 285 C390 230 420 200 440 220 C435 250 415 300 395 315 Z" fill="#DEB28E" />
    <ellipse cx="432" cy="216" rx="5" ry="7" fill="#FCECE8" transform="rotate(-20 432 216)" /> <!-- Manicure tip -->
    <!-- Middle Finger -->
    <path d="M400 295 C420 235 450 190 470 210 C465 245 440 310 420 330 Z" fill="#DEB28E" />
    <ellipse cx="462" cy="204" rx="5" ry="7" fill="#FCECE8" transform="rotate(-20 462 204)" /> <!-- Manicure tip -->
    <!-- Ring Finger with Gold Wedding Band -->
    <path d="M415 315 C440 260 470 220 488 238 C480 270 450 335 435 345 Z" fill="#D4A37D" />
    <ellipse cx="480" cy="232" rx="4.5" ry="6.5" fill="#FCECE8" transform="rotate(-20 480 232)" /> <!-- Manicure tip -->
    <!-- Gold Ring on ring finger -->
    <rect x="440" y="290" width="16" height="8" rx="2" fill="url(#goldDetail)" stroke="#FFF" strokeWidth="0.8" transform="rotate(35 440 290)" />
    <!-- Pinky Finger -->
    <path d="M430 340 C455 300 480 265 495 280 C485 310 460 360 445 370 Z" fill="#CE9E77" />
    <ellipse cx="488" cy="274" rx="4" ry="6" fill="#FCECE8" transform="rotate(-20 488 274)" /> <!-- Manicure tip -->
  </g>

  <!-- Border & Caption Plate -->
  <rect x="20" y="20" width="560" height="760" rx="12" fill="none" stroke="url(#goldDetail)" strokeWidth="1.5" opacity="0.6" />
  <rect x="80" y="720" width="440" height="46" rx="23" fill="#1C1613" opacity="0.9" stroke="url(#goldDetail)" strokeWidth="1" />
  <text x="300" y="740" text-anchor="middle" font-family="Cinzel, serif" font-size="13" fill="#F5E4B5" letter-spacing="2">HANDS OF DEVOTION</text>
  <text x="300" y="754" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#D9BA76" letter-spacing="2">A SACRED PROMISE &middot; DECEMBER 19, 2026</text>
</svg>
`;

export const photo4DataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(photo4Svg.trim())}`;
