import { defineField, defineType } from './utils';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule: any) => rule.required() }),
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'description', type: 'text', rows: 4 }),
    defineField({ name: 'highlights', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'cta', type: 'string' }),
    defineField({ name: 'orderRank', type: 'number', initialValue: 0 }),
  ],
});
