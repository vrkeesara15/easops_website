import { defineField, defineType } from './utils';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule: any) => rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'industry', type: 'string' }),
    defineField({ name: 'summary', type: 'text', rows: 3 }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'context', type: 'text', rows: 4 }),
    defineField({ name: 'challenge', type: 'text', rows: 4 }),
    defineField({ name: 'solution', type: 'text', rows: 4 }),
    defineField({ name: 'outcomes', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
  ],
});
