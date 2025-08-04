'use client';

import { useState, useEffect } from 'react';
import SplashScreen from './splash-screen';

interface SplashWrapperProps {
  children: React.ReactNode;
}

export default function SplashWrapper({ children }: SplashWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // For development: always show splash screen
    // For production: check localStorage
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    if (isDevelopment) {
      // In development, always show splash screen
      setShowSplash(true);
      setIsLoading(false);
    } else {
      // In production, check if splash has been shown before
      const hasShownSplash = localStorage.getItem('splashShown');
      
      if (hasShownSplash) {
        setShowSplash(false);
        setIsLoading(false);
      } else {
        // Mark splash as shown for future visits
        localStorage.setItem('splashShown', 'true');
        setShowSplash(true);
        setIsLoading(false);
      }
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (isLoading) {
    return null; // Prevent flash of content while determining splash state
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={showSplash ? 'hidden' : ''}>
        {children}
      </div>
    </>
  );
} 