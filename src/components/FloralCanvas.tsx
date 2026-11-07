import React, { useEffect, useRef, useState } from 'react';
import { Flower2, EyeOff } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  opacity: number;
  colorType: number; // 0: soft crimson, 1: blush rose, 2: champagne gold, 3: ivory white
  flipSpeed: number;
  flip: number;
}

export const FloralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(true);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color palettes matching Kerala red lehenga, champagne beige suit & gold accents
    const petalColors = [
      'rgba(196, 50, 72, ',    // Deep romantic crimson (bride's lehenga)
      'rgba(235, 148, 160, ',  // Soft blush rose
      'rgba(212, 175, 105, ',  // Golden leaf/dust
      'rgba(255, 245, 238, ',  // Soft ivory jasmine
    ];

    const petalCount = window.innerWidth < 768 ? 20 : 36;
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.7 + 0.35,
        speedX: Math.random() * 0.5 - 0.25,
        angle: Math.random() * 360,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.45 + 0.2,
        colorType: Math.floor(Math.random() * petalColors.length),
        flipSpeed: Math.random() * 0.02 + 0.01,
        flip: Math.random() * Math.PI,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.005) * 0.5 + p.speedX;
        p.angle += p.angularSpeed;
        p.flip += p.flipSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.scale(1, Math.cos(p.flip));

        // Draw organic petal curve
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size / 2, -p.size, -p.size, -p.size * 1.5, 0, -p.size * 2);
        ctx.bezierCurveTo(p.size, -p.size * 1.5, p.size / 2, -p.size, 0, 0);

        ctx.fillStyle = `${petalColors[p.colorType]}${p.opacity})`;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isActive]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-10 transition-opacity duration-1000 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Subtle accessibility / aesthetic toggle for falling petals */}
      <button
        onClick={() => setIsActive(!isActive)}
        title={isActive ? 'Pause floating petals' : 'Enable floating petals'}
        aria-label={isActive ? 'Pause floating petals' : 'Enable floating petals'}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E4D8C5] shadow-xs text-xs font-sans text-[#786C5E] hover:text-[#382C1E] transition-all hover:bg-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B58F49]"
      >
        {isActive ? (
          <>
            <Flower2 className="w-3.5 h-3.5 text-[#B58F49] animate-spin" style={{ animationDuration: '12s' }} />
            <span className="hidden sm:inline">Petals On</span>
          </>
        ) : (
          <>
            <EyeOff className="w-3.5 h-3.5 text-[#A39686]" />
            <span className="hidden sm:inline">Petals Off</span>
          </>
        )}
      </button>
    </>
  );
};
