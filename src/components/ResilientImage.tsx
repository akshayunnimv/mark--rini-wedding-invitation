import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { getStoredPhotoDataUrl, getStoredPhotoByFilename } from '../utils/photos';

interface ResilientImageProps {
  filename: string;
  alt: string;
  title?: string;
  category?: 'couple' | 'bride' | 'groom' | 'detail';
  className?: string;
  containerClassName?: string;
  onImageClick?: () => void;
  aspectRatioClass?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  filename,
  alt,
  className = '',
  containerClassName = '',
  onImageClick,
  aspectRatioClass = 'aspect-[3/4]',
}) => {
  // Direct path to the actual JPEG in /public
  const directPath = `/${encodeURIComponent(filename)}`;
  const altPath = `/photos/${encodeURIComponent(filename)}`;
  const fallbackUrl = getStoredPhotoDataUrl(filename);
  const photoMeta = getStoredPhotoByFilename(filename);

  const [imageSrc, setImageSrc] = useState(directPath);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (imageSrc === directPath) {
      setImageSrc(altPath);
    } else if (imageSrc === altPath) {
      setImageSrc(fallbackUrl);
    }
  };

  return (
    <div
      onClick={onImageClick}
      className={`relative overflow-hidden group cursor-pointer ${aspectRatioClass} ${containerClassName} bg-[#241E1C]`}
    >
      <img
        src={imageSrc}
        alt={alt || photoMeta?.title || 'Wedding Photo'}
        referrerPolicy="no-referrer"
        loading="eager"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-90'
        } ${className}`}
      />

      {/* Subtle luxury vignette gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />

      {/* Hover zoom indicator */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-xs flex items-center justify-center text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
        <ZoomIn className="w-3.5 h-3.5 text-[#E2C98A]" />
      </div>
    </div>
  );
};
