/**
 * ============================================================================
 * Application Entry Point (index.tsx)
 * ============================================================================
 *
 * This file is the main entry point for the React application. Its primary
 * responsibilities are:
 *
 * 1.  **Importing Core Libraries**: It imports the necessary `React` and
 *     `ReactDOM` libraries to bootstrap the application.
 *
 * 2.  **Importing the Root Component**: It imports the main `App` component,
 *     which serves as the root of the entire component tree.
 *
 * 3.  **DOM Mounting**: It finds the HTML element with the ID `root` in
 *     `index.html` and uses `ReactDOM.createRoot()` to render the `App`
 *     component into it. This is how the React application gets attached to
 *     the webpage.
 *
 * 4.  **Enabling Strict Mode**: The `<React.StrictMode>` wrapper is used to
 *     highlight potential problems in the application. It helps identify unsafe
 *     lifecycles, legacy API usage, and other issues during development but has
 *     no effect on the production build.
 *
 * ----------------------------------------------------------------------------
 * @see App.tsx - The root component being rendered.
 * @see index.html - The HTML file containing the '<div id="root"></div>'.
 * ----------------------------------------------------------------------------
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './lib/i18n'; // Initialize i18next

// Find the root DOM node where the React app will be mounted.
const rootElement = document.getElementById('root');
if (!rootElement) {
  // A guard to ensure the app doesn't crash silently if the root element is missing.
  throw new Error("Could not find root element to mount to");
}

// Create a React root for the DOM element.
const root = ReactDOM.createRoot(rootElement);

// Render the application.
root.render(
  // StrictMode is a developer tool for highlighting potential problems.
  // It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);