import { defineField, defineType } from './utils';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'text', rows: 3 }),
    defineField({ name: 'author', type: 'string' }),
    defineField({ name: 'role', type: 'string' }),
  ],
});
