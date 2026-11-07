// Photo 6: Grace & Gentleness — Mark & Rini Outdoors
// Corresponding to: WhatsApp Image 2026-10-02 at 8.17.08 PM (1).jpeg

export const photo6Meta = {
  id: 'photo-6',
  filename: 'WhatsApp Image 2026-10-02 at 8.17.08 PM (1).jpeg',
  title: 'Grace & Gentleness',
  caption: 'Walking together in faith and love',
  category: 'couple' as const,
  aspectRatio: '3:4',
  description: 'Romantic outdoor close-up of Mark & Rini in natural sunlight, Mark holding Rini gently as they gaze at each other.',
};

export const photo6Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <!-- Natural outdoor ambient background -->
    <linearGradient id="outdoorLightBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#C4B598" />
      <stop offset="40%" stopColor="#A89778" />
      <stop offset="80%" stopColor="#877558" />
      <stop offset="100%" stopColor="#5E4E36" />
    </linearGradient>

    <!-- Warm sunlight flare -->
    <radialGradient id="sunlightFlare" cx="30%" cy="20%" r="60%">
      <stop offset="0%" stopColor="#FFF8E8" stopOpacity="0.6" />
      <stop offset="50%" stopColor="#DFC07A" stopOpacity="0.2" />
      <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
    </radialGradient>

    <!-- Gold border -->
    <linearGradient id="goldGrace" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F9E8BA" />
      <stop offset="50%" stopColor="#D9BA76" />
      <stop offset="100%" stopColor="#A88338" />
    </linearGradient>
  </defs>

  <rect width="600" height="800" fill="url(#outdoorLightBg)" />
  <rect width="600" height="800" fill="url(#sunlightFlare)" />

  <!-- Natural outdoor foliage in background -->
  <circle cx="120" cy="180" r="140" fill="#758A59" opacity="0.35" />
  <circle cx="480" cy="140" r="160" fill="#697D4E" opacity="0.3" />

  <!-- BRIDE & GROOM Close-up Outdoors -->
  <!-- Groom (Right): Mark in beige suit, black shirt -->
  <path d="M280 320 C340 300 450 310 490 350 L530 800 L260 800 Z" fill="#BAA487" />
  <path d="M340 330 L400 330 L390 480 L345 480 Z" fill="#1C1816" /> <!-- Black open shirt -->
  <!-- Groom Hand holding Rini's shoulder/lapel gently -->
  <ellipse cx="280" cy="510" rx="25" ry="16" fill="#C29875" transform="rotate(-15 280 510)" />
  <!-- Groom Head leaning in toward Rini -->
  <ellipse cx="380" cy="240" rx="44" ry="54" fill="#C29875" />
  <!-- Wavy dark hair curls -->
  <path d="M330 230 C325 180 365 160 405 165 C445 170 455 195 445 235 C430 205 410 195 385 195 C360 195 345 210 330 230 Z" fill="#1C1714" />
  <!-- Tender loving smile looking down at Rini -->
  <path d="M340 226 Q352 222 362 226" stroke="#4A3423" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  <path d="M352 234 Q360 238 368 234" stroke="#1C1008" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  <path d="M345 272 Q360 284 376 274" stroke="#6E3D22" strokeWidth="2.5" strokeLinecap="round" fill="none" />

  <!-- Bride (Left): Rini looking up at Mark -->
  <path d="M80 400 C110 350 240 350 280 400 L300 800 L40 800 Z" fill="#BA1C36" />
  <!-- Sweetheart neckline detail -->
  <path d="M150 395 Q195 425 240 395" stroke="#D9BA76" strokeWidth="3" fill="none" />
  <!-- Bride Head -->
  <ellipse cx="210" cy="290" rx="36" ry="46" fill="#D8A983" />
  <!-- Dark curly hair framing face -->
  <path d="M170 280 C160 230 195 215 225 218 C250 222 260 245 255 275 C242 250 228 242 215 242 C198 242 182 255 170 280 Z" fill="#140F0D" />
  <path d="M165 275 C150 330 160 420 180 470 C165 420 155 350 165 275 Z" fill="#181310" />
  <!-- Affectionate gaze & smile up at Mark -->
  <path d="M200 278 Q210 274 220 278" stroke="#362215" strokeWidth="2" strokeLinecap="round" fill="none" />
  <circle cx="212" cy="284" r="3" fill="#1F140D" />
  <path d="M205 315 Q218 326 230 316" stroke="#BA1C36" strokeWidth="2.5" strokeLinecap="round" fill="none" />

  <!-- Border & Caption Plate -->
  <rect x="20" y="20" width="560" height="760" rx="12" fill="none" stroke="url(#goldGrace)" strokeWidth="1.5" opacity="0.6" />
  <rect x="80" y="720" width="440" height="46" rx="23" fill="#1C1613" opacity="0.9" stroke="url(#goldGrace)" strokeWidth="1" />
  <text x="300" y="740" text-anchor="middle" font-family="Cinzel, serif" font-size="13" fill="#F9E8BA" letter-spacing="2">GRACE &amp; GENTLENESS</text>
  <text x="300" y="754" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#D9BA76" letter-spacing="2">OUTDOOR SUNLIGHT &middot; DECEMBER 19, 2026</text>
</svg>
`;

export const photo6DataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(photo6Svg.trim())}`;
