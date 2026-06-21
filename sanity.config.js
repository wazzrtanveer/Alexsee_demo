// AlexSEE Sanity Studio Configuration
// This is the Sanity Studio configuration for managing the AlexSEE optician website

import {buildLegacyTheme, defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool, defineDocuments} from 'sanity/presentation'
import {schemaTypes} from './sanity-schemas/schema'

const studioTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': '#0a0a0a',
  '--white': '#ffffff',
  '--gray': '#8e8e8e',
  '--gray-base': '#8e8e8e',
  '--component-bg': '#f5f2ed',
  '--component-text-color': '#0a0a0a',

  /* Brand colors */
  '--brand-primary': '#2e5bff',

  /* State colors */
  '--state-info-color': '#2e5bff',

  /* Navbar */
  '--main-navigation-color': '#0a0a0a',
  '--main-navigation-color--inverted': '#f5f2ed',
  '--focus-color': '#2e5bff',
})

// Fallback to our live Cloudflare Pages URL if the local environment variable isn't set
const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'https://alexis-shop.pages.dev'

export default defineConfig({
  name: 'alexsee',
  title: 'AlexSEE — Studio CMS',

  projectId: 'np6apqtr',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu du Site')
          .items([
            S.listItem()
              .title('Paramètres de la Boutique')
              .id('settings')
              .icon(() => '⚙️')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings')
              ),
            S.divider(),
            S.listItem()
              .title("Page d'Accueil (Landing Page)")
              .id('pageHome')
              .icon(() => '🏠')
              .child(
                S.document()
                  .schemaType('pageHome')
                  .documentId('pageHome')
              ),
            S.listItem()
              .title('Page Collection')
              .id('pageCollections')
              .icon(() => '🕶️')
              .child(
                S.document()
                  .schemaType('pageCollections')
                  .documentId('pageCollections')
              ),
            S.listItem()
              .title('Page Boutique')
              .id('pageBoutique')
              .icon(() => '🏪')
              .child(
                S.document()
                  .schemaType('pageBoutique')
                  .documentId('pageBoutique')
              ),
            S.listItem()
              .title('Page Savoir-Faire (Services)')
              .id('pageServices')
              .icon(() => '🔬')
              .child(
                S.document()
                  .schemaType('pageServices')
                  .documentId('pageServices')
              ),
            S.listItem()
              .title('Page Rendez-vous (Contact)')
              .id('pageContact')
              .icon(() => '📅')
              .child(
                S.document()
                  .schemaType('pageContact')
                  .documentId('pageContact')
              ),
            S.divider(),
            S.documentTypeListItem('frame').title('Montures (Eyeglasses Frames)').icon(() => '👓'),
            S.documentTypeListItem('service').title('Services').icon(() => '🛠️'),
          ])
    }),
    visionTool(),
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
      allowedOrigins: ['http://localhost:4321', 'https://alexis-shop.pages.dev'],
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/',
            type: 'pageHome',
          },
          {
            route: '/boutique',
            type: 'pageBoutique',
          },
          {
            route: '/boutique/',
            type: 'pageBoutique',
          },
          {
            route: '/collections',
            type: 'pageCollections',
          },
          {
            route: '/collections/',
            type: 'pageCollections',
          },
          {
            route: '/services',
            type: 'pageServices',
          },
          {
            route: '/services/',
            type: 'pageServices',
          },
          {
            route: '/contact',
            type: 'pageContact',
          },
          {
            route: '/contact/',
            type: 'pageContact',
          },
          {
            route: '/frame/:slug',
            filter: '_type == "frame" && slug.current == $slug',
          },
          {
            route: '/frame/:slug/',
            filter: '_type == "frame" && slug.current == $slug',
          },
        ]),
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  theme: studioTheme,
})
