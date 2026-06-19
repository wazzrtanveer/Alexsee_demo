export const frames = [
  {
    id: "lumiere-d-avron",
    brand: "AlexSEE Signature",
    model: "D’Avron 01",
    type: "Optique",
    gender: "Unisex",
    material: "Bio-acétate sculpté à la main",
    color: "Ambre Translucide",
    description: "Une monture sculpturale inspirée de la lumière des fins d’après-midi parisiennes. Ses volumes généreux en acétate révèlent des biseaux délicats qui piègent les reflets lumineux.",
    price: "340 €",
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
    ],
    isNew: true,
    isFeatured: true,
    designerPhilosophy: "Une architecture pour le regard qui s’exprime par l’épaisseur de la matière et la sophistication du verre ambré.",
    specs: { lensWidth: 47, bridgeWidth: 23, templeLength: 145 },
    availability: "En boutique"
  },
  {
    id: "silence-titane",
    brand: "Nackymade x AlexSEE",
    model: "Silence N.04",
    type: "Optique",
    gender: "Homme",
    material: "Titane brut japonais",
    color: "Gris Graphite Sablé",
    description: "Le summum du minimalisme technique. Profilé à partir de plaques de titane pur au Japon, ce modèle ultra-léger offre un confort absolu et un port sans contraintes esthétiques.",
    price: "460 €",
    images: [
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80"
    ],
    isNew: false,
    isFeatured: true,
    designerPhilosophy: "Laisser transparaître l’anatomie brute pour que les lignes de force du visage structurent le regard.",
    specs: { lensWidth: 49, bridgeWidth: 20, templeLength: 140 },
    availability: "Sur commande"
  },
  {
    id: "belleville-sun",
    brand: "Kala Eyewear",
    model: "Belleville Solaire",
    type: "Solaire",
    gender: "Femme",
    material: "Acétate de cellulose & branches d’or 18k",
    color: "Écaille Miel & Cobalt",
    description: "Une solaire audacieuse au design œil-de-chat résolument sixties, revisitée pour les trottoirs du 20e arrondissement. Équipée de verres minéraux protecteurs haute-fidélité.",
    price: "390 €",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80"
    ],
    isNew: true,
    isFeatured: true,
    designerPhilosophy: "Une courbe dramatique et affirmée pour réinterpréter le mystère parisien.",
    specs: { lensWidth: 46, bridgeWidth: 24, templeLength: 145 },
    availability: "En boutique"
  },
  {
    id: "charonne-brut",
    brand: "AlexSEE Signature",
    model: "Charonne Retro",
    type: "Optique",
    gender: "Unisex",
    material: "Acétate biseauté épais",
    color: "Noir d’Encre Poli",
    description: "Intemporelle et graphique. Ce modèle affirme une présence forte par sa silhouette géométrique robuste et sa finition polie au tonneau pendant 72 heures pour un fini miroir.",
    price: "320 €",
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
    ],
    isNew: false,
    isFeatured: false,
    designerPhilosophy: "Faire du noir une vibration visuelle plutôt qu’une absence de couleur.",
    specs: { lensWidth: 45, bridgeWidth: 25, templeLength: 145 },
    availability: "En boutique"
  },
  {
    id: "avril-soleil",
    brand: "Garrett Leight",
    model: "Ménilmontant 08",
    type: "Solaire",
    gender: "Unisex",
    material: "Métal ciselé & Verres polarisés",
    color: "Or Rose & Vert Bouteille",
    description: "Une finesse exquise caractérise cette monture pantos. Le métal est finement ciselé de motifs géométriques rappelant les grilles de fer forgé parisiennes.",
    price: "420 €",
    images: [
      "https://images.unsplash.com/photo-1582142306909-195724d33ab0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
    ],
    isNew: true,
    isFeatured: false,
    designerPhilosophy: "Un pont léger comme un trait de plume posé sur l’arête du nez.",
    specs: { lensWidth: 48, bridgeWidth: 21, templeLength: 140 },
    availability: "Bientôt disponible"
  }
];

