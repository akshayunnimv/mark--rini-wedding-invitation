// Photo 5: The Bride — Rini V Rajan Solo in Garden
// Corresponding to: WhatsApp Image 2026-10-02 at 8.17.08 PM.jpeg

export const photo5Meta = {
  id: 'photo-5',
  filename: 'WhatsApp Image 2026-10-02 at 8.17.08 PM.jpeg',
  title: 'The Bride',
  caption: 'Rini V Rajan',
  category: 'bride' as const,
  aspectRatio: '3:4',
  description: 'Full-length outdoor portrait of bride Rini V Rajan in magnificent crimson red lehenga with allover gold zari brocade, framed by lush garden trees.',
};

export const photo5Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <!-- Garden background -->
    <linearGradient id="gardenBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#4A5636" />
      <stop offset="30%" stopColor="#6E7E52" />
      <stop offset="60%" stopColor="#8A9968" />
      <stop offset="100%" stopColor="#C4B79B" />
    </linearGradient>

    <!-- Crimson lehenga -->
    <linearGradient id="redLehengaSolo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#DC2848" />
      <stop offset="40%" stopColor="#B31932" />
      <stop offset="80%" stopColor="#801022" />
      <stop offset="100%" stopColor="#550A16" />
    </linearGradient>

    <!-- Gold Zari Pattern -->
    <linearGradient id="goldZariSolo" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F9E8BA" />
      <stop offset="50%" stopColor="#D9BA76" />
      <stop offset="100%" stopColor="#A88338" />
    </linearGradient>
  </defs>

  <!-- Outdoor garden background -->
  <rect width="600" height="800" fill="url(#gardenBg)" />

  <!-- Soft bokeh leaves -->
  <circle cx="100" cy="150" r="140" fill="#3D4B2A" opacity="0.4" />
  <circle cx="500" cy="200" r="180" fill="#475730" opacity="0.4" />
  <circle cx="50" cy="400" r="120" fill="#364324" opacity="0.3" />

  <!-- Paved outdoor ground -->
  <path d="M0 650 L600 650 L600 800 L0 800 Z" fill="#998D7B" />
  <path d="M0 680 L600 680" stroke="#7A6F5E" strokeWidth="2" />
  <path d="M0 730 L600 730" stroke="#7A6F5E" strokeWidth="2" />

  <!-- Bride Figure: Full Length Profile View -->
  <g id="riniSolo">
    <!-- Majestic Flared Red Lehenga Skirt -->
    <path d="M260 480 C290 460 350 460 370 480 L440 760 L180 760 Z" fill="url(#redLehengaSolo)" />
    <!-- Intricate all-over gold floral brocade patterns -->
    <path d="M210 560 Q300 590 405 560" stroke="url(#goldZariSolo)" strokeWidth="6" strokeDasharray="10 5" fill="none" />
    <path d="M195 620 Q300 655 420 620" stroke="url(#goldZariSolo)" strokeWidth="10" strokeDasharray="14 6" fill="none" />
    <path d="M185 680 Q300 720 435 680" stroke="url(#goldZariSolo)" strokeWidth="14" strokeDasharray="16 8" fill="none" />
    <path d="M180 740 Q300 780 440 740" stroke="url(#goldZariSolo)" strokeWidth="18" fill="none" />
    <!-- Gold bootis across skirt -->
    <circle cx="260" cy="650" r="8" fill="url(#goldZariSolo)" opacity="0.9" />
    <circle cx="320" cy="655" r="8" fill="url(#goldZariSolo)" opacity="0.9" />
    <circle cx="370" cy="650" r="8" fill="url(#goldZariSolo)" opacity="0.9" />

    <!-- Red Choli (Blouse) -->
    <path d="M280 370 C300 350 350 350 365 370 L370 475 C340 485 295 485 275 475 Z" fill="url(#redLehengaSolo)" />
    <!-- Gold borders on choli -->
    <path d="M295 368 Q325 390 355 368" stroke="url(#goldZariSolo)" strokeWidth="3" fill="none" />
    <!-- Pearl bead fringe at waist -->
    <path d="M275 475 Q325 490 370 475" stroke="url(#goldZariSolo)" strokeWidth="3" fill="none" />

    <!-- Sheer Red Dupatta draped gracefully from shoulder to skirt -->
    <path d="M350 370 C380 440 400 550 410 720 L370 730 C360 580 340 460 330 380 Z" fill="#BA1C36" opacity="0.6" />
    <path d="M350 370 C380 440 400 550 410 720" stroke="url(#goldZariSolo)" strokeWidth="2.5" fill="none" />

    <!-- Arms & Hands folded in front -->
    <path d="M285 385 C275 425 285 475 320 500 L340 480 C315 460 305 420 310 395 Z" fill="#D8A983" />
    <ellipse cx="330" cy="495" rx="14" ry="10" fill="#D8A983" />

    <!-- Neck & Head: Side profile looking up into the distance with serenity -->
    <path d="M305 315 L335 315 L340 370 C325 375 315 375 305 370 Z" fill="#D8A983" />
    <ellipse cx="320" cy="275" rx="30" ry="40" fill="#D8A983" />

    <!-- Profile features -->
    <!-- Serene gaze looking right into the light -->
    <path d="M320 262 Q332 258 340 262" stroke="#2B1A10" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="334" cy="268" r="3" fill="#1C1008" />
    <path d="M336 268 L348 280 L336 284" stroke="#9C6E4E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <!-- Delicate red smile -->
    <path d="M328 296 Q338 304 346 296" stroke="#BA1C36" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    <!-- Long Dark Hair flowing down back and over shoulder -->
    <path d="M285 275 C280 230 310 215 330 215 C345 215 355 230 350 260 C345 240 330 235 320 235 C305 235 292 245 285 275 Z" fill="#140F0D" />
    <!-- Cascading curls down back -->
    <path d="M285 275 C270 330 280 430 300 480 C285 430 278 350 285 275 Z" fill="#181310" />

    <!-- Gold Earring -->
    <circle cx="308" cy="285" r="3" fill="url(#goldZariSolo)" />
  </g>

  <!-- Border & Caption Plate -->
  <rect x="20" y="20" width="560" height="760" rx="12" fill="none" stroke="url(#goldZariSolo)" strokeWidth="1.5" opacity="0.6" />
  <rect x="80" y="720" width="440" height="46" rx="23" fill="#1C1613" opacity="0.9" stroke="url(#goldZariSolo)" strokeWidth="1" />
  <text x="300" y="740" text-anchor="middle" font-family="Cinzel, serif" font-size="13" fill="#F9E8BA" letter-spacing="2">RINI V RAJAN</text>
  <text x="300" y="754" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#D9BA76" letter-spacing="2">THE BRIDE &middot; D/O RAJAN V ABRAHAM</text>
</svg>
`;

export const photo5DataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(photo5Svg.trim())}`;
