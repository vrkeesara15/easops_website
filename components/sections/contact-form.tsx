'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email('Valid email required'),
  company: z.string().min(2, { message: 'Company is required' }),
  role: z.string().min(2, { message: 'Role is required' }),
  budget: z.enum(['<50k', '50-150k', '150k+', 'Exploring']),
  timeline: z.string().min(2, { message: 'Timeline required' }),
  notes: z.optional(z.string()),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    defaultValues: { budget: 'Exploring' } as Partial<FormValues>,
  });
  const [serverMessage, setServerMessage] = useState('');

  const onSubmit = handleSubmit(async (data) => {
    const validation = schema.safeParse(data);
    if (!validation.success) {
      setServerMessage('Please review the fields.');
      return;
    }
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validation.data),
    });
    if (response.ok) {
      setServerMessage('We received your note. Expect a reply within 24 hours.');
      reset();
    } else {
      setServerMessage('Something went wrong. Email team@easops.ai instead.');
    }
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          Name
          <input {...register('name')} placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Email
          <input type="email" {...register('email')} placeholder="you@company.com" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Company
          <input {...register('company')} placeholder="Company name" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Role
          <input {...register('role')} placeholder="Head of Product" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Budget
          <select {...register('budget')}>
            <option value="<50k">Under $50k</option>
            <option value="50-150k">$50k – $150k</option>
            <option value="150k+">$150k+</option>
            <option value="Exploring">Exploring</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Timeline
          <input {...register('timeline')} placeholder="4-6 weeks" />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm">
        Project notes
        <textarea {...register('notes')} rows={4} placeholder="What should we know?" />
      </label>
      <button className="btn btn-primary" type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? 'Sending…' : 'Send message'}
      </button>
      {serverMessage && <p className="text-sm text-muted">{serverMessage}</p>}
    </form>
  );
}
