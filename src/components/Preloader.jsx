import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setReducedMotion(true);
      setVisible(false);
      onComplete && onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onComplete && onComplete();
      }, 600);
    }, 2100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setVisible(false);
    setTimeout(() => {
      onComplete && onComplete();
    }, 600);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] bg-optical-black text-ivory flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute top-8 right-8 font-mono text-[10px] tracking-[0.25em] text-stone-grey hover:text-ivory transition-colors duration-300 z-10"
          >
            [ Passer l'introduction / Skip ]
          </button>

          {/* Animated lens circle */}
          <motion.div
            className="absolute rounded-full border border-cobalt/40 mix-blend-screen pointer-events-none"
            style={{ width: 480, height: 480 }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          />

          {/* Second decorative ring */}
          <motion.div
            className="absolute rounded-full border border-cobalt/20 pointer-events-none"
            style={{ width: 600, height: 600 }}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.07 }}
            transition={{ duration: 1.8, delay: 0.2, ease: 'easeOut' }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mb-8"
          >
            <Logo size="lg" inverse={true} showText={true} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="font-mono tracking-[0.25em] text-stone-grey text-[10px] uppercase text-center mb-10"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
          >
            Le regard comme expression personnelle — Paris XX
          </motion.p>

          {/* Cobalt dot + label */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt inline-block" />
            <span className="font-mono text-[9px] tracking-[0.3em] text-stone-grey uppercase">
              Opticien Créateur Paris 20
            </span>
          </motion.div>

          {/* Loading bar */}
          <div className="absolute bottom-12 flex flex-col items-center gap-2">
            <div
              className="relative overflow-hidden"
              style={{ width: 128, height: 1, backgroundColor: 'rgba(142,142,142,0.2)' }}
            >
              <motion.div
                className="absolute top-0 left-0 h-full bg-cobalt"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, delay: 0.2, ease: 'easeInOut' }}
              />
            </div>
            <span className="font-mono text-[8px] tracking-[0.3em] text-stone-grey/40 uppercase">
              Chargement
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
