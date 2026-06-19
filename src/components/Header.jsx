import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navItems = [
  {
    id: 'home',
    label: 'Collection',
    fullLabel: 'Accueil Opticien',
    number: '01',
    img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'collections',
    label: 'Collection',
    fullLabel: 'Lookbook & Lunettes',
    number: '02',
    img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'services',
    label: 'Savoir-Faire',
    fullLabel: "L'Art de l'Optique",
    number: '03',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'boutique',
    label: 'La Boutique',
    fullLabel: "L'Atelier Rue d'Avron",
    number: '04',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'contact',
    label: 'Prendre Rendez-vous',
    fullLabel: 'Prendre rendez-vous',
    number: '05',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Header({ currentView, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on view change
  useEffect(() => {
    setMenuOpen(false);
  }, [currentView]);

  const handleNavigate = (id) => {
    setMenuOpen(false);
    onNavigate && onNavigate(id);
  };

  const desktopNavItems = navItems.filter((n) => n.id !== 'home');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/80 backdrop-blur-md border-b border-stone-grey/10 shadow-sm'
            : 'bg-ivory/80 backdrop-blur-md border-b border-stone-grey/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="focus:outline-none"
            aria-label="AlexSEE Accueil"
          >
            <Logo size="sm" showText={true} />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {desktopNavItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`relative font-sans text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-optical-black' : 'text-stone-grey hover:text-optical-black'
                  } ${item.id === 'contact' ? '' : ''}`}
                >
                  {item.id === 'contact' ? (
                    <span className="inline-flex items-center gap-1.5 bg-cobalt text-ivory px-4 py-1.5 rounded-full text-xs font-medium tracking-wider hover:bg-cobalt/90 transition-colors duration-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-ivory/60 inline-block" />
                      {item.label}
                    </span>
                  ) : (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cobalt rounded-full"
                          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                        />
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-[1.5px] bg-optical-black origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-optical-black"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-[1.5px] bg-optical-black origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            className="fixed inset-0 z-[60] bg-optical-black text-ivory flex overflow-hidden"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Hover image panel */}
            <div className="hidden md:block relative w-1/2 overflow-hidden">
              <AnimatePresence mode="wait">
                {hoveredNav && (
                  <motion.img
                    key={hoveredNav.id}
                    src={hoveredNav.img}
                    alt={hoveredNav.fullLabel}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                )}
              </AnimatePresence>
              {!hoveredNav && (
                <div className="absolute inset-0 bg-optical-black/85 flex items-center justify-center">
                  <Logo size="xl" inverse={true} />
                </div>
              )}
            </div>

            {/* Nav list */}
            <div className="relative flex flex-col justify-between p-8 md:p-12 w-full md:w-1/2">
              {/* Close button */}
              <div className="flex justify-between items-center mb-12">
                <Logo size="sm" inverse={true} />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-stone-grey hover:text-ivory transition-colors duration-200 font-mono text-xs tracking-widest"
                >
                  [ Fermer ]
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 flex flex-col justify-center gap-2">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    onMouseEnter={() => setHoveredNav(item)}
                    onMouseLeave={() => setHoveredNav(null)}
                    className={`group flex items-baseline gap-4 text-left py-3 border-b border-white/10 hover:border-cobalt/30 transition-all duration-200 ${
                      currentView === item.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: currentView === item.id ? 1 : 0.6, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <span className="font-mono text-[10px] text-cobalt tracking-[0.3em] w-6 shrink-0">
                      {item.number}
                    </span>
                    <div className="flex flex-col">
                      <span
                        className={`font-display text-2xl md:text-3xl italic transition-colors duration-200 ${
                          currentView === item.id ? 'text-ivory' : 'group-hover:text-ivory text-ivory/60'
                        }`}
                      >
                        {item.fullLabel}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.25em] text-stone-grey uppercase mt-0.5">
                        {item.label}
                      </span>
                    </div>
                    {currentView === item.id && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cobalt" />
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Footer info */}
              <div className="mt-8">
                <p className="font-mono text-[9px] tracking-[0.25em] text-stone-grey/50 uppercase">
                  28 Rue d'Avron · Paris 20e · +33 (0)1 43 73 12 12
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
