import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Sparkles } from 'lucide-react';
import { services as fallbackServices } from '../data/mockData.js';

export default function ServicesPage({ onNavigate, services = fallbackServices }) {
  const [openId, setOpenId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const activeService = services.find((s) => s.id === hoveredId || s.id === openId) || services[0];

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-28 pb-24 bg-ivory text-optical-black min-h-screen px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-stone-grey/75 uppercase block mb-4">
            [ 03 / Savoir-faire &amp; Prestations ]
          </span>
          <h1 className="font-display text-5xl md:text-6xl italic mb-4">
            L'Artisanat de la Vision
          </h1>
          <p className="font-sans text-base text-stone-grey max-w-xl leading-relaxed">
            Chaque prestation est pensée comme un moment d'échange artisanal — entre savoir-faire
            technique, expertise optique et sensibilité esthétique.
          </p>
        </div>

        {/* 12-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Accordion list — 7 cols */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-stone-grey/15">
              {services.map((service, i) => {
                const isOpen = openId === service.id;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredId(service.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Accordion header */}
                    <button
                      className="w-full flex items-center gap-5 py-6 text-left group"
                      onClick={() => toggle(service.id)}
                      aria-expanded={isOpen}
                    >
                      {/* Number */}
                      <span className="font-mono text-[10px] tracking-[0.3em] text-cobalt shrink-0 w-8">
                        {service.number}
                      </span>
                      {/* Title */}
                      <span
                        className={`font-display italic flex-1 transition-colors duration-200 ${
                          isOpen ? 'text-cobalt' : 'text-optical-black group-hover:text-cobalt'
                        }`}
                        style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
                      >
                        {service.title}
                      </span>
                      {/* Chevron */}
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="shrink-0"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-colors duration-200 ${
                            isOpen ? 'text-cobalt' : 'text-stone-grey'
                          }`}
                        />
                      </motion.span>
                    </button>

                    {/* Accordion body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-13 ml-13">
                            <div className="ml-[52px]">
                              <p className="font-sans text-sm text-stone-grey leading-relaxed mb-5">
                                {service.description}
                              </p>

                              {/* Detail bullets */}
                              <ul className="space-y-2.5 mb-6">
                                {service.details.map((detail, di) => (
                                  <li key={di} className="flex items-start gap-3">
                                    <Check
                                      size={13}
                                      className="text-cobalt mt-0.5 shrink-0"
                                    />
                                    <span className="font-sans text-sm text-optical-black">
                                      {detail}
                                    </span>
                                  </li>
                                ))}
                              </ul>

                              {/* Note */}
                              {service.unconfirmedNote && (
                                <p className="font-mono text-[8.5px] tracking-[0.2em] text-stone-grey/50 mb-5 italic">
                                  {service.unconfirmedNote}
                                </p>
                              )}

                              {/* CTA */}
                              <button
                                onClick={() => onNavigate('contact')}
                                className="inline-flex items-center gap-2 bg-cobalt text-ivory px-6 py-2.5 font-sans text-xs font-medium tracking-wider hover:bg-cobalt/90 transition-colors duration-200"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-ivory/60" />
                                Prendre Rendez-vous
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sticky image panel — 5 cols (hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-32">
              {/* Image with animated swap */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-light/20">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeService.id}
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  />
                </AnimatePresence>

                {/* Cobalt animated lens border overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-cobalt/40 animate-lens-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-cobalt/20" />
                </div>

                {/* Service name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-optical-black/60 to-transparent p-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeService.id}
                      className="font-display text-ivory italic text-xl"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeService.title}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Note d'art direction info box */}
              <div className="mt-6 bg-cobalt/[0.03] border border-cobalt/20 p-5">
                <div className="flex items-start gap-3">
                  <Sparkles size={14} className="text-cobalt mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.25em] text-cobalt uppercase mb-2">
                      Note d'art direction
                    </p>
                    <p className="font-sans text-xs text-stone-grey leading-relaxed">
                      Nos prestations sont conçues comme une expérience sensorielle globale —
                      l'espace, l'éclairage et le temps vous appartiennent pendant votre rendez-vous.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
