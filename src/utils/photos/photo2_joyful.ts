// Photo 2: Joyful Radiance — Mark & Rini by Balustrade
// Corresponding to: WhatsApp Image 2026-10-02 at 8.17.07 PM.jpeg

export const photo2Meta = {
  id: 'photo-2',
  filename: 'WhatsApp Image 2026-10-02 at 8.17.07 PM.jpeg',
  title: 'Joyful Radiance',
  caption: 'Shared smiles and cherished moments',
  category: 'couple' as const,
  aspectRatio: '3:4',
  description: 'Mark & Rini smiling affectionately at each other by the indoor balustrade railing.',
};

export const photo2Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <linearGradient id="balustradeBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#251E1C" />
      <stop offset="40%" stopColor="#3A302B" />
      <stop offset="70%" stopColor="#1C1715" />
      <stop offset="100%" stopColor="#100D0C" />
    </linearGradient>
    <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F5E4B5" />
      <stop offset="50%" stopColor="#D9BA76" />
      <stop offset="100%" stopColor="#A88338" />
    </linearGradient>
    <linearGradient id="railWood" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#4A3427" />
      <stop offset="50%" stopColor="#2E1F17" />
      <stop offset="100%" stopColor="#1A110D" />
    </linearGradient>
  </defs>

  <rect width="600" height="800" fill="url(#balustradeBg)" />
  
  <!-- Soft background bokeh ambient light -->
  <circle cx="150" cy="200" r="100" fill="#D9BA76" opacity="0.08" />
  <circle cx="450" cy="250" r="140" fill="#BA1C36" opacity="0.07" />

  <!-- BRIDE & GROOM smiling at each other -->
  <!-- Groom (Right) in beige suit -->
  <path d="M300 350 C330 330 420 330 460 360 L500 700 L320 700 Z" fill="#BFA98A" />
  <path d="M360 360 L410 360 L400 480 L360 480 Z" fill="#1C1816" /> <!-- Black shirt -->
  <!-- Groom Head smiling facing left toward bride -->
  <ellipse cx="400" cy="280" rx="38" ry="46" fill="#C29875" />
  <!-- Groom Hair wavy curls -->
  <path d="M360 270 C355 230 390 220 420 225 C450 228 455 250 450 280 C440 255 425 245 405 245 C385 245 370 255 360 270 Z" fill="#1C1714" />
  <!-- Beaming smile -->
  <path d="M375 295 Q390 310 405 298" stroke="#FFF" strokeWidth="3" fill="#663A20" />

  <!-- Bride (Left) in red lehenga smiling up at Mark -->
  <path d="M120 420 C140 380 240 380 270 420 L290 700 L90 700 Z" fill="#BA1C36" />
  <!-- Bride Head facing right toward Mark -->
  <ellipse cx="230" cy="310" rx="32" ry="40" fill="#D4A37D" />
  <!-- Dark wavy hair with pearl pins -->
  <path d="M195 300 C190 260 220 250 245 255 C265 260 270 280 265 305 C255 285 240 278 230 278 C215 278 202 288 195 300 Z" fill="#140F0D" />
  <!-- Hair pearl pins -->
  <circle cx="205" cy="285" r="2.5" fill="#FFF" />
  <circle cx="215" cy="275" r="2.5" fill="#FFF" />
  <circle cx="225" cy="270" r="2.5" fill="#FFF" />
  <!-- Bride Radiant smile -->
  <path d="M225 325 Q236 338 248 328" stroke="#FFF" strokeWidth="3" fill="#BA1C36" />

  <!-- Wooden Mezzanine Railing in foreground -->
  <rect x="0" y="660" width="600" height="40" fill="url(#railWood)" />
  <rect x="0" y="656" width="600" height="4" fill="url(#goldAcc)" opacity="0.6" />
  <!-- Vertical balusters -->
  <rect x="80" y="700" width="16" height="100" fill="url(#railWood)" />
  <rect x="180" y="700" width="16" height="100" fill="url(#railWood)" />
  <rect x="280" y="700" width="16" height="100" fill="url(#railWood)" />
  <rect x="380" y="700" width="16" height="100" fill="url(#railWood)" />
  <rect x="480" y="700" width="16" height="100" fill="url(#railWood)" />

  <!-- Golden Border -->
  <rect x="20" y="20" width="560" height="760" rx="12" fill="none" stroke="url(#goldAcc)" strokeWidth="1.5" opacity="0.6" />
  <text x="300" y="745" text-anchor="middle" font-family="Cinzel, serif" font-size="13" fill="#F5E4B5" letter-spacing="2">JOYFUL RADIANCE &middot; MARK &amp; RINI</text>
</svg>
`;

export const photo2DataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(photo2Svg.trim())}`;
