import { defineField, defineType } from 'sanity'

export const pptxEmbed = defineType({
  name: 'pptxEmbed',
  title: 'PowerPoint Embed',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for the presentation',
    }),
    defineField({
      name: 'file',
      title: 'PowerPoint File',
      type: 'file',
      options: {
        accept: '.pptx,.ppt',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled Presentation',
        subtitle: 'PowerPoint Presentation',
        media: () => '📊',
      }
    },
  },
})
