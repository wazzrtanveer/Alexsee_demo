import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { frames as fallbackFrames } from '../data/mockData.js';

const FILTERS = ['Tous', 'Optique', 'Solaire', 'Femme', 'Homme', 'Créateur', 'Nouveautés'];

function filterFrames(allFrames, filter) {
  if (filter === 'Tous') return allFrames;
  if (filter === 'Optique') return allFrames.filter(f => f.type === 'Optique');
  if (filter === 'Solaire') return allFrames.filter(f => f.type === 'Solaire');
  if (filter === 'Femme') return allFrames.filter(f => f.gender === 'Femme' || f.gender === 'Unisex');
  if (filter === 'Homme') return allFrames.filter(f => f.gender === 'Homme' || f.gender === 'Unisex');
  if (filter === 'Créateur') return allFrames.filter(f => f.brand.toLowerCase().includes('alexsee') || f.brand.toLowerCase().includes('nackymade') || f.brand.toLowerCase().includes('signature'));
  if (filter === 'Nouveautés') return allFrames.filter(f => f.isNew);
  return allFrames;
}

export default function CollectionsPage({ onSelectFrame, onNavigate, frames = fallbackFrames }) {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [hoveredId, setHoveredId] = useState(null);
  const filtered = filterFrames(frames, activeFilter);

  return (
    <div id="collections-view-root" className="pt-28 pb-24 bg-ivory text-optical-black min-h-screen px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-stone-grey/25 pb-10 mb-12">
        <div className="flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="group flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-stone-grey hover:text-optical-black transition-colors">
            <ArrowLeft size={10} className="group-hover:-translate-x-1 transition-transform" />
            <span>Retour</span>
          </button>
          <span className="text-stone-grey/40 font-mono text-[9px]">|</span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-stone-grey">[ Collection Lookbook ]</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-6xl font-light uppercase tracking-tight">Le Catalogue</h1>
          <p className="font-sans text-stone-grey text-sm max-w-md leading-relaxed">
            Une sélection rigoureuse de montures de créateurs haut de gamme. Chaque pièce est choisie pour l'excellence de son façonnage et sa force graphique.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-12">
        <span className="font-mono text-[9px] uppercase tracking-widest text-stone-grey block mb-3">Filtrer par type ou créateur :</span>
        <div className="flex flex-wrap gap-2.5">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-cobalt ${activeFilter === f ? 'bg-optical-black text-ivory border-optical-black' : 'bg-transparent text-stone-grey border-stone-grey/20 hover:border-optical-black hover:text-optical-black'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {filtered.map((frame, i) => (
            <motion.div key={frame.id} layout
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: i * 0.04 }}
              onClick={() => onSelectFrame(frame.id)}
              onMouseEnter={() => setHoveredId(frame.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-cursor-label="DÉCOUVRIR"
              className="flex flex-col justify-between group cursor-pointer focus:outline-none focus:ring-1 focus:ring-cobalt"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectFrame(frame.id); } }}>
              {/* Image */}
              <div className="aspect-[4/5] bg-stone-light/40 relative overflow-hidden mb-5 border border-stone-grey/10">
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  {frame.isNew && <span className="bg-cobalt text-ivory font-mono text-[8.5px] uppercase tracking-widest py-1 px-2">Nouveau</span>}
                  <span className="bg-optical-black/80 text-ivory font-mono text-[8.5px] uppercase tracking-widest py-1 px-2 backdrop-blur-sm">{frame.type}</span>
                </div>
                <img src={frame.images[0]} alt={`${frame.brand} ${frame.model}`} referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <img src={frame.images[1]} alt={`${frame.brand} lifestyle`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 border-[30px] border-optical-black/20 pointer-events-none" />
                </div>
              </div>
              {/* Info */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-stone-grey">
                  <span>{frame.brand}</span>
                  <span className="text-cobalt">{frame.availability}</span>
                </div>
                <div className="flex items-baseline justify-between gap-2 border-b border-stone-grey/10 pb-2">
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-light uppercase tracking-tight group-hover:text-cobalt transition-colors">{frame.model}</h3>
                  <span className="font-mono text-sm tracking-tight font-medium">{frame.price}</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-stone-grey/80 font-mono">
                  <span>Matière : {frame.material}</span>
                  <span className="font-semibold text-optical-black group-hover:text-cobalt transition-colors inline-flex items-center gap-1 uppercase text-[9px] tracking-widest">
                    <span>Fiche</span><ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-20 font-mono text-stone-grey text-xs uppercase tracking-widest">
          [ Aucun modèle correspondant trouvé pour la sélection ]
        </div>
      )}

      {/* Footer CTA */}
      <div className="mt-28 border-t border-stone-grey/25 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[10px] text-stone-grey uppercase tracking-widest">
        <span>AlexSEE Paris — Eyewear character collection</span>
        <button onClick={() => onNavigate('contact')} className="bg-cobalt text-ivory hover:bg-optical-black px-6 py-3 transition-colors duration-300 font-semibold text-[9px] tracking-widest">
          Essayer à l'atelier du 20e
        </button>
      </div>
    </div>
  );
}
