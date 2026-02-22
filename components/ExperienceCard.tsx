'use client';

import { useState } from 'react';

type Props = {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  domain?: string;
  logo: string;
  points: string[];
  tags: string[];
};

export default function ExperienceCard({
  company,
  role,
  period,
  location,
  project,
  domain,
  logo,
  points,
  tags,
}: Props) {
  const [logoError, setLogoError] = useState(false);
  const initial = company.charAt(0);

  return (
    <article className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8 pl-8 md:pl-10 transition-all duration-200 hover:border-[var(--accent)]/20">
      <div className="absolute left-4 md:left-6 top-8 w-2.5 h-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg-card)]" aria-hidden />
      <div className="flex gap-4 md:gap-6">
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center overflow-hidden p-1">
          {!logoError ? (
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-full h-full object-contain"
              onError={() => setLogoError(true)}
              loading="lazy"
            />
          ) : (
            <span className="font-mono font-bold text-2xl text-[var(--accent)]">{initial}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-mono font-bold text-[var(--accent)] uppercase tracking-wider text-sm md:text-base mb-0.5">
            {company}
          </h3>
          <p className="font-semibold text-[var(--text)] mb-1">{role}</p>
          <p className="text-sm text-[var(--text-muted)] mb-3">
            {period} · {location}
          </p>
          <p className="text-[var(--text)] font-medium mb-0.5">{project}</p>
          {domain && (
            <p className="text-sm text-[var(--text-muted)] mb-4">{domain}</p>
          )}
          <ul className="space-y-1.5 mb-5 pl-4 list-disc list-inside text-sm text-[var(--text-muted)]">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 font-mono text-xs rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
