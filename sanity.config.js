// AlexSEE Sanity Studio Configuration
// This is the Sanity Studio configuration for managing the AlexSEE optician website

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity-schemas/schema'

export default defineConfig({
  name: 'alexsee',
  title: 'AlexSEE — Studio CMS',

  projectId: '4bz7y7k4',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
