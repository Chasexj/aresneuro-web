/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const HEADLINE = 'DECODING BRAINS';

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
    <main className="min-h-screen w-full flex items-center justify-center bg-black text-white px-4 selection:bg-white/20">
      <h1
        aria-label={HEADLINE}
        className="font-['IBM_Plex_Mono',ui-monospace,monospace] font-medium whitespace-nowrap w-[16ch] text-left text-[min(9vw,7rem)] tracking-tight"
      >
        <span aria-hidden="true">{HEADLINE.slice(0, typed)}</span>
        <span aria-hidden="true" className="typewriter-cursor">_</span>
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
