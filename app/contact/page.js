import { contactReasons, officeLocations } from '../../Entities/contactSubmission.js';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <div className="section">
      <span className="tag">Work with us</span>
      <h1>Let’s tackle your delivery challenges together</h1>
      <p className="lead">
        Tell us about your current goals or pains and we will align the right EasOps experts to help. We typically reply within 2
        business days.
      </p>

      <div className="contact-card" style={{ marginTop: '2rem' }}>
        <form className="form-grid">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Ada Lovelace" required />
          </div>
          <div>
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" placeholder="Your organisation" />
          </div>
          <div>
            <label htmlFor="reason">How can we help?</label>
            <select id="reason" name="reason">
              {contactReasons.map((reason) => (
                <option key={reason}>{reason}</option>
              ))}
            </select>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="message">Project context</label>
            <textarea id="message" name="message" rows={4} placeholder="Share timelines, technologies, and desired outcomes." />
          </div>
          <button className="button" type="submit">
            Submit enquiry
          </button>
        </form>

        <div>
          <h2>Our offices</h2>
          {officeLocations.map((office) => (
            <div key={office.city} style={{ marginBottom: '1rem' }}>
              <h3>{office.city}</h3>
              <p>{office.address}</p>
              <p>{office.phone}</p>
            </div>
          ))}
          <blockquote>
            Prefer async? Email us directly at <a href="mailto:hello@easops.io">hello@easops.io</a>.
          </blockquote>
        </div>
      </div>
    </div>
  );
}
