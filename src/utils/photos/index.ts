import { photo1Meta, photo1DataUrl, photo1Svg } from './photo1_couple';
import { photo2Meta, photo2DataUrl, photo2Svg } from './photo2_joyful';
import { photo3Meta, photo3DataUrl, photo3Svg } from './photo3_groom';
import { photo4Meta, photo4DataUrl, photo4Svg } from './photo4_hands';
import { photo5Meta, photo5DataUrl, photo5Svg } from './photo5_bride';
import { photo6Meta, photo6DataUrl, photo6Svg } from './photo6_grace';

export interface StoredWeddingPhoto {
  id: string;
  filename: string;
  title: string;
  caption: string;
  category: 'couple' | 'bride' | 'groom' | 'detail';
  aspectRatio: string;
  description: string;
  dataUrl: string;
  svgContent: string;
}

export const STORED_PHOTOS: StoredWeddingPhoto[] = [
  { ...photo1Meta, dataUrl: photo1DataUrl, svgContent: photo1Svg },
  { ...photo2Meta, dataUrl: photo2DataUrl, svgContent: photo2Svg },
  { ...photo3Meta, dataUrl: photo3DataUrl, svgContent: photo3Svg },
  { ...photo4Meta, dataUrl: photo4DataUrl, svgContent: photo4Svg },
  { ...photo5Meta, dataUrl: photo5DataUrl, svgContent: photo5Svg },
  { ...photo6Meta, dataUrl: photo6DataUrl, svgContent: photo6Svg },
];

export function getStoredPhotoByFilename(filename: string): StoredWeddingPhoto | undefined {
  return STORED_PHOTOS.find(
    (p) =>
      p.filename.toLowerCase() === filename.toLowerCase() ||
      filename.includes(p.filename) ||
      p.filename.includes(filename)
  );
}

export function getStoredPhotoDataUrl(filename: string): string {
  const photo = getStoredPhotoByFilename(filename);
  if (photo) return photo.dataUrl;
  return photo1DataUrl;
}

export {
  photo1Meta,
  photo1DataUrl,
  photo2Meta,
  photo2DataUrl,
  photo3Meta,
  photo3DataUrl,
  photo4Meta,
  photo4DataUrl,
  photo5Meta,
  photo5DataUrl,
  photo6Meta,
  photo6DataUrl,
};
