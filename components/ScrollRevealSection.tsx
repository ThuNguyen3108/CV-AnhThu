'use client';

import Image from 'next/image';
import { useState, useRef, useCallback, useEffect } from 'react';
import { cv } from '@/data/cv';

const AVATAR_FALLBACK = 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnhThu&backgroundColor=42d19d';

const revealItems = [
  { label: 'Role', value: cv.title },
  { label: 'Focus', value: 'Manual & automation testing · Web & mobile · API & BDD' },
  { label: 'Experience', value: 'Nearly 3 years in QA across 4+ companies and projects' },
  { label: 'Certification', value: `${cv.certificate.name} (${cv.certificate.issuer}, ${cv.certificate.date})` },
  { label: 'Location', value: cv.location },
];

export default function ScrollRevealSection() {
  const [revealPercent, setRevealPercent] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const leftImgSrc = avatarError ? AVATAR_FALLBACK : '/avatar.jpg';

  const updatePercent = useCallback(
    (clientY: number) => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const y = clientY - rect.top;
      const p = Math.max(0, Math.min(100, (y / rect.height) * 100));
      setRevealPercent(p);
    },
    []
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePercent(e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) updatePercent(e.touches[0].clientY);
  };

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => updatePercent(e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) updatePercent(e.touches[0].clientY);
    };
    const onEnd = () => setIsDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging, updatePercent]);

  const itemHeight = 100 / revealItems.length;
  const revealedCount = Math.floor((revealPercent / 100) * revealItems.length);

  return (
    <section className="py-16 md:py-20 border-t border-[var(--border)]" id="scroll-reveal">
      <span className="block text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
        About
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-10">
        Kéo thanh bên dưới để khám phá
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-8 lg:gap-10 items-stretch min-h-[420px]">
        {/* Left: image */}
        <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] aspect-square max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:aspect-auto lg:min-h-[380px]">
          <Image
            src={leftImgSrc}
            alt={cv.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 320px, 400px"
            onError={() => setAvatarError(true)}
            unoptimized={avatarError}
          />
        </div>

        {/* Middle: draggable bar with avatar */}
        <div className="flex flex-col items-center gap-4 py-4">
          <div
            ref={trackRef}
            className="relative w-12 flex-1 min-h-[280px] rounded-full bg-[var(--border)] cursor-ns-resize flex justify-center"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-4 border-[var(--bg-card)] shadow-lg bg-[var(--accent)] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing transition-transform hover:scale-105 pointer-events-none"
              style={{ top: `${revealPercent}%`, transform: 'translate(-50%, -50%)' }}
            >
              <img
                src={leftImgSrc}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)]">Kéo lên / xuống</p>
        </div>

        {/* Right: description - revealed by bar position */}
        <div className="flex flex-col justify-stretch rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8 overflow-hidden">
          {revealItems.map((item, i) => {
            const isRevealed = i < revealedCount;
            return (
              <div
                key={item.label}
                className="flex flex-col gap-1 py-3 border-b border-[var(--border)] last:border-0 min-h-[72px] justify-center"
              >
                <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                  {item.label}
                </span>
                {isRevealed ? (
                  <span className="text-[var(--text)]">{item.value}</span>
                ) : (
                  <span className="text-[var(--text-muted)] select-none">— — —</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
