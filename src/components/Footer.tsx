import React from 'react';
import { MonogramSeal } from './FloralMotifs';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF7F2] border-t border-[#E8DEC9] text-center relative">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Benediction */}
        <p className="font-serif italic text-lg sm:text-xl text-[#6B5F52] leading-relaxed max-w-xl mb-3">
          &ldquo;The Lord bless you and keep you; the Lord make His face shine on you and be gracious to you; the Lord turn His face toward you and give you peace.&rdquo;
        </p>
        <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#8C6D34] font-medium mb-8">
          Numbers 6:24–26
        </span>

        {/* Seal */}
        <MonogramSeal className="w-16 h-16 sm:w-20 sm:h-20 text-[#8C6D34] mb-6" />

        <h3 className="font-serif text-2xl sm:text-3xl text-[#24211E] tracking-tight font-normal">
          Mark <span className="font-script text-3xl text-[#B58F49]">&amp;</span> Rini
        </h3>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#8C7F70] mt-1 mb-8">
          December 19, 2026 · Thiruvalla, Kerala
        </p>

        <div className="h-px w-24 bg-[#E2D6C0] mb-6" />

        <div className="flex items-center gap-1.5 text-xs text-[#9E907E] font-sans">
          <span>With love &amp; gratitude from both families</span>
          <Heart className="w-3.5 h-3.5 text-[#B58F49] fill-[#B58F49]/40" />
        </div>
      </div>
    </footer>
  );
};
