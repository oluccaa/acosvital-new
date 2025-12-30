import React from 'react';
import CatalogFlipbook from '../components/features/catalog/CatalogFlipbook';
import CatalogActions from '../components/features/catalog/CatalogActions';

const CatalogPage: React.FC = () => {
  return (
    <>
      <CatalogFlipbook />
      <CatalogActions />
    </>
  );
};

export default CatalogPage;