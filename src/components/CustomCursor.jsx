import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 450, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  useEffect(() => {
    // Detect touch devices
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    if (mediaQuery.matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handlePointerOver = (e) => {
      const target = e.target.closest('[data-cursor-label]');
      if (target) {
        setLabel(target.getAttribute('data-cursor-label') || '');
        setIsHovering(true);
      }
    };

    const handlePointerOut = (e) => {
      const target = e.target.closest('[data-cursor-label]');
      if (target) {
        setLabel('');
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
    };
  }, [isVisible, rawX, rawY]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cobalt/40 flex items-center justify-center"
      style={{
        x,
        y,
        width: isHovering ? 72 : 32,
        height: isHovering ? 72 : 32,
        opacity: isVisible ? 1 : 0,
        transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1), height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
        backgroundColor: isHovering ? 'rgba(46,91,255,0.06)' : 'transparent',
        backdropFilter: isHovering ? 'blur(1px)' : 'none',
      }}
    >
      {/* Inner cobalt dot */}
      <motion.div
        className="rounded-full bg-cobalt"
        style={{
          width: isHovering ? 4 : 4,
          height: isHovering ? 4 : 4,
          opacity: isHovering ? 0.4 : 1,
          transition: 'all 0.3s ease',
        }}
      />
      {/* Label */}
      {isHovering && label && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute text-[8px] font-mono tracking-[0.2em] text-cobalt uppercase text-center leading-tight"
          style={{ maxWidth: 60, pointerEvents: 'none' }}
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );
}
