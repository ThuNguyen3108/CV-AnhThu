'use client';

export default function CodeBlock() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-code)] overflow-hidden shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--border)] bg-black/20">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-[var(--text-muted)]">login.cy.js</span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm md:text-base font-mono leading-relaxed text-[var(--text)]">
        <code>
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">1</span>
          <span className="text-[#bd93f9]">it</span>
          <span className="text-[var(--text)]">(</span>
          <span className="text-[#a5e364]">&apos;user should be able to log in&apos;</span>
          <span className="text-[var(--text)]">, () =&gt; {'{'}</span>
          {'\n'}
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">2</span>
          <span className="text-[var(--text)]">  cy.</span>
          <span className="text-[#bd93f9]">visit</span>
          <span className="text-[var(--text)]">(</span>
          <span className="text-[#a5e364]">&apos;/login&apos;</span>
          <span className="text-[var(--text)]">)</span>
          {'\n'}
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">3</span>
          {'\n'}
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">4</span>
          <span className="text-[#6272a4] italic">  // fill in the form</span>
          {'\n'}
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">5</span>
          <span className="text-[var(--text)]">  cy.</span>
          <span className="text-[#bd93f9]">get</span>
          <span className="text-[var(--text)]">(</span>
          <span className="text-[#a5e364]">&apos;input[type=&quot;email&quot;]&apos;</span>
          <span className="text-[var(--text)]">).</span>
          <span className="text-[#bd93f9]">type</span>
          <span className="text-[var(--text)]">(</span>
          <span className="text-[#a5e364]">&apos;user@example.com&apos;</span>
          <span className="text-[var(--text)]">)</span>
          {'\n'}
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">6</span>
          <span className="text-[var(--text)]">  cy.</span>
          <span className="text-[#bd93f9]">get</span>
          <span className="text-[var(--text)]">(</span>
          <span className="text-[#a5e364]">&apos;input[type=&quot;password&quot;]&apos;</span>
          <span className="text-[var(--text)]">).</span>
          <span className="text-[#bd93f9]">type</span>
          <span className="text-[var(--text)]">(</span>
          <span className="text-[#a5e364]">&apos;password&apos;</span>
          <span className="text-[var(--text)]">)</span>
          {'\n'}
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">7</span>
          {'\n'}
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">8</span>
          <span className="text-[#6272a4] italic">  // submit and assert</span>
          {'\n'}
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">9</span>
          <span className="text-[var(--text)]">  cy.</span>
          <span className="text-[#bd93f9]">get</span>
          <span className="text-[var(--text)]">(</span>
          <span className="text-[#a5e364]">&apos;button&apos;</span>
          <span className="text-[var(--text)]">).</span>
          <span className="text-[#bd93f9]">contains</span>
          <span className="text-[var(--text)]">(</span>
          <span className="text-[#a5e364]">&apos;Sign in&apos;</span>
          <span className="text-[var(--text)]">).</span>
          <span className="text-[#bd93f9]">click</span>
          <span className="text-[var(--text)]">()</span>
          {'\n'}
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">10</span>
          <span className="text-[var(--text)]">  cy.</span>
          <span className="text-[#bd93f9]">contains</span>
          <span className="text-[var(--text)]">(</span>
          <span className="text-[#a5e364]">&apos;button&apos;</span>
          <span className="text-[var(--text)]">, </span>
          <span className="text-[#a5e364]">&apos;Logout&apos;</span>
          <span className="text-[var(--text)]">).</span>
          <span className="text-[#bd93f9]">should</span>
          <span className="text-[var(--text)]">(</span>
          <span className="text-[#a5e364]">&apos;be.visible&apos;</span>
          <span className="text-[var(--text)]">)</span>
          {'\n'}
          <span className="text-[var(--text-muted)] select-none w-6 inline-block">11</span>
          <span className="text-[var(--text)]">{'})'}</span>
        </code>
      </pre>
    </div>
  );
}
