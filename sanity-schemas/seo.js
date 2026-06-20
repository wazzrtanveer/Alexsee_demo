// Reusable SEO Fields Schema
export default {
  name: 'seo',
  title: 'Référencement (SEO)',
  type: 'object',
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO Page Title',
      type: 'string',
      description: 'The meta title tag. Keep it between 50-60 characters for optimal display on search engines.',
      validation: Rule => Rule.max(60).warning('Keep it under 60 characters to avoid truncation in Google results.')
    },
    {
      name: 'seoDescription',
      title: 'SEO Page Description',
      type: 'text',
      rows: 3,
      description: 'The meta description tag. Keep it between 150-160 characters to optimize click-through rate.',
      validation: Rule => Rule.max(160).warning('Keep it under 160 characters to avoid truncation in Google results.')
    }
  ]
}
