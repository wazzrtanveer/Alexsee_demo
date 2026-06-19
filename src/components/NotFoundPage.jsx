import React from 'react';
import { motion } from 'framer-motion';
import { Home, Eye } from 'lucide-react';

export default function NotFoundPage({ onNavigate }) {
  return (
    <div id="notfound-root" className="pt-28 pb-24 bg-ivory text-optical-black min-h-screen px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Refraction Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full border border-stone-grey/15 flex items-center justify-center p-3 pointer-events-none mix-blend-difference">
        <div className="w-[50vw] h-[50vw] rounded-full border border-dashed border-cobalt/25 animate-[spin_120s_linear_infinite]" />
      </div>

      <div className="max-w-xl text-center space-y-8 relative z-10">
        {/* Animated Lens Refraction */}
        <div className="relative inline-block overflow-hidden py-4">
          <motion.h1
            initial={{ letterSpacing: "0.4em", filter: "blur(15px)" }}
            animate={{ letterSpacing: "0.15em", filter: "blur(0.5px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ fontFamily: "var(--font-display)" }}
            className="text-8xl md:text-9xl font-bold tracking-widest text-[#0D0D0E]/10 select-none text-stroke text-optical-black text-center"
          >
            404
          </motion.h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-cobalt mix-blend-screen pointer-events-none flex items-center justify-center backdrop-blur-sm">
            <span className="font-mono text-[10px] tracking-widest text-cobalt uppercase font-bold animate-pulse">
              Axe de réfraction
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <span className="font-mono text-[10px] tracking-[0.25em] text-cobalt uppercase block">
            [ Le regard s’égare — Erreur d’axe ]
          </span>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl md:text-3xl font-light uppercase tracking-tight text-optical-black">
            Point focal hors-champ
          </h2>
          <p className="font-sans text-stone-grey text-sm max-w-sm mx-auto leading-relaxed">
            La perspective recherchée n’est pas disponible dans le catalogue de l’atelier. Recentrons votre vision.
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => onNavigate("home")}
            className="bg-optical-black hover:bg-cobalt text-ivory font-mono text-xs uppercase tracking-widest py-3.5 px-6 transition-colors duration-300 inline-flex items-center gap-2 justify-center"
          >
            <Home size={13} />
            <span>Revenir à l’accueil</span>
          </button>
          <button
            onClick={() => onNavigate("collections")}
            className="border border-stone-grey/30 hover:border-optical-black text-optical-black font-mono text-xs uppercase tracking-widest py-3.5 px-6 transition-colors duration-300 inline-flex items-center gap-2 justify-center bg-transparent"
          >
            <Eye size={13} />
            <span>Découvrir le catalogue</span>
          </button>
        </div>
      </div>
    </div>
  );
}
