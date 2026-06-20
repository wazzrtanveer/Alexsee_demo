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
  useCdn: false, // Disable CDN to ensure fresh updates
  apiVersion: '2024-06-01',
  token: import.meta.env.SANITY_API_READ_TOKEN || import.meta.env.PUBLIC_SANITY_READ_TOKEN || '',
  perspective: 'published', // Will be dynamically overridden to drafts inside the Presentation Tool
  stega: {
    enabled: true, // Enabled for both local and deployed environments to support visual editing
    studioUrl: '/studio',
    filter: (props) => {
      const path = props.sourcePath || props.source?.path;
      if (path && path.length > 0) {
        const last = path[path.length - 1];
        if (last === 'number' || last === 'num') {
          return false;
        }
      }
      return props.filterDefault ? props.filterDefault(props) : true;
    }
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
  socialLinks[] {
    _key,
    platform,
    url
  },
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
  manifestoStat1Value,
  manifestoStat1Label,
  manifestoStat2Value,
  manifestoStat2Label,
  stat1Value,
  stat1Label,
  stat2Value,
  stat2Label,
  stat3Value,
  stat3Label,
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
  contactFormButtonText,
  favicon,
  logoImage,
  logoText,
  headerLinks[] {
    _key,
    label,
    path,
    num,
    image
  },
  footerPagesTitle,
  footerPagesLinks[] {
    _key,
    label,
    path
  },
  footerBoutiqueTitle,
  footerLegalLinks[] {
    _key,
    label,
    path
  },
  footerCopyrightText,
  footerLocationText,
  footerBackgroundText
}`;

export const PAGE_HOME_QUERY = `*[_type == "pageHome"][0] {
  _id,
  _type,
  heroHeadline,
  heroSubtext,
  heroImage,
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
  footerDescription
}`;

export const PAGE_COLLECTIONS_QUERY = `*[_type == "pageCollections"][0] {
  _id,
  _type,
  title,
  subtext,
  filters[] {
    _key,
    label,
    filterType,
    value
  }
}`;

export const PAGE_BOUTIQUE_QUERY = `*[_type == "pageBoutique"][0] {
  _id,
  _type,
  title,
  subtext,
  metroTitle,
  metroDetails
}`;

export const PAGE_SERVICES_QUERY = `*[_type == "pageServices"][0] {
  _id,
  _type,
  title,
  subtext,
  noteTitle,
  noteSubtext
}`;

export const PAGE_CONTACT_QUERY = `*[_type == "pageContact"][0] {
  _id,
  _type,
  title,
  subtext,
  contactSubtext,
  accessSubtext,
  formButtonText
}`;

