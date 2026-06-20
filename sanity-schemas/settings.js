// Sanity schema for Site Settings (Singleton)
export default {
  name: 'settings',
  title: 'Paramètres de la Boutique',
  type: 'document',
  icon: () => '⚙️',
  // Singleton — only one document should exist
  fields: [
    {
      name: 'name',
      title: 'Nom de la Boutique',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'AlexSEE'
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
      initialValue: "28 Rue d'Avron"
    },
    {
      name: 'postalCode',
      title: 'Code Postal',
      type: 'string',
      initialValue: '75020'
    },
    {
      name: 'city',
      title: 'Ville',
      type: 'string',
      initialValue: 'Paris'
    },
    {
      name: 'metro',
      title: 'Accès Métro',
      type: 'string',
      description: 'Metro station info',
      initialValue: 'Station Buzenval (Ligne 9) ou Avron (Ligne 2)'
    },
    {
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
      initialValue: '+33 (0)1 43 73 12 12'
    },
    {
      name: 'email',
      title: 'E-mail de Contact',
      type: 'string',
      initialValue: 'contact@alexsee.fr'
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      initialValue: 'https://www.instagram.com/alexsee.avron/'
    },
    {
      name: 'hours',
      title: "Horaires d'Ouverture",
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'days',
              title: 'Jours',
              type: 'string',
              description: 'e.g. Lundi, Mardi – Vendredi'
            },
            {
              name: 'hours',
              title: 'Heures',
              type: 'string',
              description: 'e.g. 10:00 – 19:30 or Fermé'
            }
          ],
          preview: {
            select: { title: 'days', subtitle: 'hours' }
          }
        }
      ]
    },
    {
      name: 'heroHeadline',
      title: 'Accroche principale (Hero Headline)',
      type: 'string',
      description: 'The main headline on the homepage hero',
      initialValue: 'Voir autrement.'
    },
    {
      name: 'heroSubtext',
      title: 'Sous-titre Hero',
      type: 'text',
      rows: 2,
      initialValue: 'Montures de caractère, conseils personnalisés et savoir-faire optique au cœur du 20ème arrondissement. Une signature visuelle authentique.'
    },
    {
      name: 'boutiqueImages',
      title: 'Photos Boutique (3 max)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: Rule => Rule.max(3),
      description: 'Images shown in the rotating slideshow on the Boutique page'
    },
    {
      name: 'heroImage',
      title: 'Image Hero Principale',
      type: 'image',
      options: { hotspot: true },
      description: 'The editorial portrait shown in the homepage hero'
    },
    {
      name: 'unconfirmedNote',
      title: 'Note interne (non publiée)',
      type: 'string',
      description: 'Internal note about unconfirmed details',
      initialValue: "[À confirmer : horaires d'ouverture définitifs et coordonnées de la boutique]"
    },
    {
      name: 'metaTitle',
      title: 'SEO — Titre de page',
      type: 'string',
      initialValue: 'AlexSEE — Opticien Créateur Paris 20e | Montures de Caractère'
    },
    {
      name: 'metaDescription',
      title: 'SEO — Meta Description',
      type: 'text',
      rows: 2,
      initialValue: 'AlexSEE, opticien créateur indépendant au 28 Rue d\'Avron, Paris 20e. Montures de caractère, conseil personnalisé et savoir-faire artisanal. Prenez rendez-vous.'
    },
    // Navigation items
    {
      name: 'navHomeLabel',
      title: 'Menu - Label Accueil',
      type: 'string',
      initialValue: 'Accueil Opticien'
    },
    {
      name: 'navCollectionsLabel',
      title: 'Menu - Label Collections',
      type: 'string',
      initialValue: 'Collection'
    },
    {
      name: 'navServicesLabel',
      title: 'Menu - Label Savoir-Faire',
      type: 'string',
      initialValue: 'Savoir-Faire'
    },
    {
      name: 'navBoutiqueLabel',
      title: 'Menu - Label Boutique',
      type: 'string',
      initialValue: 'La Boutique'
    },
    {
      name: 'navContactLabel',
      title: 'Menu - Label Contact',
      type: 'string',
      initialValue: 'Prendre rendez-vous'
    },
    {
      name: 'navButtonText',
      title: 'Bouton Header - Prendre RDV',
      type: 'string',
      initialValue: 'Rendez-vous'
    },
    // New fields for Landing page and other sections editability
    {
      name: 'philosophyQuote',
      title: 'Philosophie - Citation',
      type: 'text',
      rows: 2,
      initialValue: '« Chez AlexSEE, une monture ne complète pas simplement un visage.\nElle révèle une attitude. »'
    },
    {
      name: 'philosophySubtext',
      title: 'Philosophie - Descriptif',
      type: 'text',
      rows: 3,
      initialValue: 'Nous sélectionnons des collections nées d’ateliers indépendants, où le design n’est jamais standardisé. Ici, pas de logos clinquants ni de montures industrielles. Nous privilégions la finesse des plaques d’acétate japonaises, la rigueur constructive du titane brut et la sincérité d’un conseil d’opticien expert.'
    },
    {
      name: 'philosophyLinkText',
      title: 'Philosophie - Texte du lien',
      type: 'string',
      initialValue: 'Visiter notre atelier rue d’Avron'
    },
    {
      name: 'featuredTitle',
      title: 'Collection - Titre de la section',
      type: 'string',
      initialValue: 'Le regard dessiné'
    },
    {
      name: 'featuredLinkText',
      title: 'Collection - Texte du lien',
      type: 'string',
      initialValue: 'Voir toute la collection'
    },
    {
      name: 'manifestoHeadline',
      title: 'Manifeste - Titre',
      type: 'string',
      initialValue: 'Votre regard mérite mieux qu’un choix standard.'
    },
    {
      name: 'manifestoSubtext',
      title: 'Manifeste - Descriptif',
      type: 'text',
      rows: 3,
      initialValue: 'Dans un monde d’écrans saturés et de production de masse, nous défendons l’histoire de chaque trait, l’élection soigneuse de la couleur, et la précision mathématique du réglage. Les lunettes de créateur écrivent une poésie que le modèle de série ignore.'
    },
    {
      name: 'servicesTitle',
      title: 'Prestations - Titre de la section',
      type: 'string',
      initialValue: 'Savoir-faire et garanties'
    },
    {
      name: 'servicesSubtext',
      title: 'Prestations - Descriptif',
      type: 'text',
      rows: 2,
      initialValue: 'De l’examen technique de votre réfraction par nos opticiens diplômés jusqu’au cambrage à chaud personnalisé de vos branches d’acétate, nous assurons un suivi irréprochable et minutieux. Explorez un panel complet et sur mesure.'
    },
    {
      name: 'boutiqueTitle',
      title: 'Boutique (Index) - Titre',
      type: 'string',
      initialValue: 'L’Atelier\nRue d’Avron'
    },
    {
      name: 'boutiqueSubtext',
      title: 'Boutique (Index) - Descriptif',
      type: 'text',
      rows: 3,
      initialValue: 'Une alcôve de design au milieu du 20e arrondissement parisien. Un cadre de bois brut et de laiton suspendu où l’on prend le temps de dialoguer, d’essayer et d’ajuster. À deux pas du métro Buzenval.'
    },
    {
      name: 'boutiqueImage',
      title: 'Boutique (Index) - Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'ctaTitle',
      title: 'CTA Fin - Titre',
      type: 'string',
      initialValue: 'Venez dénicher\nla vôtre.'
    },
    {
      name: 'ctaSubtext',
      title: 'CTA Fin - Descriptif',
      type: 'text',
      rows: 2,
      initialValue: 'Consultez notre lookbook ou prenez rendez-vous pour un accompagnement d’une heure privilégiée en boutique, sans engagement.'
    },
    {
      name: 'ctaButton1Text',
      title: 'CTA Fin - Bouton 1',
      type: 'string',
      initialValue: 'Prendre rendez-vous en ligne'
    },
    {
      name: 'ctaButton2Text',
      title: 'CTA Fin - Bouton 2',
      type: 'string',
      initialValue: 'Découvrir les créateurs'
    },
    {
      name: 'footerDescription',
      title: 'Pied de page - Descriptif',
      type: 'text',
      rows: 2,
      initialValue: 'Opticien créateur indépendant au cœur du 20e arrondissement parisien. Un regard différent sur la lunetterie.'
    },
    // Boutique page specific fields
    {
      name: 'boutiquePageTitle',
      title: 'Page Boutique - Titre',
      type: 'string',
      initialValue: 'L’Atelier Paris 20e'
    },
    {
      name: 'boutiquePageSubtext',
      title: 'Page Boutique - Descriptif',
      type: 'text',
      rows: 2,
      initialValue: 'Une escale optique intime située rue d’Avron. Venez prendre le temps de dialoguer autour de vos mesures et choisir des montures sous une lumière naturelle.'
    },
    {
      name: 'boutiqueMetroTitle',
      title: 'Page Boutique - Titre Métro',
      type: 'string',
      initialValue: 'Ligne 9 ou Ligne 2'
    },
    {
      name: 'boutiqueMetroDetails',
      title: 'Page Boutique - Métro Descriptif',
      type: 'text',
      rows: 2,
      initialValue: 'Station Buzenval (L9) à 3 min à pied.\nStation Avron (M2) à 6 min à pied.'
    },
    // Services page specific fields
    {
      name: 'servicesPageTitle',
      title: 'Page Prestations - Titre',
      type: 'string',
      initialValue: 'L’Art de l’Optique'
    },
    {
      name: 'servicesPageSubtext',
      title: 'Page Prestations - Descriptif',
      type: 'text',
      rows: 2,
      initialValue: 'Chaque œil est unique, chaque réglage exige la perfection. Découvrez nos services sur-mesure au sein de notre atelier parisien.'
    },
    {
      name: 'servicesNoteTitle',
      title: 'Page Prestations - Titre Note',
      type: 'string',
      initialValue: "Note d'art direction"
    },
    {
      name: 'servicesNoteSubtext',
      title: 'Page Prestations - Note Descriptif',
      type: 'text',
      rows: 2,
      initialValue: 'Remplacement de ces visuels par des clichés de votre atelier et d’essayages de montures réelles lors de la session de shooting photo.'
    },
    // Contact page specific fields
    {
      name: 'contactPageTitle',
      title: 'Page Contact - Titre',
      type: 'string',
      initialValue: 'Prendre rendez-vous'
    },
    {
      name: 'contactPageSubtext',
      title: 'Page Contact - Descriptif',
      type: 'text',
      rows: 2,
      initialValue: 'Un moment d\'une heure privilégiée pour choisir votre monture et réaliser vos mesures optiques. Réservation en ligne ou par téléphone.'
    },
    {
      name: 'contactPageContactSubtext',
      title: 'Page Contact - Descriptif Renseignements',
      type: 'text',
      rows: 2,
      initialValue: 'Pour des demandes immédiates ou l’annulation d’un rendez-vous planifié, n’hésitez pas à appeler notre équipe directement aux heures d\'ouverture régulières de notre atelier parisien.'
    },
    {
      name: 'contactPageAccessSubtext',
      title: 'Page Contact - Descriptif Accès',
      type: 'text',
      rows: 2,
      initialValue: 'Situé à l\'angle de la rue d\'Avron, proche de Buzenval. Stationnement possible dans les rues adjacentes.'
    },
    {
      name: 'contactFormTitle',
      title: 'Page Contact - Titre Formulaire',
      type: 'string',
      initialValue: 'Formulaire de Réservation'
    },
    {
      name: 'contactFormSubtitle',
      title: 'Page Contact - Sous-titre Formulaire',
      type: 'string',
      initialValue: 'Choisissez votre créneau horaire'
    },
    {
      name: 'contactFormButtonText',
      title: 'Page Contact - Bouton Formulaire',
      type: 'string',
      initialValue: 'Confirmer mon rendez-vous'
    },
    {
      name: 'favicon',
      title: 'Favicon du Site',
      type: 'image',
      description: 'Favicon image (upload a square PNG or SVG)',
      options: { hotspot: false }
    },
    {
      name: 'logoImage',
      title: 'Logo (Image)',
      type: 'image',
      description: 'Upload a custom logo image to override the default SVG logo',
      options: { hotspot: false }
    },
    {
      name: 'logoText',
      title: 'Texte du Logo',
      type: 'string',
      description: 'Alternative logo text (default is "AlexSEE")',
      initialValue: 'AlexSEE'
    },
    {
      name: 'headerLinks',
      title: 'Liens de Navigation (Header)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navLink',
          title: 'Lien de navigation',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() },
            { name: 'path', title: 'Chemin / URL (ex: /collections)', type: 'string', validation: Rule => Rule.required() },
            { name: 'num', title: 'Numéro (ex: 01)', type: 'string' },
            { name: 'image', title: 'Image de survol (Preview Image)', type: 'image', options: { hotspot: true } }
          ]
        }
      ]
    },
    {
      name: 'footerPagesTitle',
      title: 'Footer — Titre Section Pages',
      type: 'string',
      initialValue: '[ Pages ]'
    },
    {
      name: 'footerPagesLinks',
      title: 'Footer — Liens Section Pages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() },
            { name: 'path', title: 'Chemin / URL', type: 'string', validation: Rule => Rule.required() }
          ]
        }
      ]
    },
    {
      name: 'footerBoutiqueTitle',
      title: 'Footer — Titre Section Boutique',
      type: 'string',
      initialValue: '[ Boutique ]'
    },
    {
      name: 'footerLegalLinks',
      title: 'Footer — Liens Légaux',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() },
            { name: 'path', title: 'Chemin / URL', type: 'string', validation: Rule => Rule.required() }
          ]
        }
      ]
    },
    {
      name: 'footerCopyrightText',
      title: 'Footer — Texte Copyright',
      type: 'string',
      initialValue: 'Tous droits réservés.'
    },
    {
      name: 'footerLocationText',
      title: 'Footer — Texte Localisation',
      type: 'string',
      initialValue: 'Paris XX, France'
    },
    {
      name: 'footerBackgroundText',
      title: 'Footer — Grand texte de fond',
      type: 'string',
      initialValue: 'AlexSEE'
    }
  ],
  preview: {
    select: { title: 'name' }
  }
}
