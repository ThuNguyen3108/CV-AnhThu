'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const mainLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const aboutLinks = [
  { href: '#about', label: 'About Me' },
  { href: '#education', label: 'Education' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-xl">
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-6">
        <Link
          href="#"
          className="font-mono font-bold text-xl text-[var(--accent)] tracking-wide flex-shrink-0"
        >
          AT
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((o) => !o)}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] flex items-center gap-1 py-2"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              About
              <span
                className={`inline-block transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                style={{ marginLeft: 2 }}
              >
                ▼
              </span>
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-1 min-w-[160px] py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] shadow-xl z-50">
                {aboutLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block px-4 py-2 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text)] rounded"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {mainLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/My_CV.pdf"
            download="My_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            Download CV
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--accent)] text-[var(--bg)] border-2 border-[var(--accent)] hover:opacity-90 transition-opacity"
          >
            Get in touch
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 flex flex-col gap-1.5"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <span className="w-5 h-0.5 bg-[var(--text)] rounded" />
            <span className="w-5 h-0.5 bg-[var(--text)] rounded" />
            <span className="w-5 h-0.5 bg-[var(--text)] rounded" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 border-b border-[var(--border)] bg-[var(--bg-elevated)] p-4 flex flex-col gap-2">
          <Link href="#about" className="font-medium text-[var(--text-muted)] hover:text-[var(--text)]" onClick={() => setOpen(false)}>
            About Me
          </Link>
          <Link href="#education" className="font-medium text-[var(--text-muted)] hover:text-[var(--text)]" onClick={() => setOpen(false)}>
            Education
          </Link>
          {mainLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link href="/My_CV.pdf" download="My_CV.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--text-muted)]" onClick={() => setOpen(false)}>Download CV</Link>
            <Link href="#contact" className="inline-flex justify-center py-2 rounded-lg font-semibold bg-[var(--accent)] text-[var(--bg)]" onClick={() => setOpen(false)}>Get in touch</Link>
          </div>
        </div>
      )}
    </header>
  );
}
