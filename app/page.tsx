import Hero from '@/components/Hero';
import SocialLinks from '@/components/SocialLinks';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsSection from '@/components/SkillsSection';
import CodeBlock from '@/components/CodeBlock';
import CertificateSection from '@/components/CertificateSection';
import { cv } from '@/data/cv';
import Link from 'next/link';

const features = [
  {
    title: 'Test modern apps in the browser',
    desc: 'Manual and automated E2E testing for web and mobile. Functional, regression, and smoke testing with clear test cases and acceptance criteria.',
    href: '#experience',
  },
  {
    title: 'Automation with Cypress & BDD',
    desc: 'Build and maintain automation with Cypress, Karate BDD, Selenium & Cucumber. Improve coverage and support scalable validation.',
    href: '#skills',
  },
  {
    title: 'API testing & integration',
    desc: 'REST API testing with Postman and Karate. Validate request/response, error handling, and service integration across environments.',
    href: '#experience',
  },
  {
    title: 'Collaborate across teams',
    desc: 'Work with PO, BA, developers and cross-region teams. Requirement clarification, defect tracking in JIRA, release readiness.',
    href: '#contact',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />


        {/* Introducing - 4 feature cards (Cypress style) */}
        <section id="about" className="py-16 md:py-20 border-t border-[var(--border)]">
          <span className="block text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
            Introducing
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-10">
            Write, run, and deliver quality like a pro
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8 transition-all hover:border-[var(--accent)]/30 hover:shadow-xl"
              >
                <h3 className="text-lg font-bold text-[var(--text)] mb-2">{f.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed mb-5">{f.desc}</p>
                <Link
                  href={f.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-cyan)] hover:text-[var(--accent)]"
                >
                  Learn more <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Code block */}
        <section className="py-12 md:py-16 border-t border-[var(--border)]">
          <CodeBlock />
          <p className="text-center text-sm text-[var(--text-muted)] mt-3">
            Cypress E2E test example — the kind of automation I work with daily.
          </p>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-16 border-t border-[var(--border)]">
          <h2 className="text-2xl font-bold text-[var(--text)] text-center mb-10">
            Focused on quality & growth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center hover:border-[var(--accent)]/30 transition-colors">
              <span className="block text-3xl font-bold text-[var(--accent)] mb-1">~3</span>
              <span className="text-sm text-[var(--text-muted)]">years in QA</span>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center hover:border-[var(--accent)]/30 transition-colors">
              <span className="block text-3xl font-bold text-[var(--accent)] mb-1">4</span>
              <span className="text-sm text-[var(--text-muted)]">companies & projects</span>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center hover:border-[var(--accent)]/30 transition-colors">
              <span className="block text-3xl font-bold text-[var(--accent)] mb-1">ISTQB</span>
              <span className="text-sm text-[var(--text-muted)]">Foundation certified</span>
            </div>
          </div>
        </section>

        <CertificateSection />

        {/* About Me — Cypress-style: mint background + layered waves */}
        <section id="about" className="about-hero border-t border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="about-title">About Me</h2>
            <p className="about-lead">{cv.summary}</p>
          </div>
          <div className="about-waves" aria-hidden>
            <svg viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 80 Q360 20 720 80 T1440 80 L1440 140 L0 140 Z" fill="var(--about-wave1)" />
              <path d="M0 100 Q360 50 720 100 T1440 100 L1440 140 L0 140 Z" fill="var(--about-wave2)" />
              <path d="M0 120 Q360 80 720 120 T1440 120 L1440 140 L0 140 Z" fill="var(--about-wave3)" />
            </svg>
          </div>
        </section>

        <section id="education" className="py-16 md:py-20 border-t border-[var(--border)]">
          <h2 className="font-mono text-2xl font-bold mb-6">Education</h2>
          <article className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8">
            <h3 className="font-mono font-bold text-[var(--accent)] uppercase tracking-wider mb-1">
              {cv.education.school}
            </h3>
            <p className="font-semibold text-[var(--text)] mb-1">{cv.education.degree}</p>
            <p className="text-sm text-[var(--text-muted)]">
              GPA: {cv.education.gpa} · {cv.education.period}
            </p>
          </article>
        </section>

        <ExperienceTimeline />

        <SkillsSection />

        <section id="contact" className="py-16 md:py-20 border-t border-[var(--border)]">
          <h2 className="font-mono text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-[var(--text-muted)] mb-8">
            Hey there! Feel free to reach out — I&apos;d love to hear from you.
          </p>
          <SocialLinks />
        </section>
      </div>

      <footer className="border-t border-[var(--border)] py-8 text-center">
        <p className="text-sm text-[var(--text-muted)]">
          © 2026 {cv.name} · QA Engineer Portfolio · Inspired by{' '}
          <a
            href="https://www.cypress.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-cyan)] hover:text-[var(--accent)]"
          >
            Cypress
          </a>
        </p>
      </footer>
    </main>
  );
}
