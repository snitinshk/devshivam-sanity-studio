import {defineField, defineType} from 'sanity'

const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Shown in Google results (max 46 chars so the site can append \' | KrishivLabs\')',
      validation: (Rule) => Rule.max(46).warning('Keep under 46 characters to leave room for \' | KrishivLabs\' suffix'),
      fieldset: 'seo',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Blog card preview and meta description (recommended 120-160 chars)',
      validation: (Rule) => Rule.max(160).warning('Recommended to keep under 160 characters for optimal meta description length'),
      fieldset: 'seo',
    }),
  ],
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: {collapsible: true, collapsed: false},
    },
  ],
})

export default blogPost
