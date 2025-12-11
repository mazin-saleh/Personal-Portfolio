import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {latexInput} from 'sanity-plugin-latex-input'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Personal Portfolio',

  projectId: '6abdobdy',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), latexInput()],

  schema: {
    types: schemaTypes,
  },
})
