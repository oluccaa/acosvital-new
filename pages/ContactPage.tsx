/**
 * ============================================================================
 * Contact Page (ContactPage.tsx)
 * ============================================================================
 *
 * This component functions as the main view for the "Contact Us" page. It
 * assembles the page layout by importing and rendering the necessary feature
 * components.
 *
 * The primary content is handled by the `Contact` component, which includes
 * the contact details, map, and form.
 *
 * ----------------------------------------------------------------------------
 * CUSTOMIZATION:
 * - This version of the contact page does not include a CallToAction section.
 *   If you want to add it back or include other sections, you can import them
 *   and place them within the `<>...</>` fragment.
 * - The order and composition of the page are managed here.
 * ----------------------------------------------------------------------------
 */
import React from 'react';
import Contact from '../components/features/contact/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
