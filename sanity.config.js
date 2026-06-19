// AlexSEE Sanity Studio Configuration
// This is the Sanity Studio configuration for managing the AlexSEE optician website

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity-schemas/schema'

export default defineConfig({
  name: 'alexsee',
  title: 'AlexSEE — Studio CMS',

  // Replace with your actual project ID from https://sanity.io/manage
  projectId: 'your_project_id_here',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
