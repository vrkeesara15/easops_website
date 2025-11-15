'use client';

import { useState } from 'react';

export function ContactForm({ reasons, offices }) {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      setStatus('loading');
      setMessage('');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Unable to submit form');
      }

      setStatus('success');
      setMessage('Thanks for reaching out. Our team will connect within two business days.');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Something went wrong. Please try again or email hello@easops.ai.');
    }
  }

  return (
    <div className="section contact-page">
      <span className="tag">Work with us</span>
      <h1>Let’s activate your next AI initiative</h1>
      <p className="lead">
        Share a few details about your goals and timelines. We tailor discovery workshops, pilots, and delivery teams to match
        your roadmap.
      </p>

      <div className="contact-card" style={{ marginTop: '2rem' }}>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Ada Lovelace" required />
          </div>
          <div>
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div>
            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" placeholder="+1 (615) 555-0101" />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" placeholder="Your organisation" />
          </div>
          <div>
            <label htmlFor="reason">How can we help?</label>
            <select id="reason" name="reason" defaultValue={reasons[0]}>
              {reasons.map((reason) => (
                <option key={reason}>{reason}</option>
              ))}
            </select>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="description">Project description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Share objectives, current tools, timelines, and success metrics."
            />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="message">Additional context</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Include stakeholders, budgets, or anything else we should know."
            />
          </div>
          <button className="button" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending…' : 'Submit enquiry'}
          </button>
          {message && <p className={`form-status form-status--${status}`}>{message}</p>}
        </form>

        <div>
          <h2>Our offices</h2>
          {offices.map((office) => (
            <div key={office.city} style={{ marginBottom: '1rem' }}>
              <h3>{office.city}</h3>
              <p>{office.address}</p>
              <p>{office.phone}</p>
            </div>
          ))}
          <blockquote>
            Prefer async? Email us directly at <a href="mailto:hello@easops.ai">hello@easops.ai</a>.
          </blockquote>
        </div>
      </div>
    </div>
  );
}
