/**
 * ============================================================================
 * Products Page (ProductsPage.tsx)
 * ============================================================================
 *
 * This component acts as the main view for the "Products" page. Its primary
 * role is to render the `ProductCatalog` component, which contains all the
 * UI and logic for displaying the product categories.
 *
 * This modular approach keeps the page component simple and focused on
 * assembling the view from feature components.
 *
 * ----------------------------------------------------------------------------
 * CUSTOMIZATION:
 * - If you need to add other sections to the products page (e.g., a special
 *   offer banner or a call to action), you would import those components here
 *   and place them above or below the `<ProductCatalog />`.
 * ----------------------------------------------------------------------------
 */

import React from 'react';
import ProductCatalog from '../components/features/products/ProductCatalog';

const ProductsPage: React.FC = () => {
  return (
    // The fragment wrapper allows for adding more sections later if needed.
    <>
      <ProductCatalog />
    </>
  );
};

export default ProductsPage;