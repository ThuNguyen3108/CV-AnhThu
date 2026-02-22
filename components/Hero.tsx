'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { cv } from '@/data/cv';

const AVATAR_FALLBACK = 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnhThu&backgroundColor=42d19d';

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);
  const avatarSrc = avatarError ? AVATAR_FALLBACK : '/avatar.png';

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-16">
        <div className="flex-shrink-0 mx-auto md:mx-0 order-2 md:order-1">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-[var(--accent)] shadow-xl ring-4 ring-[var(--accent-soft)] bg-[var(--bg-card)]">
            <Image
              src={avatarSrc}
              alt={cv.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 224px, 256px"
              priority
              onError={() => setAvatarError(true)}
              unoptimized={avatarError}
            />
          </div>
        </div>
        <div className="order-1 md:order-2 flex-1 min-w-0">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight text-[var(--text)] mb-4 max-w-[14ch]">
            QA & Test Automation
            <br />
            for modern teams
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-[52ch] mb-10">
            Create tests, debug failures, and improve quality faster. Nearly 3 years of experience in manual and automation testing across web and mobile, with strong hands-on in API testing, BDD automation, and Cypress.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            <Link href="#about" className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border)] hover:text-[var(--text)] hover:border-[var(--text-muted)] hover:bg-[var(--bg-elevated)] transition-colors">
              About
            </Link>
            <Link href="#experience" className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border)] hover:text-[var(--text)] hover:border-[var(--text-muted)] hover:bg-[var(--bg-elevated)] transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border)] hover:text-[var(--text)] hover:border-[var(--text-muted)] hover:bg-[var(--bg-elevated)] transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border)] hover:text-[var(--text)] hover:border-[var(--text-muted)] hover:bg-[var(--bg-elevated)] transition-colors">
              Contact
            </Link>
          </div>
          <p className="text-sm font-medium text-[var(--text-muted)]">
            {cv.name} · QA Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
