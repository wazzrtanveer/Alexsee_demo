import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { frames as fallbackFrames, settings as fallbackSettings } from '../data/mockData.js';

export default function FrameDetailPage({ frameId, onNavigate, onSelectFrame, onRequestAppointmentWithFrame, frames = fallbackFrames, settings = fallbackSettings }) {
  const frame = frames.find(f => f.id === frameId) || frames[0];
  const [viewIdx, setViewIdx] = useState(0);
  const others = frames.filter(f => f.id !== frame.id).slice(0, 2);

  return (
    <div id="frame-detail-view-root" className="pt-28 pb-24 bg-ivory text-optical-black min-h-screen px-6 md:px-12 lg:px-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-10 border-b border-stone-grey/15 pb-6">
        <button onClick={() => onNavigate('collections')} className="group flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-stone-grey hover:text-optical-black transition-colors">
          <ArrowLeft size={10} className="group-hover:-translate-x-1 transition-transform" />
          <span>Retour au lookbook</span>
        </button>
        <span className="text-stone-grey/40 font-mono text-[9px]">/</span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-stone-grey">Modèle : {frame.brand} — {frame.model}</span>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        {/* Image column */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
          <div className="aspect-[4/5] bg-stone-light/40 relative overflow-hidden border border-stone-grey/15">
            <AnimatePresence mode="wait">
              <motion.img key={viewIdx}
                src={frame.images[viewIdx]} alt={`${frame.brand} view`}
                initial={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover absolute inset-0" />
            </AnimatePresence>
            {/* View toggles */}
            <div className="absolute bottom-6 left-6 flex gap-2 z-10">
              {['[ Vue Objet ]', '[ Vue Portée ]'].map((label, i) => (
                <button key={i} onClick={() => setViewIdx(i)}
                  className={`font-mono text-[9px] uppercase tracking-widest py-1.5 px-3 border transition-colors ${viewIdx === i ? 'bg-optical-black text-ivory border-optical-black' : 'bg-ivory/80 text-optical-black border-stone-grey/25 backdrop-blur-sm'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <p className="font-mono text-[9px] text-stone-grey uppercase tracking-wider text-center">
            * Photos non contractuelles. Essayages recommandés directement en boutique.
          </p>
        </div>

        {/* Details column */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            {/* Brand + Model */}
            <div>
              <span className="font-mono text-[10px] tracking-widest text-stone-grey uppercase block mb-1">{frame.brand}</span>
              <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight">{frame.model}</h1>
            </div>

            {/* Price + badge */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xl tracking-tight font-medium text-cobalt">{frame.price}</span>
              <span className="h-4 w-[1px] bg-stone-grey/30" />
              <div className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span>Selectionneur créateur</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="font-sans text-stone-grey text-md leading-relaxed font-light">{frame.description}</p>
              {frame.designerPhilosophy && (
                <div className="border-l-2 border-cobalt pl-4 py-1 italic font-serif text-sm text-optical-black">
                  « {frame.designerPhilosophy} »
                </div>
              )}
            </div>

            {/* Specs table */}
            <div className="border-t border-b border-stone-grey/20 py-4 space-y-2.5 font-mono text-xs text-stone-grey">
              <div className="flex justify-between">
                <span>Matière :</span><span className="text-optical-black font-semibold uppercase">{frame.material}</span>
              </div>
              <div className="flex justify-between">
                <span>Couleur :</span><span className="text-optical-black font-semibold uppercase">{frame.color}</span>
              </div>
              <div className="flex justify-between">
                <span>Calibre / Pont / Branche :</span>
                <span className="text-optical-black">{frame.specs.lensWidth} ▢ {frame.specs.bridgeWidth} — {frame.specs.templeLength} mm</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Disponibilité :</span>
                <div className="inline-flex items-center gap-1.5 font-semibold text-optical-black">
                  <span className={`w-1.5 h-1.5 rounded-full ${frame.availability === 'En boutique' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  <span>{frame.availability}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-4">
            <button onClick={() => onRequestAppointmentWithFrame(`${frame.brand} - ${frame.model}`)}
              className="w-full bg-cobalt hover:bg-optical-black text-ivory text-center py-4 text-xs font-mono font-semibold tracking-widest uppercase transition-colors duration-300 shadow-md flex items-center justify-center gap-2">
              <Calendar size={13} /><span>Essayer ce modèle en boutique Paris 20</span>
            </button>
            <a href={`mailto:${settings.email}?subject=Demande de disponibilité : ${encodeURIComponent(frame.brand + ' - ' + frame.model)}`}
              className="w-full border border-optical-black/25 hover:border-cobalt text-optical-black hover:text-cobalt text-center py-4 text-xs font-mono tracking-widest uppercase transition-colors duration-300 block bg-transparent">
              Demander la disponibilité à distance
            </a>
          </div>

          {/* Boutique info box */}
          <div className="bg-stone-light/40 p-4 border border-stone-grey/10 text-xs text-stone-grey space-y-1 font-mono">
            <span className="font-semibold text-optical-black uppercase tracking-wider block text-[9px]">Venir en boutique</span>
            <p>{settings.address}, {settings.postalCode} {settings.city}</p>
            <p>{settings.metro}</p>
            <a href={`tel:${settings.phone.replace(/\s+/g,'')}`} className="text-cobalt hover:underline">{settings.phone}</a>
          </div>
        </div>
      </div>

      {/* Other frames */}
      {others.length > 0 && (
        <div className="mt-24 border-t border-stone-grey/15 pt-16">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl font-light uppercase tracking-tight mb-10">Autres Montures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {others.map(other => (
              <div key={other.id} onClick={() => onSelectFrame(other.id)} className="group cursor-pointer flex gap-5 items-center border border-stone-grey/15 p-4 hover:border-cobalt transition-colors duration-300">
                <div className="w-24 h-24 bg-stone-light/40 overflow-hidden flex-shrink-0">
                  <img src={other.images[0]} alt={other.model} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-stone-grey block">{other.brand}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-xl font-light uppercase tracking-tight group-hover:text-cobalt transition-colors">{other.model}</h3>
                  <span className="font-mono text-sm text-cobalt">{other.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
