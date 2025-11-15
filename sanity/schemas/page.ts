import { defineField, defineType } from './utils';

export default defineType({
  name: 'page',
  title: 'Custom Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'modules', type: 'array', of: [{ type: 'block' }] }),
  ],
});
