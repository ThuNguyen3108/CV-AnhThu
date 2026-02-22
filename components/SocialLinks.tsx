'use client';

import Link from 'next/link';
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { cv } from '@/data/cv';

const items = [
  { href: cv.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
  { href: `mailto:${cv.email}`, icon: FaEnvelope, label: 'Email' },
  { href: `tel:${cv.phone}`, icon: FaPhoneAlt, label: 'Phone' },
  {
    href: 'https://maps.google.com/?q=TP+Ho+Chi+Minh',
    icon: FaMapMarkerAlt,
    label: 'Location',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      {items.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)]/30 transition-all duration-200"
          aria-label={label}
        >
          <Icon className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
          <span className="text-sm font-medium text-[var(--text)]">
            {label === 'Location' ? cv.location : label === 'Phone' ? cv.phone : label === 'Email' ? 'Email' : 'LinkedIn'}
          </span>
        </Link>
      ))}
    </div>
  );
}
