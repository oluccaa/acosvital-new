/**
 * ============================================================================
 * WhatsApp Icon Component (WhatsappIcon.tsx)
 * ============================================================================
 *
 * A simple, reusable functional component that renders a WhatsApp SVG icon.
 * This approach is preferred over using an `<img>` tag for icons because:
 *
 * - **Scalability**: SVGs are vector-based and scale to any size without
 *   losing quality.
 * - **Styling**: SVG properties like `fill`, `stroke`, and `strokeWidth` can be
 *   controlled directly with CSS or, in this case, Tailwind CSS classes passed
 *   via the `className` prop.
 * - **Performance**: For simple icons, embedding the SVG directly into the
 *   component avoids an extra network request for an image file.
 *
 * ----------------------------------------------------------------------------
 * PROPS:
 * - `size` (optional, number): Sets the width and height of the icon.
 *   Defaults to 16.
 * - `className` (optional, string): Allows passing additional Tailwind CSS
 *   classes for styling (e.g., changing color, margins).
 *
 * CUSTOMIZATION:
 * - **Default Size**: Change the default value in the component's signature,
 *   e.g., `({ size = 24, ... })`.
 * - **SVG Path**: The `<path>` data defines the shape of the icon. This can
 *   be replaced with the path data from another SVG if you want to change the
 *   icon itself.
 * ----------------------------------------------------------------------------
 */

import React from 'react';

const WhatsappIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    // These properties can be controlled by Tailwind's stroke/color utilities
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* The paths that form the visual shape of the WhatsApp icon. */}
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.31 3.4 16.78L2 22L7.43 20.53C8.82 21.23 10.38 21.61 12.04 21.61C17.5 21.61 21.95 17.16 21.95 11.7C21.95 6.24 17.5 1.79 12.04 1.79Z" />
    <path d="M15.42 14.23C15.22 14.71 14.49 15.08 14.12 15.12C13.79 15.16 13.35 15.2 13.01 15.06C12.67 14.92 11.9 14.67 10.97 13.82C9.84001 12.79 9.15001 11.66 8.98001 11.42C8.81001 11.18 8.65001 11.09 8.52001 10.89C8.39001 10.69 8.25001 10.5 8.12001 10.32C7.99001 10.14 7.85001 10 7.70001 9.84003C7.55001 9.68003 7.33001 9.44003 7.33001 9.02003C7.33001 8.60003 7.66001 8.22003 7.78001 8.08003C7.90001 7.94003 8.06001 7.88003 8.24001 7.88003C8.32001 7.88003 8.40001 7.88003 8.47001 7.88003C8.61001 7.88003 8.75001 7.89003 8.87001 8.16003C8.99001 8.43003 9.33001 9.22003 9.39001 9.32003C9.45001 9.42003 9.48001 9.57003 9.39001 9.70003C9.30001 9.83003 9.25001 9.91003 9.12001 10.07C8.99001 10.23 8.87001 10.33 8.78001 10.45C8.69001 10.57 8.57001 10.71 8.70001 10.94C8.83001 11.17 9.21001 11.77 9.75001 12.27C10.43 12.91 10.95 13.18 11.2 13.28C11.33 13.33 11.47 13.33 11.59 13.24C11.73 13.14 11.97 12.86 12.16 12.6C12.35 12.34 12.56 12.29 12.81 12.38C13.06 12.47 13.88 12.88 14.07 12.97C14.26 13.06 14.37 13.11 14.43 13.21C14.49 13.31 14.49 13.66 14.35 13.87C14.21 14.08 14.05 14.21 13.88 14.34C13.71 14.47 13.55 14.52 13.38 14.52C13.38 14.52 13.19 14.5 13 14.44" />
  </svg>
);

export default WhatsappIcon;