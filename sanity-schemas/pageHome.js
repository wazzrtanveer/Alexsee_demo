export default {
  name: 'pageHome',
  title: "Page d'Accueil (Landing Page)",
  type: 'document',
  icon: () => '🏠',
  fields: [
    { name: 'heroBadgeText', title: 'Badge Hero (Sous-titre badge)', type: 'string', initialValue: 'Boutique indépendante de créateurs' },
    { name: 'heroHeadline', title: 'Accroche principale (Hero Headline)', type: 'string', initialValue: 'Voir autrement.' },
    { name: 'heroSubtext', title: 'Sous-titre Hero', type: 'text', rows: 2, initialValue: 'Montures de caractère, conseils personnalisés et savoir-faire optique au cœur du 20ème arrondissement. Une signature visuelle authentique.' },
    { name: 'heroImage', title: 'Image Hero Principale', type: 'image', options: { hotspot: true } },
    { name: 'heroHoursText', title: "Horaires d'Ouverture simplifiés (Hero/En-tête)", type: 'string', initialValue: '9h30 - 13h00, 14h00 - 19h30 (Mar-Sam)' },
    { name: 'philosophySectionHeader', title: 'Philosophie - En-tête de section', type: 'string', initialValue: '[ 01 / Notre Philosophie ]' },
    { name: 'philosophyQuote', title: 'Philosophie - Citation', type: 'text', rows: 2, initialValue: '« Chez AlexSEE, une monture ne complète pas simplement un visage.\nElle révèle une attitude. »' },
    { name: 'philosophySubtext', title: 'Philosophie - Descriptif', type: 'text', rows: 3, initialValue: 'Nous sélectionnons des collections nées d’ateliers indépendants, où le design n’est jamais standardisé. Ici, pas de logos clinquants ni de montures industrielles. Nous privilégions la finesse des plaques d’acétate japonaises, la rigueur constructive du titane brut et la sincérité d’un conseil d’opticien expert.' },
    { name: 'philosophyLinkText', title: 'Philosophie - Texte du lien', type: 'string', initialValue: 'Visiter notre atelier rue d’Avron' },
    { name: 'featuredSectionHeader', title: 'Collection - En-tête de section', type: 'string', initialValue: '[ 02 / Créations phares ]' },
    { name: 'featuredTitle', title: 'Collection - Titre de la section', type: 'string', initialValue: 'Le regard dessiné' },
    { name: 'featuredLinkText', title: 'Collection - Texte du lien', type: 'string', initialValue: 'Voir toute la collection' },
    { name: 'manifestoSectionHeader', title: 'Manifeste - En-tête de section', type: 'string', initialValue: '[ Manifeste AlexSEE ]' },
    { name: 'manifestoHeadline', title: 'Manifeste - Titre', type: 'string', initialValue: 'Votre regard mérite mieux qu’un choix standard.' },
    { name: 'manifestoSubtext', title: 'Manifeste - Descriptif', type: 'text', rows: 3, initialValue: 'Dans un monde d’écrans saturés et de production de masse, nous défendons l’histoire de chaque trait, l’élection soigneuse de la couleur, et la précision mathématique du réglage. Les lunettes de créateur écrivent une poésie que le modèle de série ignore.' },
    { name: 'servicesSectionHeader', title: 'Prestations - En-tête de section', type: 'string', initialValue: '[ 03 / Prestations d’exception ]' },
    { name: 'servicesTitle', title: 'Prestations - Titre de la section', type: 'string', initialValue: 'Savoir-faire et garanties' },
    { name: 'servicesSubtext', title: 'Prestations - Descriptif', type: 'text', rows: 2, initialValue: 'De l’examen technique de votre réfraction par nos opticiens diplômés jusqu’au cambrage à chaud personnalisé de vos branches d’acétate, nous assurons un suivi irréprochable et minutieux. Explorez un panel complet et sur mesure.' },
    { name: 'boutiqueSectionHeader', title: 'Boutique - En-tête de section', type: 'string', initialValue: '[ 04 / L’Œil de Buzenval ]' },
    { name: 'boutiqueTitle', title: 'Boutique (Index) - Titre', type: 'string', initialValue: 'L’Atelier\nRue d’Avron' },
    { name: 'boutiqueSubtext', title: 'Boutique (Index) - Descriptif', type: 'text', rows: 3, initialValue: 'Une alcôve de design au milieu du 20e arrondissement parisien. Un cadre de bois brut et de laiton suspendu où l’on prend le temps de dialoguer, d’essayer et d’ajuster. À deux pas du métro Buzenval.' },
    { name: 'boutiqueImage', title: 'Boutique (Index) - Image', type: 'image', options: { hotspot: true } },
    { name: 'ctaSectionHeader', title: 'CTA Fin - En-tête de section', type: 'string', initialValue: '[ Trouver votre monture de caractère ]' },
    { name: 'ctaTitle', title: 'CTA Fin - Titre', type: 'string', initialValue: 'Venez dénicher\nla vôtre.' },
    { name: 'ctaSubtext', title: 'CTA Fin - Descriptif', type: 'text', rows: 2, initialValue: 'Consultez notre lookbook ou prenez rendez-vous pour un accompagnement d’une heure privilégiée en boutique, sans engagement.' },
    { name: 'ctaButton1Text', title: 'CTA Fin - Bouton 1', type: 'string', initialValue: 'Prendre rendez-vous en ligne' },
    { name: 'ctaButton2Text', title: 'CTA Fin - Bouton 2', type: 'string', initialValue: 'Découvrir les créateurs' },
    { name: 'footerDescription', title: 'Pied de page - Descriptif', type: 'text', rows: 2, initialValue: 'Opticien créateur indépendant au cœur du 20e arrondissement parisien. Un regard différent sur la lunetterie.' },
    {
      name: 'showStats',
      title: 'Afficher la section statistiques (Show Stats Section)',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'stat1Value',
      title: 'Statistique 1 - Valeur',
      type: 'string',
      initialValue: '15+'
    },
    {
      name: 'stat1Label',
      title: 'Statistique 1 - Label',
      type: 'string',
      initialValue: "Ans d'expertise optique"
    },
    {
      name: 'stat2Value',
      title: 'Statistique 2 - Valeur',
      type: 'string',
      initialValue: '200+'
    },
    {
      name: 'stat2Label',
      title: 'Statistique 2 - Label',
      type: 'string',
      initialValue: 'Montures en boutique'
    },
    {
      name: 'stat3Value',
      title: 'Statistique 3 - Valeur',
      type: 'string',
      initialValue: '1h'
    },
    {
      name: 'stat3Label',
      title: 'Statistique 3 - Label',
      type: 'string',
      initialValue: 'Accompagnement personnalisé'
    },
    {
      name: 'seo',
      title: 'Référencement (SEO)',
      type: 'seo'
    }
  ]
}
