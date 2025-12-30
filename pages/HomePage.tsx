/**
 * ============================================================================
 * Home Page (HomePage.tsx)
 * ============================================================================
 *
 * This component acts as the main "view" or "container" for the home page.
 * Its sole responsibility is to assemble the various feature-specific
 * components in the correct order to construct the complete home page layout.
 *
 * This approach follows the "container/presentational" pattern, where page
 * components are containers that compose the UI from smaller, reusable
 * presentational (or "feature") components.
 *
 * ----------------------------------------------------------------------------
 * CUSTOMIZATION:
 * - **Reorder Sections**: To change the layout of the home page, simply
 *   reorder the components listed within the return statement's fragment (`<>...</>`).
 * - **Add/Remove Sections**: You can easily add new sections by importing
 *   another component and placing it in the desired location, or remove
 *   sections by deleting their corresponding lines.
 * ----------------------------------------------------------------------------
 */

import React from 'react';

// Import all the feature components that make up the home page.
import Hero from '../components/features/home/Hero';
import Features from '../components/features/home/Features';
import HomeAbout from '../components/features/home/HomeAbout';
import FeaturedProducts from '../components/features/home/FeaturedProducts';
import InfoColumns from '../components/features/home/InfoColumns';
import CallToAction from '../components/common/CallToAction';
import Sectors from '../components/common/Sectors';

const HomePage: React.FC = () => {
  return (
    // A React Fragment (<>...</>) is used to group the list of components
    // without adding an extra node to the DOM.
    <>
      <Hero />
      <Features />
      <HomeAbout />
      <InfoColumns /> 
      <FeaturedProducts />
      <Sectors />
      <CallToAction />
    </>
  );
};

export default HomePage;