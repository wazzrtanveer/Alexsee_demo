// Sanity schema for Site Settings (Singleton)
export default {
  name: 'settings',
  title: 'Paramètres de la Boutique',
  type: 'document',
  icon: () => '⚙️',
  // Singleton — only one document should exist
  __experimental_actions: ['update', 'publish'],
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
  ],
  preview: {
    select: { title: 'name' }
  }
}
