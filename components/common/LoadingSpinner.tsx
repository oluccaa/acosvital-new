import React from 'react';

/**
 * ============================================================================
 * Loading Spinner Component (LoadingSpinner.tsx)
 * ============================================================================
 * Uses global .animate-shimmer class defined in index.css
 */
const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-full" aria-live="polite" aria-busy="true" aria-label="Loading page content">
      {/* Skeleton for a Hero section */}
      <div className="bg-gray-200 h-[60vh] min-h-[400px] w-full animate-shimmer"></div>

      {/* Skeleton for content */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Title placeholder */}
          <div className="h-10 w-3/4 rounded-md bg-gray-200 animate-shimmer"></div>
          
          {/* Paragraph placeholders */}
          <div className="space-y-3">
            <div className="h-4 w-full rounded-md bg-gray-200 animate-shimmer"></div>
            <div className="h-4 w-full rounded-md bg-gray-200 animate-shimmer"></div>
            <div className="h-4 w-5/6 rounded-md bg-gray-200 animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;