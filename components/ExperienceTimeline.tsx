'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { cv } from '@/data/cv';

type Job = (typeof cv.experience)[number];

function getJoinDate(period: string): string {
  return period.split(/\s*[-–]\s*/)[0]?.trim() ?? period;
}

function TimelineItem({
  job,
  isActive,
  joinDate,
}: {
  job: Job;
  isActive: boolean;
  joinDate: string;
}) {
  const [logoError, setLogoError] = useState(false);
  const initial = job.company.charAt(0);
  const domain = 'domain' in job ? job.domain : undefined;

  return (
    <article
      data-timeline-item
      className="relative pl-16 md:pl-24 pb-14 last:pb-0"
    >
      {/* Marker dot on the line */}
      <div
        className="absolute left-[11px] md:left-[15px] top-[6px] w-4 h-4 rounded-full border-[3px] z-[2] transition-all duration-300"
        style={{
          background: 'var(--bg-card)',
          borderColor: isActive ? 'var(--accent)' : 'var(--border)',
          boxShadow: isActive
            ? '0 0 0 3px var(--bg-card), 0 0 0 5px var(--accent)'
            : 'none',
        }}
      />

      {/* Join date label - positioned to the right of the dot, above the card */}
      <span
        className="block mb-2 text-xs font-mono font-bold tabular-nums tracking-wider transition-colors duration-300"
        style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}
      >
        {joinDate}
      </span>

      {/* Card */}
      <div
        className="rounded-xl p-6 md:p-8 transition-all duration-300"
        style={{
          background: 'var(--bg-card)',
          border: isActive
            ? '1px solid rgba(66,209,157,0.35)'
            : '1px solid var(--border)',
        }}
      >
        {/* Header: logo + company info */}
        <div className="flex gap-4 md:gap-5 mb-4">
          <div
            className="w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 transition-all duration-300"
            style={{
              background: 'var(--bg-elevated)',
              border: isActive
                ? '1px solid rgba(66,209,157,0.35)'
                : '1px solid var(--border)',
              opacity: isActive ? 1 : 0.7,
            }}
          >
            {!logoError ? (
              <img
                src={job.logo}
                alt=""
                className="w-full h-full object-contain"
                onError={() => setLogoError(true)}
                loading="lazy"
              />
            ) : (
              <span className="font-mono font-bold text-xl" style={{ color: 'var(--accent)' }}>
                {initial}
              </span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3
              className="font-mono font-bold uppercase tracking-wider text-sm md:text-base mb-0.5 transition-colors duration-300"
              style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}
            >
              {job.company}
            </h3>
            <p
              className="font-semibold mb-1 transition-colors duration-300"
              style={{ color: isActive ? 'var(--text)' : 'var(--text-muted)' }}
            >
              {job.role}
            </p>
            <p
              className="text-sm transition-colors duration-300"
              style={{ color: isActive ? 'var(--text-muted)' : 'rgba(160,174,192,0.6)' }}
            >
              {job.period} · {job.location}
            </p>
          </div>
        </div>

        <p
          className="font-medium mb-0.5 transition-colors duration-300"
          style={{ color: isActive ? 'var(--text)' : 'var(--text-muted)' }}
        >
          {job.project}
        </p>
        {domain && (
          <p
            className="text-sm mb-4 transition-colors duration-300"
            style={{ color: isActive ? 'var(--text-muted)' : 'rgba(160,174,192,0.6)' }}
          >
            {domain}
          </p>
        )}
        <ul
          className="space-y-1.5 mb-5 pl-4 list-disc list-inside text-sm transition-colors duration-300"
          style={{ color: isActive ? 'var(--text)' : 'var(--text-muted)' }}
        >
          {job.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 font-mono text-xs rounded-lg transition-colors duration-300"
              style={{
                background: isActive ? 'rgba(66,209,157,0.12)' : 'rgba(66,209,157,0.05)',
                color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                border: isActive
                  ? '1px solid rgba(66,209,157,0.25)'
                  : '1px solid rgba(66,209,157,0.1)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineFilledRef = useRef<HTMLDivElement>(null);
  const [filledHeight, setFilledHeight] = useState(0);
  const [activeIndexes, setActiveIndexes] = useState<Set<number>>(new Set());

  const update = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    const filled = (scrollY - sectionTop + vh) / (sectionHeight + vh);
    setFilledHeight(Math.min(1, Math.max(0, filled)) * 100);

    const items = section.querySelectorAll('[data-timeline-item]');
    const newActive = new Set<number>();
    const threshold = vh * 0.85;
    items.forEach((el, i) => {
      if (el.getBoundingClientRect().top < threshold) newActive.add(i);
    });
    setActiveIndexes(newActive);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 md:py-20 border-t border-[var(--border)]"
    >
      <h2 className="font-mono text-2xl font-bold mb-10">Experience</h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-[2px] pointer-events-none"
          aria-hidden
        >
          {/* Dashed background (chưa scroll) */}
          <div
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(
                to bottom,
                rgba(148,163,184,0.7) 0px,
                rgba(148,163,184,0.7) 5px,
                transparent 5px,
                transparent 12px
              )`,
            }}
          />
          {/* Solid filled (đã scroll qua) */}
          <div
            ref={lineFilledRef}
            className="absolute left-0 top-0 w-full transition-[height] duration-100 ease-out"
            style={{
              height: `${filledHeight}%`,
              background: 'var(--accent)',
            }}
          />
        </div>

        {/* Timeline items */}
        {cv.experience.map((job, index) => (
          <TimelineItem
            key={job.company}
            job={job}
            isActive={activeIndexes.has(index)}
            joinDate={getJoinDate(job.period)}
          />
        ))}
      </div>
    </section>
  );
}
