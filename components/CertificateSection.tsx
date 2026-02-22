'use client';

import { FiAward, FiGlobe } from 'react-icons/fi';
import { cv } from '@/data/cv';

export default function CertificateSection() {
  return (
    <section id="certificate" className="py-16 md:py-20 border-t border-[var(--border)]">
      <span className="block text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
        Credentials
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-10">
        Certification & Language
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--bg-card)] p-8 flex items-center gap-6 shadow-lg hover:border-[var(--accent)]/50 transition-colors">
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[var(--accent-soft)] border-2 border-[var(--accent)]/30 flex items-center justify-center">
            <FiAward className="w-8 h-8 text-[var(--accent)]" />
          </div>
          <div>
            <p className="text-sm font-mono font-bold text-[var(--accent)] uppercase tracking-wider mb-1">
              Certificate
            </p>
            <p className="text-xl font-bold text-[var(--text)]">{cv.certificate.name}</p>
            <p className="text-[var(--text-muted)] mt-1">
              {cv.certificate.issuer} · {cv.certificate.date}
            </p>
          </div>
        </div>
        <div className="rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--bg-card)] p-8 flex items-center gap-6 shadow-lg hover:border-[var(--accent)]/50 transition-colors">
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[var(--accent-soft)] border-2 border-[var(--accent)]/30 flex items-center justify-center">
            <FiGlobe className="w-8 h-8 text-[var(--accent)]" />
          </div>
          <div>
            <p className="text-sm font-mono font-bold text-[var(--accent)] uppercase tracking-wider mb-1">
              Foreign Language
            </p>
            <p className="text-xl font-bold text-[var(--text)]">{cv.language}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
