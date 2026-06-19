import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Calendar, MapPin } from 'lucide-react';
import { settings } from '../data/mockData.js';

export default function AppointmentPage({ preSelectedFrameModel, onNavigate, onClearPreSelectedFrame }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(
    preSelectedFrameModel 
      ? "Conseil en montures créateur (avec essai)" 
      : "Conseil en montures créateur"
  );
  const [prefDate, setPrefDate] = useState('');
  const [prefTime, setPrefTime] = useState('11:00');
  const [notes, setNotes] = useState(
    preSelectedFrameModel 
      ? `Souhaite essayer le modèle : ${preSelectedFrameModel}` 
      : ''
  );
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = ["10:30", "11:00", "14:30", "15:30", "16:30", "17:30", "18:30"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Le nom est obligatoire.";
    }
    if (!email.trim() || !email.includes("@")) {
      newErrors.email = "Un email valide est requis.";
    }
    if (!phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est obligatoire.";
    }
    if (!prefDate) {
      newErrors.prefDate = "Le choix du jour est requis.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const formEl = document.getElementById("appointment-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setErrors({});
      setIsSuccess(true);
      if (onClearPreSelectedFrame) {
        onClearPreSelectedFrame();
      }
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        id="appointment-success-viewport"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-28 pb-24 bg-ivory text-optical-black min-h-screen px-6 md:px-12 lg:px-24 flex items-center justify-center"
      >
        <div className="max-w-xl w-full bg-stone-light/25 p-8 md:p-12 border border-stone-grey/20 text-center space-y-8 relative">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-cobalt" />
          <div className="w-16 h-16 rounded-full bg-cobalt/10 flex items-center justify-center text-cobalt mx-auto">
            <CheckCircle2 size={32} className="stroke-[1.5]" />
          </div>
          <div className="space-y-3">
            <span className="font-mono text-[9px] tracking-[0.25em] text-cobalt uppercase block">
              [ Rendez-vous enregistré avec succès ]
            </span>
            <h1 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl font-light uppercase tracking-tight">
              Merci, {name}
            </h1>
            <p className="font-sans text-stone-grey text-sm leading-relaxed max-w-sm mx-auto">
              Votre demande de créneau pour <span className="font-semibold text-optical-black">{service}</span> a été transmise à notre atelier Rue d’Avron.
            </p>
          </div>

          <div className="border-t border-b border-stone-grey/15 py-5 text-left space-y-3 font-mono text-[11px] uppercase tracking-wider text-stone-grey">
            <div className="flex justify-between">
              <span>Date retenue :</span>
              <span className="text-optical-black font-semibold">{prefDate}</span>
            </div>
            <div className="flex justify-between">
              <span>Heure indicative :</span>
              <span className="text-optical-black font-semibold">{prefTime}</span>
            </div>
            <div className="flex justify-between">
              <span>Mode de contact :</span>
              <span className="text-optical-black normal-case font-semibold">
                {email} / {phone}
              </span>
            </div>
            {notes && (
              <div className="border-t border-stone-grey/15 pt-3 mt-3 normal-case text-[10px] text-stone-grey italic leading-relaxed">
                Note de profil : « {notes} »
              </div>
            )}
          </div>

          <div className="space-y-4">
            <p className="font-sans text-stone-grey/90 text-xs">
              Un opticien de la boutique va confirmer ce créneau par appel ou courriel sous 24h. Préparez vos ordonnances ophtalmologiques en cours si nécessaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onNavigate('home')}
                className="w-full bg-optical-black hover:bg-cobalt text-ivory font-mono text-xs uppercase tracking-widest py-3.5 transition-colors duration-300"
              >
                Retourner à l’accueil
              </button>
              <button
                onClick={() => onNavigate('collections')}
                className="w-full border border-stone-grey/25 hover:border-optical-black text-optical-black font-mono text-xs uppercase tracking-widest py-3.5 transition-colors duration-300 bg-transparent"
              >
                Continuer le lookbook
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div id="contact-view-root" className="pt-28 pb-24 bg-ivory text-optical-black min-h-screen px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-stone-grey/25 pb-10 mb-12">
        <span className="font-mono text-[9px] uppercase tracking-widest text-stone-grey block">
          [ 05 / Planification & RDV ]
        </span>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-6xl font-light uppercase tracking-tight text-optical-black">
            Prendre Rendez-vous
          </h1>
          <p className="font-sans text-stone-grey text-sm max-w-sm leading-relaxed font-light">
            Sollicitez un créneau pour essayer notre vestiaire de créateurs ou contrôler votre acuité sous une heure d’attention exclusive.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        {/* Form Column */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-start">
          <form id="appointment-form" onSubmit={handleSubmit} className="space-y-6">
            {preSelectedFrameModel && (
              <div className="bg-cobalt/5 p-4 border border-cobalt/20 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs text-cobalt font-mono uppercase tracking-wider">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>
                    Modèle sélectionné pour l’essai : <strong className="text-optical-black">{preSelectedFrameModel}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClearPreSelectedFrame}
                  className="font-mono text-[9px] uppercase tracking-widest text-[#7B7973] hover:text-[#0D0D0E]"
                >
                  [ Annuler ]
                </button>
              </div>
            )}

            {/* Inputs: Name, Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label htmlFor="user-name" className="font-mono text-[10px] uppercase tracking-widest text-[#7B7973] font-semibold flex items-center justify-between">
                  <span>Votre Nom et Prénom *</span>
                  {errors.name && <span className="text-rose-600 font-bold tracking-tight lowercase">({errors.name})</span>}
                </label>
                <input
                  id="user-name"
                  type="text"
                  placeholder="Ex. Alexandre de Paris"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full bg-stone-light/20 border p-3 font-sans text-sm focus:border-cobalt transition-colors ${
                    errors.name ? "border-rose-300 bg-rose-50/10" : "border-stone-grey/25"
                  }`}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="user-email" className="font-mono text-[10px] uppercase tracking-widest text-[#7B7973] font-semibold flex items-center justify-between">
                  <span>Adresse Courriel *</span>
                  {errors.email && <span className="text-rose-600 font-bold tracking-tight lowercase">({errors.email})</span>}
                </label>
                <input
                  id="user-email"
                  type="email"
                  placeholder="Ex. mail@exemple.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-stone-light/20 border p-3 font-sans text-sm focus:border-cobalt transition-colors ${
                    errors.email ? "border-rose-300 bg-rose-50/10" : "border-stone-grey/25"
                  }`}
                />
              </div>
            </div>

            {/* Inputs: Phone, Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label htmlFor="user-phone" className="font-mono text-[10px] uppercase tracking-widest text-[#7B7973] font-semibold flex items-center justify-between">
                  <span>Numéro de Téléphone *</span>
                  {errors.phone && <span className="text-rose-600 font-bold tracking-tight lowercase">({errors.phone})</span>}
                </label>
                <input
                  id="user-phone"
                  type="tel"
                  placeholder="Ex. 01 43 73 12 12"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full bg-stone-light/20 border p-3 font-sans text-sm focus:border-cobalt transition-colors ${
                    errors.phone ? "border-rose-300 bg-rose-50/10" : "border-stone-grey/25"
                  }`}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="user-service" className="font-mono text-[10px] uppercase tracking-widest text-[#7B7973] font-semibold block">
                  Sélection du motif
                </label>
                <select
                  id="user-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-stone-light/20 border border-stone-grey/25 p-3 font-sans text-sm focus:border-cobalt transition-colors"
                >
                  <option value="Conseil en montures créateur">Conseil en montures créateur (1h)</option>
                  <option value="Examen de vue & Contrôle">Examen de vue & Contrôle (45min)</option>
                  <option value="Ajustage technique ou entretien">Ajustage technique ou entretien (30min)</option>
                  <option value="Sélection verres de haute technologie">Sélection verres de haute technologie (30min)</option>
                  <option value="Espace Enfant & Solaire libre">Espace Enfant & Solaire libre</option>
                </select>
              </div>
            </div>

            {/* Inputs: Preferred Date, Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5 border-t border-transparent">
                <label htmlFor="user-pref-date" className="font-mono text-[10px] uppercase tracking-widest text-[#7B7973] font-semibold flex items-center justify-between">
                  <span>Date souhaitée *</span>
                  {errors.prefDate && <span className="text-rose-600 font-bold tracking-tight lowercase">({errors.prefDate})</span>}
                </label>
                <input
                  id="user-pref-date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={prefDate}
                  onChange={(e) => setPrefDate(e.target.value)}
                  className={`w-full bg-stone-light/20 border p-3 font-mono text-sm focus:border-cobalt transition-colors ${
                    errors.prefDate ? "border-rose-300 bg-rose-50/10" : "border-stone-grey/25"
                  }`}
                />
              </div>
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#7B7973] font-semibold block">
                  Créneau horaire estimé :
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setPrefTime(time)}
                      className={`font-mono text-[10px] tracking-tight px-3 py-2.5 border transition-all ${
                        prefTime === time
                          ? "bg-cobalt text-ivory border-cobalt font-semibold"
                          : "bg-stone-light/20 text-[#0D0D0E] border-stone-grey/15 hover:border-[#0D0D0E]"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Inputs: Notes */}
            <div className="space-y-1.5">
              <label htmlFor="user-notes" className="font-mono text-[10px] uppercase tracking-widest text-[#7B7973] font-semibold block">
                Notes ou demandes spéciales
              </label>
              <textarea
                id="user-notes"
                rows={3}
                placeholder="Ex. Précisions de prescription, montures aperçues, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-stone-light/20 border border-stone-grey/25 p-3 font-sans text-sm focus:border-cobalt transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              data-cursor-label="ENVOYER"
              className="w-full bg-optical-black hover:bg-cobalt text-ivory text-center py-4 font-mono font-semibold tracking-widest text-xs uppercase transition-colors duration-300 shadow-md flex items-center justify-center gap-2.5"
            >
              <Calendar size={14} />
              <span>Réserver mon créneau à l’atelier</span>
            </button>
          </form>
        </div>

        {/* Info Column */}
        <div className="col-span-1 lg:col-span-5 space-y-8">
          <div className="p-6 bg-stone-light/25 border border-stone-grey/20 space-y-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#7B7973] block">
              [ Contact Alternatif ]
            </span>
            <p className="font-sans text-xs md:text-sm text-stone-grey leading-relaxed">
              Pour des demandes immédiates ou l’annulation d’un rendez-vous planifié, n’hésitez pas à appeler notre équipe directement aux heures d'ouverture régulières de notre atelier parisien.
            </p>
            <div className="space-y-4 font-mono text-[11px] uppercase tracking-wider text-[#0D0D0E]">
              <div className="flex justify-between items-center py-1">
                <span className="text-stone-grey normal-case">Téléphone direct :</span>
                <a href={`tel:${settings.phone}`} className="font-bold text-cobalt hover:underline">
                  {settings.phone}
                </a>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-stone-grey">Email d'atelier :</span>
                <span className="lowercase font-semibold">{settings.email}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-stone-grey">Instagram :</span>
                <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="text-cobalt hover:underline text-xs">
                  @alexsee.avron
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#0D0D0E] text-ivory border border-stone-grey/15 space-y-4">
            <span className="font-mono text-[9px] uppercase text-stone-grey tracking-widest flex items-center gap-1.5">
              <MapPin size={12} className="text-cobalt" /> Accès & Localisation
            </span>
            <p className="font-sans text-xs text-stone-grey leading-relaxed">
              <strong>AlexSEE</strong> est implanté au <strong>28 Rue d’Avron, 75020 Paris</strong>.<br />
              L’entrée est accessible directement de plain-pied. Métro Buzenval (Ligne 9) à 300 mètres ou Avron (Ligne 2) à 400 mètres.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
