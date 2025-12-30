/**
 * ============================================================================
 * Custom Router Hook (useRouter.ts)
 * ============================================================================
 *
 * This custom hook encapsulates the logic for a simple hash-based router.
 * Hash-based routing (using the '#' in the URL) is a common technique for
 * client-side routing in single-page applications (SPAs) without requiring
 * complex server-side configuration.
 *
 * HOW IT WORKS:
 *
 * 1.  **State Management**: It uses `useState` to store the current route
 *     (the part of the URL after the '#'). It's initialized with the current
 *     `window.location.hash`.
 *
 * 2.  **Event Listener**: It uses `useEffect` to set up an event listener for
 *     the `hashchange` event. This event fires whenever the URL hash changes
 *     (e.g., when a user clicks a link like `<a href="#/about">`).
 *
 * 3.  **State Updates**: When the `hashchange` event occurs, the `handleHashChange`
 *     function is called. This function updates the `route` state with the new
 *     hash value, which causes any component using this hook to re-render with
 *     the new route.
 *
 * 4.  **Scroll to Top**: As a good user experience practice, it also scrolls
 *     the window to the top whenever the route changes, mimicking the behavior
 *     of traditional page loads.
 *
 * 5.  **Cleanup**: The `useEffect` hook returns a cleanup function that removes
 *     the event listener when the component unmounts. This is crucial to
 *     prevent memory leaks.
 *
 * ----------------------------------------------------------------------------
 * USAGE:
 *
 * In any component that needs to know the current route:
 *
 * `import { useRouter } from './hooks/useRouter';`
 * `const currentRoute = useRouter();`
 *
 * `if (currentRoute === '#/about') { ... }`
 * ----------------------------------------------------------------------------
 */

import { useState, useEffect } from 'react';

export const useRouter = () => {
  // State to hold the current route (e.g., '#/', '#/about').
  // It's initialized with the hash from the URL when the component first mounts.
  const [route, setRoute] = useState(window.location.hash || '#/');

  // Effect to handle side effects: listening to browser events.
  useEffect(() => {
    // This function will be called whenever the URL hash changes.
    const handleHashChange = () => {
      // Update the state with the new hash. Default to '#/' if the hash is empty.
      setRoute(window.location.hash || '#/');
      // Scroll to the top of the page for a better user experience on navigation.
      window.scrollTo(0, 0);
    };

    // Add the event listener to the window object.
    window.addEventListener('hashchange', handleHashChange);
    
    // Call handler once on mount to set the initial route correctly,
    // in case the user lands directly on a page with a hash.
    handleHashChange();
    
    // Cleanup function: This will be called when the component unmounts.
    // It's essential to remove the event listener to avoid memory leaks.
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // The empty dependency array `[]` means this effect runs only once on mount.

  // Return the current route value.
  return route;
};
