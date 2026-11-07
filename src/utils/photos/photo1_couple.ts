// Photo 1: Sacred Covenant — Mark Thomson E & Rini V Rajan
// Corresponding to: WhatsApp Image 2026-10-02 at 8.17.06 PM.jpeg
// Mark in sharp beige suit embracing Rini from behind, Rini in red lehenga looking down smiling.

export const photo1Meta = {
  id: 'photo-1',
  filename: 'WhatsApp Image 2026-10-02 at 8.17.06 PM.jpeg',
  title: 'Sacred Covenant',
  caption: 'Mark & Rini together in sacred devotion',
  category: 'couple' as const,
  aspectRatio: '3:4',
  description: 'Mark Thomson E in beige suit & black shirt embracing bride Rini V Rajan in crimson red embroidered lehenga.',
};

export const photo1Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <!-- Background curtain texture -->
    <linearGradient id="bgCurtain" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#D5C5A8" />
      <stop offset="35%" stopColor="#C2AF8F" />
      <stop offset="70%" stopColor="#B39F7D" />
      <stop offset="100%" stopColor="#8A7758" />
    </linearGradient>

    <!-- Warm ambient glow -->
    <radialGradient id="warmLight" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stopColor="#FFF2DC" stopOpacity="0.5" />
      <stop offset="60%" stopColor="#D9BA76" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#000000" stopOpacity="0.45" />
    </radialGradient>

    <!-- Beige suit gradient -->
    <linearGradient id="beigeSuit" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#D8C5A8" />
      <stop offset="50%" stopColor="#BFA98A" />
      <stop offset="100%" stopColor="#9E876A" />
    </linearGradient>
    <linearGradient id="beigeSuitDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#B59E7F" />
      <stop offset="100%" stopColor="#7A664A" />
    </linearGradient>

    <!-- Crimson lehenga gradient -->
    <linearGradient id="crimsonLehenga" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#DC2848" />
      <stop offset="40%" stopColor="#BA1C36" />
      <stop offset="80%" stopColor="#871024" />
      <stop offset="100%" stopColor="#5E0917" />
    </linearGradient>

    <!-- Gold zari metallic -->
    <linearGradient id="goldZari" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F7E5B5" />
      <stop offset="50%" stopColor="#D9BA76" />
      <stop offset="100%" stopColor="#A88338" />
    </linearGradient>

    <!-- Skin tones -->
    <linearGradient id="skinGroom" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#CE9E77" />
      <stop offset="100%" stopColor="#A67650" />
    </linearGradient>
    <linearGradient id="skinBride" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#D8A983" />
      <stop offset="100%" stopColor="#B3805B" />
    </linearGradient>
  </defs>

  <!-- Background: warm textured curtain drape -->
  <rect width="600" height="800" fill="url(#bgCurtain)" />
  <!-- Vertical soft drape folds -->
  <path d="M60 0 C70 300 50 600 60 800" stroke="#9E8B6D" strokeWidth="18" opacity="0.25" fill="none" />
  <path d="M140 0 C150 250 130 550 140 800" stroke="#FFF" strokeWidth="14" opacity="0.15" fill="none" />
  <path d="M220 0 C210 300 230 600 220 800" stroke="#9E8B6D" strokeWidth="20" opacity="0.2" fill="none" />
  <path d="M480 0 C470 300 490 600 480 800" stroke="#9E8B6D" strokeWidth="22" opacity="0.25" fill="none" />
  <path d="M550 0 C560 300 540 600 550 800" stroke="#FFF" strokeWidth="16" opacity="0.12" fill="none" />

  <rect width="600" height="800" fill="url(#warmLight)" />

  <!-- GROOM (Mark Thomson) - Standing behind bride -->
  <g id="groom">
    <!-- Groom Suit Torso & Shoulders -->
    <path d="M120 380 C130 290 200 240 280 245 C350 250 420 280 440 380 L460 750 L100 750 Z" fill="url(#beigeSuit)" />
    <!-- Suit Left Lapel -->
    <path d="M220 260 L245 420 L195 380 Z" fill="url(#beigeSuitDark)" />
    <!-- Suit Right Lapel -->
    <path d="M330 265 L300 420 L350 380 Z" fill="url(#beigeSuitDark)" />
    <!-- Groom Black Shirt under suit -->
    <path d="M245 260 L290 262 L300 370 L240 370 Z" fill="#1C1816" />
    <path d="M235 258 L270 295 L260 255 Z" fill="#2D2723" />
    <path d="M295 258 L265 295 L275 255 Z" fill="#2D2723" />

    <!-- Groom Arms embracing Bride -->
    <!-- Left Arm -->
    <path d="M115 375 C105 450 140 550 230 580 L250 540 C170 515 155 440 160 380 Z" fill="url(#beigeSuitDark)" />
    <!-- Right Arm embracing waist -->
    <path d="M440 380 C450 460 410 570 330 600 L320 560 C380 535 405 460 395 380 Z" fill="url(#beigeSuitDark)" />

    <!-- Groom Neck -->
    <path d="M245 200 L290 200 L285 265 L250 265 Z" fill="url(#skinGroom)" />
    <!-- Groom Jaw shadow -->
    <path d="M245 230 C265 245 280 245 290 230 Z" fill="#8C5C38" opacity="0.35" />

    <!-- Groom Head -->
    <ellipse cx="268" cy="180" rx="42" ry="52" fill="url(#skinGroom)" />
    <!-- Groom Features: warm smile looking down at bride -->
    <path d="M250 165 Q262 162 272 165" stroke="#4A3423" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M280 165 Q292 162 300 166" stroke="#4A3423" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <!-- Eyes closed / looking lovingly down -->
    <path d="M253 174 Q262 178 270 174" stroke="#2B1E14" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M282 175 Q290 179 298 175" stroke="#2B1E14" strokeWidth="2" strokeLinecap="round" fill="none" />
    <!-- Nose -->
    <path d="M276 172 L274 190 L279 193" stroke="#8C5C38" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <!-- Gentle warm smile -->
    <path d="M260 206 Q275 218 290 206" stroke="#663A20" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    <!-- Groom Hair: voluminous wavy black curls -->
    <path d="M222 175 C215 130 250 110 285 115 C320 115 330 140 325 170 C315 145 295 138 275 140 C245 140 230 155 222 175 Z" fill="#1C1714" />
    <path d="M218 160 C225 140 240 130 255 132 C240 142 235 155 230 170 Z" fill="#2E241E" />
    <path d="M310 150 C322 155 330 170 328 185 C324 175 318 165 310 150 Z" fill="#1C1714" />
  </g>

  <!-- BRIDE (Rini V Rajan) - In front, radiant in red lehenga -->
  <g id="bride">
    <!-- Bride Cascading dark wavy hair in back -->
    <path d="M315 250 C310 320 380 430 430 520 C400 480 375 390 365 320 Z" fill="#181310" />

    <!-- Bride Red Lehenga Skirt (Bottom) -->
    <path d="M240 550 C260 520 380 520 405 550 L480 800 L180 800 Z" fill="url(#crimsonLehenga)" />
    <!-- Lehenga gold zari pattern brocade bands -->
    <path d="M215 620 Q320 650 435 620" stroke="url(#goldZari)" strokeWidth="6" fill="none" strokeDasharray="8 4" />
    <path d="M195 670 Q320 705 455 670" stroke="url(#goldZari)" strokeWidth="10" fill="none" strokeDasharray="12 6" />
    <path d="M180 730 Q320 770 475 730" stroke="url(#goldZari)" strokeWidth="16" fill="none" strokeDasharray="14 7" />
    <!-- Gold floral motifs on skirt -->
    <circle cx="280" cy="690" r="10" fill="url(#goldZari)" opacity="0.8" />
    <circle cx="340" cy="695" r="10" fill="url(#goldZari)" opacity="0.8" />
    <circle cx="400" cy="690" r="10" fill="url(#goldZari)" opacity="0.8" />
    <circle cx="310" cy="740" r="12" fill="url(#goldZari)" opacity="0.85" />
    <circle cx="370" cy="740" r="12" fill="url(#goldZari)" opacity="0.85" />

    <!-- Bride Crimson Red Choli (Blouse) -->
    <path d="M260 370 C280 340 365 340 385 370 L400 480 C360 495 290 495 250 480 Z" fill="url(#crimsonLehenga)" />
    <!-- Sweetheart neckline gold zari embroidery -->
    <path d="M285 365 Q325 395 360 365" stroke="url(#goldZari)" strokeWidth="4" fill="none" />
    <path d="M280 375 Q325 405 365 375" stroke="url(#goldZari)" strokeWidth="2" strokeDasharray="4 2" fill="none" />
    <!-- Choli allover gold bootis -->
    <circle cx="300" cy="420" r="2.5" fill="url(#goldZari)" />
    <circle cx="325" cy="415" r="2.5" fill="url(#goldZari)" />
    <circle cx="350" cy="420" r="2.5" fill="url(#goldZari)" />
    <circle cx="310" cy="445" r="2.5" fill="url(#goldZari)" />
    <circle cx="335" cy="445" r="2.5" fill="url(#goldZari)" />
    <circle cx="290" cy="460" r="2.5" fill="url(#goldZari)" />
    <circle cx="355" cy="460" r="2.5" fill="url(#goldZari)" />
    <!-- Waist belt with hanging pearls (kamarbandh) -->
    <path d="M255 482 Q325 498 395 482" stroke="url(#goldZari)" strokeWidth="3" fill="none" />
    <!-- Pearl bead fringe -->
    <circle cx="275" cy="492" r="2" fill="#FFF" />
    <circle cx="295" cy="495" r="2" fill="#FFF" />
    <circle cx="315" cy="497" r="2" fill="#FFF" />
    <circle cx="335" cy="497" r="2" fill="#FFF" />
    <circle cx="355" cy="495" r="2" fill="#FFF" />
    <circle cx="375" cy="492" r="2" fill="#FFF" />

    <!-- Sheer Red Dupatta draped gracefully -->
    <path d="M375 370 C410 420 445 520 460 680 L400 700 C390 560 370 440 350 380 Z" fill="#BA1C36" opacity="0.65" />
    <path d="M375 370 C410 420 445 520 460 680" stroke="url(#goldZari)" strokeWidth="3" fill="none" />

    <!-- Bride Arms & Hands -->
    <!-- Left Arm -->
    <path d="M260 385 C240 430 245 500 300 550 L315 525 C275 485 270 435 285 395 Z" fill="url(#skinBride)" />
    <!-- Right Arm -->
    <path d="M380 390 C400 440 405 500 370 550 L350 535 C375 495 375 445 365 395 Z" fill="url(#skinBride)" />
    <!-- Bride Hands resting together gently -->
    <ellipse cx="330" cy="545" rx="20" ry="12" fill="url(#skinBride)" />
    <!-- Rose gold watch / bangles on bride wrist -->
    <rect x="360" y="520" width="12" height="6" rx="2" fill="url(#goldZari)" transform="rotate(-30 360 520)" />

    <!-- Bride Neck & Collarbone -->
    <path d="M305 310 L345 310 L350 368 C335 376 315 376 300 368 Z" fill="url(#skinBride)" />
    <!-- Delicate gold chain necklace -->
    <path d="M312 335 Q325 348 338 335" stroke="url(#goldZari)" strokeWidth="1.5" fill="none" />

    <!-- Bride Head -->
    <ellipse cx="328" cy="265" rx="33" ry="43" fill="url(#skinBride)" />
    <!-- Shy, radiant bridal smile looking gently down -->
    <!-- Brows -->
    <path d="M308 252 Q317 248 325 252" stroke="#362215" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M332 252 Q341 248 350 252" stroke="#362215" strokeWidth="2" strokeLinecap="round" fill="none" />
    <!-- Eyes looking down lovingly -->
    <path d="M310 260 Q317 266 324 260" stroke="#1F140D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M334 260 Q341 266 348 260" stroke="#1F140D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M327 258 L325 274 L330 277" stroke="#A67650" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <!-- Radiant pink/red bridal smile -->
    <path d="M317 288 Q328 298 340 288" stroke="#B8243A" strokeWidth="2.8" strokeLinecap="round" fill="none" />

    <!-- Bride Hair: Gorgeous flowing wavy curls with center part -->
    <path d="M292 260 C285 220 315 205 330 205 C345 205 372 220 365 260 C355 235 340 228 328 228 C315 228 300 235 292 260 Z" fill="#140F0D" />
    <!-- Left curls framing face -->
    <path d="M295 255 C285 275 282 305 288 335 C294 315 295 285 300 265 Z" fill="#1C1512" />
    <!-- Right curls framing neck -->
    <path d="M360 255 C372 280 375 315 370 345 C364 320 362 285 355 265 Z" fill="#1C1512" />
    <!-- Delicate maang tikka / gold bindi -->
    <circle cx="328" cy="242" r="1.5" fill="url(#goldZari)" />
    <!-- Delicate earrings -->
    <circle cx="294" cy="275" r="3" fill="url(#goldZari)" />
    <circle cx="362" cy="275" r="3" fill="url(#goldZari)" />
  </g>

  <!-- Golden Foil Framing Border -->
  <rect x="20" y="20" width="560" height="760" rx="12" fill="none" stroke="url(#goldZari)" strokeWidth="1.5" opacity="0.6" />
  <rect x="28" y="28" width="544" height="744" rx="8" fill="none" stroke="url(#goldZari)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />

  <!-- Bottom Elegant Caption Plate -->
  <rect x="100" y="715" width="400" height="50" rx="25" fill="#191310" opacity="0.85" stroke="url(#goldZari)" strokeWidth="1" />
  <text x="300" y="736" text-anchor="middle" font-family="Cinzel, serif" font-size="14" fill="#F7E5B5" letter-spacing="3">RINI &amp; MARK</text>
  <text x="300" y="752" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#D9BA76" letter-spacing="2">DECEMBER 19, 2026 &middot; THIRUVALLA</text>
</svg>
`;

export const photo1DataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(photo1Svg.trim())}`;
