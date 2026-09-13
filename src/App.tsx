/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import HealthPolicy from './HealthPolicy';
import PrivacyPolicy from './PrivacyPolicy';

function Landing() {
  return (
    <main 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-neutral-300 selection:bg-white/20 selection:text-white"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Top Navigation / Brand */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-4 z-50"
      >
        <img src="/logo.png" alt="Ares Neuro Lab Logo" className="h-8 md:h-10 w-auto object-contain" />
        <img src="/name.png" alt="Ares Neuro Lab Name" className="h-5 md:h-6 w-auto object-contain" />
      </motion.div>


      <div className="relative z-10 max-w-4xl px-4 md:px-8 mx-auto text-center w-full">
        <motion.h1 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="text-base sm:text-lg md:text-2xl lg:text-3xl font-light tracking-wide md:tracking-[0.15em] leading-relaxed md:leading-loose text-white/90"
        >
          We're a BCI lab dedicated to decoding human thoughts within the next decade
          <br className="hidden md:block" />
          through a data-driven approach.
        </motion.h1>
      </div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-8 right-8 z-50 flex flex-col md:flex-row justify-between items-center md:items-end gap-4"
      >
        <span className="text-[10px] md:text-xs text-white/40 tracking-widest uppercase font-medium">
          Copyright © MindFlow 2026
        </span>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link 
            to="/privacy-policy" 
            className="text-[10px] md:text-xs text-white/40 hover:text-white/90 transition-colors tracking-widest uppercase font-medium"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/health-policy" 
            className="text-[10px] md:text-xs text-white/40 hover:text-white/90 transition-colors tracking-widest uppercase font-medium"
          >
            Health Privacy Policy
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/health-policy" element={<HealthPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
