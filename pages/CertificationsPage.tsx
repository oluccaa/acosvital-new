
/**
 * ============================================================================
 * Certifications Page (CertificationsPage.tsx)
 * ============================================================================
 *
 * This component serves as the main view for the "Certifications" page.
 * It features a blog-style layout that explains the company's commitment
 * to quality, followed by sections showcasing the sectors served and a
 * call to action.
 *
 * It assembles the page layout by importing and arranging a series of
 * purpose-built feature components.
 *
 * ----------------------------------------------------------------------------
 */

import React from 'react';
import CertificationsHero from '../components/features/certifications/CertificationsHero';
import CertificationsContent from '../components/features/certifications/CertificationsContent';
import CertificationsGrid from '../components/features/certifications/CertificationsGrid';
import CallToAction from '../components/common/CallToAction';


const CertificationsPage: React.FC = () => {
  return (
    <>
      <CertificationsHero />
      <CertificationsContent />
      <CertificationsGrid />
      <CallToAction />
    </>
  );
};

export default CertificationsPage;
