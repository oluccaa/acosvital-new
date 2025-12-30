import React from 'react';
import AboutHero from '../components/features/about/AboutHero';
import AboutContent from '../components/features/about/AboutContent';
import Pillars from '../components/features/about/Pillars';
import Units from '../components/features/about/Units';
import Sectors from '../components/common/Sectors';
import StatsGrid from '../components/features/about/StatsGrid';

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <StatsGrid />
      <Pillars />
      <Sectors />
      <Units />
    </>
  );
};

export default AboutPage;