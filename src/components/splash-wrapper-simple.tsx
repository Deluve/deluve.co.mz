'use client';

import { useState } from 'react';
import SplashScreen from './splash-screen';

interface SplashWrapperProps {
  children: React.ReactNode;
}

export default function SplashWrapperSimple({ children }: SplashWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Pequeno delay para garantir que o splash desapareceu antes de mostrar o conteúdo
    setTimeout(() => {
      setContentVisible(true);
    }, 100);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div 
        className={`transition-all duration-1000 ease-out ${
          showSplash 
            ? 'opacity-0 scale-95' 
            : contentVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
        }`}
      >
        {children}
      </div>
    </>
  );
} 