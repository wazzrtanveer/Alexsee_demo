// AlexSEE Sanity Studio Configuration
// This is the Sanity Studio configuration for managing the AlexSEE optician website

import {buildLegacyTheme, defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
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

export default defineConfig({
  name: 'alexsee',
  title: 'AlexSEE — Studio CMS',

  projectId: '4bz7y7k4',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: studioTheme,
})
