import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { createDataAttribute } from '@sanity/visual-editing';

const isDev = import.meta.env.DEV;

export function cleanStega(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/[\u200B-\u200D\uFEFF]/g, '');
}

export const dataAttribute = ({ id, type, path }) => {
  if (!id || !type) return undefined;
  const targetPath = path || '_id';
  const attr = createDataAttribute({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '4bz7y7k4',
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
    baseUrl: '/admin',
    id,
    type,
  });
  return attr(targetPath).toString();
};

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '4bz7y7k4',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: !isDev, // Disable CDN during development/preview for instant draft updates
  apiVersion: '2024-06-01',
  token: import.meta.env.SANITY_API_READ_TOKEN || import.meta.env.PUBLIC_SANITY_READ_TOKEN || '',
  perspective: isDev ? 'drafts' : 'published',
  stega: {
    enabled: isDev, // Only enable stega in development — encodes content source maps into strings
    studioUrl: '/admin',
  },
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source) {
  if (!source) return '';
  if (typeof source === 'string') return source;
  try {
    return builder.image(source).url();
  } catch (e) {
    console.error("Error building Sanity image URL:", e);
    return '';
  }
}

// GROQ Queries
export const FRAMES_QUERY = `*[_type == "frame"] {
  _id,
  _type,
  "id": slug.current,
  brand,
  model,
  type,
  gender,
  material,
  color,
  description,
  price,
  images,
  isNew,
  isFeatured,
  designerPhilosophy,
  specs,
  availability
}`;

export const SERVICES_QUERY = `*[_type == "service"] | order(number asc) {
  _id,
  _type,
  "id": slug.current,
  number,
  title,
  description,
  details,
  image,
  unconfirmedNote
}`;

export const SETTINGS_QUERY = `*[_type == "settings"][0] {
  _id,
  _type,
  name,
  address,
  postalCode,
  city,
  metro,
  phone,
  instagram,
  email,
  hours[] {
    days,
    hours
  },
  unconfirmedNote,
  boutiqueImages,
  heroHeadline,
  heroSubtext,
  heroImage,
  metaDescription,
  navHomeLabel,
  navCollectionsLabel,
  navServicesLabel,
  navBoutiqueLabel,
  navContactLabel,
  navButtonText,
  philosophyQuote,
  philosophySubtext,
  philosophyLinkText,
  featuredTitle,
  featuredLinkText,
  manifestoHeadline,
  manifestoSubtext,
  servicesTitle,
  servicesSubtext,
  boutiqueTitle,
  boutiqueSubtext,
  boutiqueImage,
  ctaTitle,
  ctaSubtext,
  ctaButton1Text,
  ctaButton2Text,
  footerDescription,
  boutiquePageTitle,
  boutiquePageSubtext,
  boutiqueMetroTitle,
  boutiqueMetroDetails,
  servicesPageTitle,
  servicesPageSubtext,
  servicesNoteTitle,
  servicesNoteSubtext,
  contactPageTitle,
  contactPageSubtext,
  contactPageContactSubtext,
  contactPageAccessSubtext,
  contactFormTitle,
  contactFormSubtitle,
  contactFormButtonText
}`;
