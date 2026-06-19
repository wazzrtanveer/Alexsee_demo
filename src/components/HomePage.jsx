import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import { frames as fallbackFrames, settings as fallbackSettings } from '../data/mockData.js';

export default function HomePage({ onNavigate, onSelectFrame, frames = fallbackFrames, settings = fallbackSettings }) {
  const featuredFrames = frames.filter(f => f.isFeatured);
  const [lensPos, setLensPos] = useState({ x: 75, y: 65 });
  const [lensActive, setLensActive] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const update = () => {
      if (heroRef.current) {
        setImgSize({ width: heroRef.current.offsetWidth, height: heroRef.current.offsetHeight });
      }
    };
    update();
    const t = setTimeout(update, 100);
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('resize', update); clearTimeout(t); };
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setLensPos({ x: (e.clientX - rect.left) / rect.width * 100, y: (e.clientY - rect.top) / rect.height * 100 });
    setLensActive(true);
  };

  const heroImageUrl = "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80";

  return (
    <div id="homepage-container" className="pt-24 bg-ivory text-optical-black overflow-x-hidden relative">
      {/* Decorative blurs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#2E5BFF] rounded-full blur-[180px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-50px] w-[300px] h-[300px] bg-stone-grey rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

      {/* ── Hero ── */}
      <section id="hero-section" className="relative min-h-[90vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-12 overflow-hidden border-b border-stone-grey/10">
        <div className="absolute top-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full bg-cobalt/5 blur-[120px] pointer-events-none" />
        <div className="absolute inset-y-0 left-1/3 w-[1px] bg-stone-light/40 pointer-events-none hidden lg:block" />
        <div className="absolute inset-y-0 left-2/3 w-[1px] bg-stone-light/40 pointer-events-none hidden lg:block" />

        {/* Vertical label */}
        <div className="absolute left-6 lg:left-10 bottom-32 text-[10px] tracking-[0.3em] uppercase text-stone-grey hidden md:block select-none font-mono" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
          Opticien Créateur — Paris 20e
        </div>

        {/* Desktop two-column layout */}
        <div className="hidden lg:flex flex-row justify-between items-stretch gap-16 relative z-10 w-full pt-12">
          {/* Left column */}
          <div className="w-[52%] flex flex-col justify-between pr-4">
            <div>
              <div className="mb-6 inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-cobalt rounded-full animate-pulse" />
                <p className="font-mono text-[10px] tracking-widest text-cobalt uppercase font-bold">Boutique indépendante de créateurs</p>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[64px] lg:text-[100px] xl:text-[112px] font-normal leading-[0.85] tracking-tight text-optical-black mb-10">
                Voir
                <br />
                <span className="italic ml-16 text-cobalt block">autrement.</span>
              </h1>
              <p className="font-sans text-optical-black/90 text-lg xl:text-xl font-light mb-10 max-w-xl leading-relaxed">
                Montures de caractère, conseils personnalisés et savoir-faire optique au cœur du 20ème arrondissement. Une signature visuelle authentique.
              </p>
              <div className="flex flex-wrap gap-4">
                <button id="hero-cta-collection" onClick={() => onNavigate('collections')} data-cursor-label="EXPLORER" className="group flex items-center gap-3 bg-optical-black text-ivory hover:bg-cobalt px-8 py-4 transition-all duration-300 tracking-widest font-mono text-xs uppercase">
                  <span>Découvrir la sélection</span>
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button id="hero-cta-contact" onClick={() => onNavigate('contact')} className="group flex items-center gap-2 border border-optical-black/30 hover:border-cobalt px-8 py-4 text-optical-black hover:text-cobalt bg-transparent transition-all duration-300 font-mono text-xs uppercase tracking-widest">
                  <span>Prendre rendez-vous</span>
                  <span className="font-mono font-bold text-cobalt text-[9px] select-none">●</span>
                </button>
              </div>
            </div>
            <div className="mt-14 pt-8 border-t border-stone-grey/25 flex flex-col gap-4 font-mono text-[10px] uppercase tracking-wider text-stone-grey">
              <div className="flex items-center gap-8">
                <a href={`tel:${settings.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-cobalt group transition-colors">
                  <Phone size={11} className="text-cobalt animate-pulse" />
                  <span>Téléphone : <strong className="text-optical-black font-medium group-hover:underline">{settings.phone}</strong></span>
                </a>
                <a href="https://maps.google.com/?q=28+Rue+d'Avron,+75020+Paris" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cobalt group transition-colors">
                  <MapPin size={11} className="text-cobalt" />
                  <span>Itinéraire : <strong className="text-optical-black font-medium group-hover:underline">{settings.address}, Paris 20e</strong></span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={11} className="text-cobalt" />
                <span>Horaires d'ouverture : <strong className="text-optical-black font-medium">9h30 - 13h00, 14h00 - 19h30 (Mar-Sam)</strong></span>
              </div>
            </div>
          </div>

          {/* Right column — interactive lens */}
          <div className="w-[44%] flex flex-col gap-6 justify-between relative pl-4">
            <div ref={heroRef} onMouseMove={handleMouseMove} onMouseLeave={() => setLensActive(false)} className="relative w-full aspect-[4/5] bg-[#EAE5DF] overflow-hidden border border-stone-grey/15 shadow-sm group cursor-crosshair select-none">
              <motion.img initial={{ scale: 1.03, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
                src={heroImageUrl} alt="Portrait éditorial AlexSEE" referrerPolicy="no-referrer" className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-[1.2s] ease-out group-hover:scale-[1.01]" />
              <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-ivory to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 border border-double border-white/10 m-3 pointer-events-none z-10" />

              {/* Magnifier lens */}
              <div className="absolute w-32 h-32 md:w-36 md:h-36 rounded-full border border-cobalt/40 overflow-hidden shadow-2xl bg-[#EAE5DF] backdrop-blur-[1px] pointer-events-none z-20"
                style={{
                  left: lensActive ? `${lensPos.x}%` : '75%',
                  top: lensActive ? `${lensPos.y}%` : '65%',
                  transform: 'translate(-50%, -50%)',
                  transition: lensActive ? 'none' : 'left 0.8s cubic-bezier(0.16,1,0.3,1), top 0.8s cubic-bezier(0.16,1,0.3,1)'
                }}>
                <div className="absolute inset-0 bg-cobalt/[0.03] z-10" />
                <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-cobalt/20 -translate-y-1/2 z-10" />
                <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-cobalt/20 -translate-x-1/2 z-10" />
                <img src={heroImageUrl} alt="" referrerPolicy="no-referrer" className="absolute max-w-none pointer-events-none select-none origin-center"
                  style={{ width: imgSize.width || 450, height: imgSize.height || 560, left: lensActive ? -(lensPos.x / 100 * (imgSize.width || 450)) : '-300px', top: lensActive ? -(lensPos.y / 100 * (imgSize.height || 560)) : '-320px', transform: 'scale(1.22)', transition: lensActive ? 'none' : 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }} />
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-optical-black text-ivory text-[7px] font-mono uppercase tracking-widest px-1.5 py-0.5 z-20 border border-white/10 whitespace-nowrap">VERRE ACCORD 1.2x</span>
              </div>

              <div className="absolute top-4 left-4 bg-optical-black/85 text-ivory text-[8px] font-mono uppercase tracking-widest px-2 py-1 border border-white/10 z-10">Édition Limitée</div>
            </div>

            <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-wider text-stone-grey px-1 leading-relaxed">
              <div className="text-left">
                <span className="block text-optical-black font-semibold tracking-widest">{settings.name}</span>
                <span className="block text-stone-grey/85 mt-0.5">{settings.address}</span>
                <span className="block text-stone-grey/85">{settings.postalCode} {settings.city}</span>
              </div>
              <div className="text-right text-stone-grey/75 leading-relaxed">
                <span>Atelier Lunetterie</span>
                <span className="block text-[9px] font-light mt-1 text-cobalt">[ Opticien Créateur ]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex lg:hidden flex-col w-full text-left gap-6 pb-4">
          <div className="flex flex-col">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cobalt rounded-full animate-pulse" />
              <p className="font-mono text-[9px] tracking-widest text-cobalt uppercase font-bold">Boutique indépendante de créateurs</p>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-[48px] sm:text-[68px] font-normal leading-[0.9] tracking-tight text-optical-black mb-4">
              Voir<br />
              <span className="italic ml-6 sm:ml-12 text-cobalt block">autrement.</span>
            </h1>
          </div>
          <p className="font-sans text-optical-black/95 text-base font-light mb-2 max-w-xl leading-relaxed">
            Montures de caractère, conseils personnalisés et savoir-faire optique au cœur du 20ème arrondissement.
          </p>
          <div className="relative w-full aspect-[4/5] bg-[#EAE5DF] overflow-hidden border border-stone-grey/15 mt-2">
            <img src={heroImageUrl} alt="Portrait éditorial AlexSEE" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-optical-black/85 text-ivory text-[8px] font-mono uppercase tracking-widest px-2 py-1 border border-white/10">Édition Limitée</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
            <button onClick={() => onNavigate('collections')} className="flex items-center justify-center gap-3 bg-optical-black text-ivory hover:bg-cobalt px-6 py-4 transition-all duration-300 tracking-widest font-mono text-xs uppercase w-full">
              <span>Découvrir la sélection</span><ArrowRight size={14} />
            </button>
            <button onClick={() => onNavigate('contact')} className="flex items-center justify-center gap-2 border border-optical-black/30 hover:border-cobalt px-6 py-4 text-optical-black hover:text-cobalt bg-transparent transition-all duration-300 font-mono text-xs uppercase tracking-widest w-full">
              <span>Prendre rendez-vous</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Featured Frames ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-stone-grey/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-stone-grey block mb-3">[ Sélection de la Saison ]</span>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-5xl font-light uppercase tracking-tight">Pièces de Collection</h2>
          </div>
          <button onClick={() => onNavigate('collections')} className="font-mono text-[10px] uppercase tracking-widest text-cobalt hover:text-optical-black transition-colors flex items-center gap-2 group">
            Voir tout le catalogue <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {featuredFrames.map((frame, i) => (
            <motion.div key={frame.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => onSelectFrame(frame.id)} data-cursor-label="DÉCOUVRIR"
              className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/5] bg-stone-light/40 relative overflow-hidden mb-4 border border-stone-grey/10">
                {frame.isNew && <span className="absolute top-3 left-3 z-10 bg-cobalt text-ivory font-mono text-[8px] uppercase tracking-widest py-1 px-2">Nouveau</span>}
                <span className="absolute top-3 right-3 z-10 bg-optical-black/80 text-ivory font-mono text-[8px] uppercase tracking-widest py-1 px-2 backdrop-blur-sm">{frame.type}</span>
                <img src={frame.images[0]} alt={`${frame.brand} ${frame.model}`} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <img src={frame.images[1]} alt={`${frame.brand} lifestyle`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex justify-between font-mono text-[9px] uppercase tracking-wider text-stone-grey mb-1">
                <span>{frame.brand}</span><span className="text-cobalt">{frame.availability}</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-stone-grey/10 pb-2 mb-2">
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-light uppercase tracking-tight group-hover:text-cobalt transition-colors">{frame.model}</h3>
                <span className="font-mono text-sm tracking-tight font-medium">{frame.price}</span>
              </div>
              <span className="text-[11px] text-stone-grey/80 font-mono">Matière : {frame.material}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 border-b border-stone-grey/10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-grey/15">
          {[
            { val: '15+', label: 'Ans d\'expertise optique' },
            { val: '200+', label: 'Montures en boutique' },
            { val: '1h', label: 'Accompagnement personnalisé' },
          ].map((s, i) => (
            <div key={i} className="py-12 px-8 text-center">
              <div style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-6xl font-light text-cobalt mb-3">{s.val}</div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-stone-grey">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-2">Votre Regard, Notre Expertise</h2>
          <p className="font-sans text-stone-grey text-sm max-w-md leading-relaxed">Prenez rendez-vous pour un conseil personnalisé dans notre atelier du 20e arrondissement.</p>
        </div>
        <button onClick={() => onNavigate('contact')} className="flex-shrink-0 group flex items-center gap-3 bg-cobalt text-ivory hover:bg-optical-black px-8 py-5 transition-all duration-300 tracking-widest font-mono text-xs uppercase">
          Prendre Rendez-vous <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>
    </div>
  );
}
