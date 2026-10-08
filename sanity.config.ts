import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {indiaXguideSchemaTypes} from './schemaTypes/indiaXguide'
import {krishivlabsSchemaTypes} from './schemaTypes/krishivlabs'

export default defineConfig([
  {
    name: 'krishivlabs-blogs',
    title: 'krishivlabs-blogs',
    basePath: '/krishivlabs-blogs',
    projectId: 'o58x9hzu',
    dataset: 'production',
    plugins: [structureTool(), visionTool()],
    schema: {types: krishivlabsSchemaTypes},
  },
  {
    name: 'indiaXguide',
    title: 'indiaXguide',
    basePath: '/indiaxguide',
    projectId: 'pd1mib79',
    dataset: 'production',
    plugins: [structureTool(), visionTool()],
    schema: {types: indiaXguideSchemaTypes},
  },
])
