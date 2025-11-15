import { ContactForm } from '../../Components/ContactForm.jsx';
import { contactReasons, officeLocations } from '../../Entities/contactSubmission.js';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return <ContactForm reasons={contactReasons} offices={officeLocations} />;
}