export const services = [
  {
    id: "conseil-montures",
    number: "01",
    title: "Conseil en Montures Créateur",
    description: "L’analyse morphologique, chromatique et l’étude de votre personnalité pour dénicher la monture qui n’habille pas seulement votre visage, mais révèle votre signature unique.",
    details: [
      "Entretien personnalisé d’une heure",
      "Diagnostic morpho-visagisme",
      "Sélection exclusive parmi nos créateurs indépendants",
      "Conseils colorimétriques de caractère"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    unconfirmedNote: "[À confirmer : conseil en montures personnalisé]"
  },
  {
    id: "examen-vue",
    number: "02",
    title: "Vérification Optique & Précision",
    description: "Un contrôle technique de votre réfraction réalisé par des opticiens diplômés dans notre salle d’examen équipée des dernières technologies de mesures de mise au point.",
    details: [
      "Mesure précise de l’acuité visuelle",
      "Ajustage de la prescription pour écrans ou lecture",
      "Accompagnement de votre ordonnance ophtalmologique",
      "Matériel de mesure haute-résolution"
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    unconfirmedNote: "[À confirmer : protocole d’examen de vue et équipement]"
  },
  {
    id: "ajustage-entretien",
    number: "03",
    title: "Ajustage d’Art & Entretien",
    description: "Chaque visage est asymétrique, chaque monture doit s’y adapter. Nous sculptons à chaud l’acétate et ajustons le métal pour un confort et une tenue parfaits sur le long terme.",
    details: [
      "Cambrage et ajustage du pont et des branches",
      "Nettoyage régulier aux ultrasons offert",
      "Remplacement des plaquettes et polissage des acétates",
      "Service après-vente garanti à vie pour nos montures"
    ],
    image: "https://images.unsplash.com/photo-1582142407894-ec85a1268a4e?auto=format&fit=crop&w=1200&q=80",
    unconfirmedNote: "[À confirmer : ajustage et entretien des matériaux]"
  },
  {
    id: "selection-verres",
    number: "04",
    title: "Sélection de Verres Haute Qualité",
    description: "Partenariat avec les verriers leaders mondiaux pour vous équiper de verres antireflets performants, légers et d’une transparence cristalline exceptionnelle.",
    details: [
      "Verres unifocaux haute définition",
      "Verres progressifs de dernière génération",
      "Traitements anti-lumière bleue, anti-rayures et hydrophobes",
      "Garantie d’adaptation de trois mois"
    ],
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=80",
    unconfirmedNote: "[À confirmer : verriers sélectionnés et garanties verres]"
  },
  {
    id: "lunettes-enfants",
    number: "05",
    title: "Espace Enfants & Solaire",
    description: "Parce que les regards en croissance exigent une protection absolue et robuste, découvrez notre espace dédié aux montures ludiques mais ultra-techniques.",
    details: [
      "Matériaux incassables et flexibles sans charnières métalliques",
      "Verres solaires catégorie 3 et 4",
      "Morphologie adaptée aux nez courts des enfants",
      "Sélection de solaires créateurs adultes exclusives"
    ],
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
    unconfirmedNote: "[À confirmer : lunettes enfants et gammes solaires]"
  }
];

export const settings = {
  name: "AlexSEE",
  address: "28 Rue d’Avron",
  postalCode: "75020",
  city: "Paris",
  metro: "Station Buzenval (Ligne 9) ou Avron (Ligne 2)",
  phone: "+33 (0)1 43 73 12 12",
  instagram: "https://www.instagram.com/alexsee.avron/",
  email: "contact@alexsee.fr",
  hours: [
    { days: "Lundi", hours: "14:00 – 19:30" },
    { days: "Mardi – Vendredi", hours: "10:00 – 13:00, 14:00 – 19:30" },
    { days: "Samedi", hours: "10:00 – 19:30" },
    { days: "Dimanche", hours: "Fermé" }
  ],
  unconfirmedNote: "[À confirmer : horaires d’ouverture définitifs et coordonnées de la boutique]"
};

export const boutiqueImages = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
];
