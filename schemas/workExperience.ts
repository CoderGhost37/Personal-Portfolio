import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startingDate',
      title: 'Starting Date',
      type: 'string',
      placeholder: 'Month YYYY',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'currentlyWorking',
      title: 'Currently Working Here',
      type: 'boolean',
    }),
    defineField({
      name: 'endingDate',
      title: 'Ending Date',
      type: 'string',
      placeholder: 'Month YYYY',
    }),
    defineField({
      name: 'imgBg',
      title: 'Image background',
      type: 'string',
    }),
    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'text',
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
