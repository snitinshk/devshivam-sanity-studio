import {defineField, defineType} from 'sanity'

const bodyBlocks = [
  {
    type: 'block' as const,
    styles: [
      {title: 'Normal', value: 'normal'},
      {title: 'Heading', value: 'h2'},
      {title: 'Subheading', value: 'h3'},
    ],
    lists: [
      {title: 'Bullet', value: 'bullet'},
      {title: 'Numbered', value: 'number'},
    ],
  },
]

const portalGuide = defineType({
  name: 'portalGuide',
  title: 'Portal guide',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: bodyBlocks,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

export default portalGuide
