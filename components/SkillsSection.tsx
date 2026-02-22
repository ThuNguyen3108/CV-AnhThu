'use client';

import {
  FiCode,
  FiServer,
  FiZap,
  FiCheckCircle,
  FiLayers,
  FiTrendingUp,
  FiMessageCircle,
  FiClock,
  FiAward,
} from 'react-icons/fi';
import { SiJavascript, SiCypress, SiSelenium } from 'react-icons/si';
import { cv } from '@/data/cv';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bdd: FiLayers,
  api: FiServer,
  automation: FiZap,
  test: FiCheckCircle,
  techniques: FiTrendingUp,
  js: SiJavascript,
  cypress: SiCypress,
  karate: FiCode,
  selenium: SiSelenium,
  learn: FiTrendingUp,
  comm: FiMessageCircle,
  time: FiClock,
  owner: FiAward,
};

function SkillCard({
  name,
  years,
  icon,
}: {
  name: string;
  years?: string;
  icon: string;
}) {
  const IconComponent = iconMap[icon] || FiCode;

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)]/20 transition-all duration-200">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent)]/20 flex items-center justify-center">
        <IconComponent className="w-6 h-6 text-[var(--accent)]" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-[var(--text)]">{name}</p>
        {years && <p className="text-sm text-[var(--text-muted)]">{years}</p>}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20 border-t border-[var(--border)]">
      <h2 className="font-mono text-2xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {cv.skills.core.map((s) => (
          <SkillCard key={s.name} name={s.name} years={s.years} icon={s.icon} />
        ))}
      </div>

      <h3 className="font-mono text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">
        Tech & Tools
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {cv.skills.tech.map((s) => (
          <SkillCard key={s.name} name={s.name} years={s.years} icon={s.icon} />
        ))}
      </div>

      <h3 className="font-mono text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">
        Soft Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {cv.skills.soft.map((s) => (
          <SkillCard key={s.name} name={s.name} icon={s.icon} />
        ))}
      </div>

    </section>
  );
}
