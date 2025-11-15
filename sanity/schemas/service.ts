import { defineField, defineType } from './utils';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'summary', type: 'text', rows: 3 }),
    defineField({ name: 'outcomes', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'deliverables', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'idealClients', type: 'string' }),
    defineField({ name: 'orderRank', type: 'number', initialValue: 0 }),
  ],
});
