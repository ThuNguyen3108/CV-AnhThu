'use client';

export default function AnimatedBackground() {
  return (
    <>
      <div
        className="bg-shape w-[600px] h-[600px] -top-40 -right-40 animate-float bg-[var(--accent)]/20"
        aria-hidden
      />
      <div
        className="bg-shape w-[500px] h-[500px] top-1/2 -left-32 animate-float-slow bg-[var(--accent-cyan)]/10"
        aria-hidden
      />
      <div
        className="bg-shape w-[400px] h-[400px] bottom-20 right-1/4 animate-pulse-slow bg-[var(--accent)]/10"
        aria-hidden
      />
      {/* Subtle grid */}
      <div
        className="fixed inset-0 z-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />
    </>
  );
}
