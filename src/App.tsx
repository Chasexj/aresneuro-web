/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const HEADLINE = 'decoding brains';

function Landing() {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(HEADLINE.length);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(i);
      if (i >= HEADLINE.length) window.clearInterval(id);
    }, 120);
    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="terminal-screen min-h-dvh w-full bg-black p-6 md:p-10 text-[#33ff66] font-['VT323',ui-monospace,monospace] text-xl md:text-2xl leading-snug selection:bg-[#33ff66] selection:text-black">
      <h1 aria-label={HEADLINE} className="terminal-glow font-normal whitespace-nowrap">
        <span aria-hidden="true">C:\&gt; {HEADLINE.slice(0, typed)}</span>
        <span aria-hidden="true" className="terminal-cursor">&#9608;</span>
      </h1>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
