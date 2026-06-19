import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, MapPin, Train, Map, Phone } from 'lucide-react';
import { boutiqueImages, settings } from '../data/mockData.js';

export default function BoutiquePage({ onNavigate }) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % boutiqueImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="boutique-view-root" className="pt-28 pb-24 bg-ivory text-optical-black min-h-screen px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-stone-grey/25 pb-10 mb-12">
        <span className="font-mono text-[9px] uppercase tracking-widest text-stone-grey block">
          [ 04 / L’Expérience Physique ]
        </span>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-6xl font-light uppercase tracking-tight text-optical-black">
            L’Atelier Paris 20e
          </h1>
          <p className="font-sans text-stone-grey text-sm max-w-sm leading-relaxed font-light">
            Une escale optique intime située rue d’Avron. Venez prendre le temps de dialoguer autour de vos mesures et choisir des montures sous une lumière naturelle.
          </p>
        </div>
      </div>

      {/* Slideshow Hero */}
      <div className="relative w-full h-[50vh] md:h-[65vh] bg-stone-light/40 overflow-hidden mb-16 border border-stone-grey/15">
        <AnimatePresence mode="wait">
          <motion.img
            key={slideIdx}
            src={boutiqueImages[slideIdx]}
            alt="Intérieur AlexSEE"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2 }}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-90"
          />
        </AnimatePresence>
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-10 bg-gradient-to-t from-optical-black/60 via-transparent to-optical-black/30 text-ivory">
          <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-widest">
            <span>[ 28 RUE D’AVRON ]</span>
            <span>PARIS XXe ARRONDISSEMENT</span>
          </div>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-8xl font-light tracking-tighter uppercase leading-[0.85] text-stroke-white text-ivory">
              AlexSEE<br />Atelier
            </h2>
            <p className="font-mono text-[10px] tracking-widest uppercase mt-4 text-stone-grey text-left">
              * {settings.unconfirmedNote}
            </p>
          </div>
        </div>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column - Hours */}
        <div className="col-span-1 lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-stone-grey block border-b border-stone-grey/25 pb-3">
              Heures d’ouverture
            </h3>
            <div className="divide-y divide-stone-grey/15 font-mono text-xs text-optical-black">
              {settings.hours.map((item) => (
                <div key={item.days} className="flex justify-between py-3.5 items-baseline">
                  <span className="font-medium">{item.days}</span>
                  <span className="text-stone-grey">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-cobalt/5 border border-cobalt/20 font-mono text-[10px] text-cobalt uppercase tracking-widest flex items-center gap-3">
            <Loader2 size={14} className="animate-spin" />
            <span>Accompagnement d’une heure privilégiée sur rendez-vous</span>
          </div>
        </div>

        {/* Right Column - Map & Directions */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#7B7973] block border-b border-stone-grey/25 pb-3">
              Venir à la Boutique
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              <div className="space-y-3">
                <span className="font-mono text-[9px] uppercase tracking-wider text-cobalt flex items-center gap-1.5">
                  <MapPin size={12} /> Localisation
                </span>
                <p className="text-sm font-semibold text-optical-black">AlexSEE Opticien Créateur</p>
                <p className="text-sm text-stone-grey leading-relaxed">
                  28 Rue d’Avron, 75020 Paris<br />Quartier Charonne - Nation
                </p>
              </div>
              <div className="space-y-3">
                <span className="font-mono text-[9px] uppercase tracking-wider text-cobalt flex items-center gap-1.5">
                  <Train size={12} /> Transports Métro
                </span>
                <p className="text-sm font-semibold text-optical-black">Ligne 9 ou Ligne 2</p>
                <p className="text-sm text-stone-grey leading-relaxed">
                  Station Buzenval (L9) à 3 min à pied.<br />Station Avron (M2) à 6 min à pied.
                </p>
              </div>
            </div>

            {/* Decorative CSS Map */}
            <div className="w-full aspect-[16/7] bg-stone-light/60 border border-stone-grey/15 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-stone-light/30 flex flex-col justify-center px-10 relative">
                {/* Simulated streets */}
                <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-stone-grey/15 transform rotate-6" />
                <div className="absolute top-2/3 left-0 right-0 h-[3px] bg-stone-grey/10" />
                <div className="absolute left-1/4 top-0 bottom-0 w-[2px] bg-stone-grey/10" />
                <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-stone-grey/15 transform -rotate-12" />
                
                {/* Station */}
                <div className="absolute left-[20%] top-[20%] flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-[8px] text-ivory font-bold font-mono">9</div>
                  <span className="font-mono text-[7px] text-stone-grey uppercase tracking-widest mt-0.5">Buzenval</span>
                </div>

                {/* Boutique Pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="w-6 h-6 rounded-full bg-cobalt flex items-center justify-center text-ivory animate-bounce shadow-md">
                    <MapPin size={12} />
                  </div>
                  <span className="font-mono text-[8px] text-optical-black font-semibold uppercase tracking-wider mt-1 bg-ivory py-0.5 px-2 border border-stone-grey/25 shadow-sm">
                    AlexSEE (28 Rue d’Avron)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-stone-grey/20">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent("28 Rue d’Avron, 75020 Paris")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-optical-black hover:bg-cobalt text-ivory font-mono text-xs uppercase tracking-widest py-3.5 px-6 transition-colors duration-300 inline-flex items-center gap-2"
            >
              <Map size={14} />
              <span>Ouvrir dans Google Maps</span>
            </a>
            <a
              href={`tel:${settings.phone}`}
              className="border border-optical-black/25 hover:border-cobalt text-optical-black hover:text-cobalt font-mono text-xs uppercase tracking-widest py-3.5 px-6 transition-colors duration-300 inline-flex items-center gap-2 bg-transparent"
            >
              <Phone size={14} />
              <span>Appeler l’Atelier ({settings.phone})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
