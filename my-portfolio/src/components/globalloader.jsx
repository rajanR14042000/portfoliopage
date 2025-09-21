"use client";

import { useState, useEffect } from 'react';
import LoadingAnimation from './loadinganimation';

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a fixed timer for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Also handle the case when page is already loaded or loads early
    const handleLoad = () => {
      // Keep the minimum display time at 3 seconds
      // The setTimeout above will handle the dismissal
    };

    // Add event listener in case page loads before 3 seconds
    window.addEventListener('load', handleLoad);

    // Clean up
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading && <LoadingAnimation />}
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </>
  );
};

export default LoadingProvider;
