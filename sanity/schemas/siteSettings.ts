import { defineField, defineType } from './utils';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCta', type: 'string' }),
        defineField({ name: 'secondaryCta', type: 'string' }),
      ],
    }),
    defineField({
      name: 'process',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
          name: 'steps',
          type: 'array',
          of: [
            defineField({
              name: 'step',
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'text', rows: 2 }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
