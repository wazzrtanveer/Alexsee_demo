// Sanity schema for Eyeglasses Frames
export default {
  name: 'frame',
  title: 'Montures (Eyeglasses Frames)',
  type: 'document',
  icon: () => '👓',
  fields: [
    {
      name: 'brand',
      title: 'Marque (Brand)',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'e.g. AlexSEE Signature, Nackymade x AlexSEE'
    },
    {
      name: 'model',
      title: 'Modèle (Model Name)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'model', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type de monture',
      type: 'string',
      options: {
        list: [
          { title: 'Optique', value: 'Optique' },
          { title: 'Solaire', value: 'Solaire' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'gender',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          { title: 'Homme', value: 'Homme' },
          { title: 'Femme', value: 'Femme' },
          { title: 'Unisex', value: 'Unisex' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'material',
      title: 'Matière (Material)',
      type: 'string',
      description: 'e.g. Bio-acétate sculpté à la main, Titane brut japonais'
    },
    {
      name: 'color',
      title: 'Coloris (Color)',
      type: 'string',
      description: 'e.g. Ambre Translucide'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    },
    {
      name: 'designerPhilosophy',
      title: 'Philosophie du Créateur',
      type: 'text',
      rows: 2,
      description: 'A quote showcasing the designer\'s vision. Will appear as italic pull-quote.'
    },
    {
      name: 'price',
      title: 'Prix (Price)',
      type: 'string',
      description: 'e.g. 340 €'
    },
    {
      name: 'images',
      title: 'Images (2 required)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: Rule => Rule.required().min(2).max(2),
      description: 'First image = product shot, Second image = lifestyle/model shot'
    },
    {
      name: 'isNew',
      title: 'Nouveauté ?',
      type: 'boolean',
      description: 'Show "Nouveau" badge on product card'
    },
    {
      name: 'isFeatured',
      title: 'Mis en avant ?',
      type: 'boolean',
      description: 'Feature on the homepage hero carousel'
    },
    {
      name: 'availability',
      title: 'Disponibilité',
      type: 'string',
      options: {
        list: [
          { title: 'En boutique', value: 'En boutique' },
          { title: 'Sur commande', value: 'Sur commande' },
          { title: 'Bientôt disponible', value: 'Bientôt disponible' },
          { title: 'Épuisé', value: 'Épuisé' },
        ],
      },
    },
    {
      name: 'specs',
      title: 'Dimensions (Specs)',
      type: 'object',
      fields: [
        {
          name: 'lensWidth',
          title: 'Calibre Verre (mm)',
          type: 'number',
          description: 'Lens width in mm'
        },
        {
          name: 'bridgeWidth',
          title: 'Largeur Pont (mm)',
          type: 'number',
          description: 'Bridge width in mm'
        },
        {
          name: 'templeLength',
          title: 'Longueur Branches (mm)',
          type: 'number',
          description: 'Temple/arm length in mm'
        },
      ],
    },
    {
      name: 'seo',
      title: 'Référencement (SEO)',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'model',
      subtitle: 'brand',
      media: 'images.0'
    }
  },
  orderings: [
    {
      title: 'Nouveautés d\'abord',
      name: 'isNewDesc',
      by: [{ field: 'isNew', direction: 'desc' }]
    }
  ]
}
