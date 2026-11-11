import { BibleVerse, PhotoItem } from '../types/wedding';

export const WEDDING_DETAILS = {
  bride: {
    name: 'Rini V Rajan',
    parents: 'D/o Rajan V Abraham & Mariamma Rajan',
    father: 'Rajan V Abraham',
    mother: 'Mariamma Rajan',
    title: 'The Bride',
  },
  groom: {
    name: 'Mark Thomson E',
    parents: 'S/o Eslin Victor Raj S & Eve Jessica E',
    father: 'Eslin Victor Raj S',
    mother: 'Eve Jessica E',
    title: 'The Groom',
  },
  date: {
    displayDate: 'Saturday, December 19, 2026',
    time: '10:00 AM IST',
    dayOfWeek: 'Saturday',
    day: '19',
    month: 'December',
    year: '2026',
    formattedStartISO: '2026-12-19T10:00:00+05:30',
  },
  venue: {
    name: 'Yahir Auditorium',
    city: 'Thiruvalla',
    state: 'Kerala, India',
    fullAddress: 'Yahir Auditorium, Nellad, Thiruvalla - Pathanamthitta Rd, Thiruvalla, Kerala 689541',
    mapUrl: 'https://maps.google.com/?q=Yahir+Auditorium,+Nellad,+Thiruvalla,+Kerala',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Yahir+Auditorium,+Nellad,+Thiruvalla,+Kerala',
  },
};

// Generates direct Google Calendar Add-Event Link
export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent('Wedding: Mark Thomson & Rini V Rajan');
  // Event from 10:00 AM to 02:00 PM IST (IST is UTC+5:30 => 04:30 UTC to 08:30 UTC)
  const startUTC = '20261219T043000Z';
  const endUTC = '20261219T083000Z';
  const details = encodeURIComponent(
    `Holy Matrimony of Mark Thomson E & Rini V Rajan\n\n` +
    `Date & Time: Saturday, Dec 19, 2026 at 10:00 AM IST\n` +
    `Venue: Yahir Auditorium, Thiruvalla, Kerala\n` +
    `Map: ${WEDDING_DETAILS.venue.mapUrl}\n\n` +
    `"Two are better than one, because they have a good return for their labor... Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken." — Ecclesiastes 4:9, 12`
  );
  const location = encodeURIComponent(`${WEDDING_DETAILS.venue.name}, ${WEDDING_DETAILS.venue.city}, Kerala`);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startUTC}/${endUTC}&details=${details}&location=${location}`;
}

export const BIBLE_VERSES: BibleVerse[] = [
  {
    reference: '1 Corinthians 13:4, 7–8',
    theme: 'Unfailing Love',
    text: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It always protects, always trusts, always hopes, always perseveres. Love never fails.',
  },
  {
    reference: 'Ecclesiastes 4:9, 12',
    theme: 'Cord of Three Strands',
    text: 'Two are better than one, because they have a good return for their labor... Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.',
  },
  {
    reference: 'Song of Solomon 3:4',
    theme: 'Devotion',
    text: 'I have found the one whom my soul loves. I held him and would not let him go.',
  },
  {
    reference: 'Colossians 3:14',
    theme: 'Perfect Unity',
    text: 'And over all these virtues put on love, which binds them all together in perfect unity.',
  },
  {
    reference: '1 John 4:19',
    theme: 'His Grace',
    text: 'We love because He first loved us.',
  },
];

export const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    filename: 'WhatsApp Image 2026-10-02 at 8.17.06 PM.jpeg',
    title: 'Sacred Covenant',
    caption: 'Mark & Rini together in elegance',
    category: 'couple',
    aspectRatio: '3:4',
    quote: 'Two are better than one, because they have a good return for their labor... Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.',
    quoteSource: 'Ecclesiastes 4:9, 12',
    reflection: 'A sacred union anchored in Christ, where two separate lives intertwine into one harmonious song of everlasting devotion.',
  },
  {
    id: 'photo-2',
    filename: 'WhatsApp Image 2026-10-02 at 8.17.07 PM.jpeg',
    title: 'Joyful Radiance',
    caption: 'Shared smiles and cherished moments',
    category: 'couple',
    aspectRatio: '3:4',
    quote: 'To love and be loved is to feel the sun from both sides. In your laughter, I found the home my heart had always sought.',
    quoteSource: 'David Viscott & Song of Solomon',
    reflection: 'Real love doesn’t just endure; it smiles, rejoices, and turns every simple shared glance into a celebration of grace.',
  },
  {
    id: 'photo-3',
    filename: 'WhatsApp Image 2026-10-02 at 8.17.07 PM (1).jpeg',
    title: 'The Groom',
    caption: 'Mark Thomson E',
    category: 'groom',
    aspectRatio: '3:4',
    quote: 'Husbands, love your wives, just as Christ loved the church and gave Himself up for her with unconditional tenderness.',
    quoteSource: 'Ephesians 5:25',
    reflection: 'Standing resolute in humility and faith, ready to lead with kindness, protect with courage, and cherish his bride forever.',
  },
  {
    id: 'photo-5',
    filename: 'WhatsApp Image 2026-10-02 at 8.17.08 PM.jpeg',
    title: 'The Bride',
    caption: 'Rini V Rajan',
    category: 'bride',
    aspectRatio: '3:4',
    quote: 'She is clothed with strength and dignity; she laughs without fear of the future, crowned in gentleness and unfading beauty.',
    quoteSource: 'Proverbs 31:25',
    reflection: 'Gracious, poised, and radiant with quiet inner joy, stepping gracefully into the blessed sanctuary of holy matrimony.',
  },
  {
    id: 'photo-6',
    filename: 'WhatsApp Image 2026-10-02 at 8.17.08 PM (1).jpeg',
    title: 'Grace & Gentleness',
    caption: 'Walking together in faith and love',
    category: 'couple',
    aspectRatio: '3:4',
    quote: 'And over all these virtues put on love, which binds them all together in perfect harmony and unwavering peace.',
    quoteSource: 'Colossians 3:14',
    reflection: 'May their journey be paved with soft answers, patient understandings, and a companionship blessed from above.',
  },
];
