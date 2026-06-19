import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '4bz7y7k4',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
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
  "id": slug.current,
  number,
  title,
  description,
  details,
  image,
  unconfirmedNote
}`;

export const SETTINGS_QUERY = `*[_type == "settings"][0] {
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
  metaTitle,
  metaDescription
}`;
