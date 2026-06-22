// Reusable SEO Fields Schema
export default {
  name: 'seo',
  title: 'Référencement (SEO)',
  type: 'object',
  fields: [
    {
      name: 'seoTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'The meta title tag. Advising a length of 50-60 characters.',
      validation: Rule => Rule.max(60).warning('Keep it under 60 characters to avoid truncation in Google results.')
    },
    {
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'The meta description tag. Advising a length of 150-160 characters.',
      validation: Rule => Rule.max(160).warning('Keep it under 160 characters to avoid truncation in Google results.')
    },
    {
      name: 'seoImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Acts as the preview when links are shared on social media apps like WhatsApp and Facebook.',
      options: {
        hotspot: true
      }
    }
  ]
}
