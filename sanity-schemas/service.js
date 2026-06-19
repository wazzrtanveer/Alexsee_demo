// Sanity schema for Services
export default {
  name: 'service',
  title: 'Prestations (Services)',
  type: 'document',
  icon: () => '🔬',
  fields: [
    {
      name: 'number',
      title: 'Numéro d\'ordre',
      type: 'string',
      description: 'Display number e.g. 01, 02, 03...',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Titre du Service',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    },
    {
      name: 'details',
      title: 'Points clés (Bullet points)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features of the service, shown as a checklist',
      validation: Rule => Rule.min(2).max(6),
    },
    {
      name: 'image',
      title: 'Photo Illustrative',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'unconfirmedNote',
      title: 'Note interne (non-publiée)',
      type: 'string',
      description: 'Internal note shown visually as a small label during development'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'number',
      media: 'image'
    }
  }
}
