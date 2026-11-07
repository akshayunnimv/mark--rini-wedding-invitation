export interface PhotoItem {
  id: string;
  filename: string;
  title: string;
  caption: string;
  category: 'couple' | 'bride' | 'groom' | 'detail';
  aspectRatio: string;
  quote?: string;
  quoteSource?: string;
  reflection?: string;
}

export interface BibleVerse {
  reference: string;
  text: string;
  theme: string;
}
