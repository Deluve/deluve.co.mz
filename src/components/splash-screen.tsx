'use client';

import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [lineOpacity, setLineOpacity] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    // Animação de entrada mais suave
    const timer1 = setTimeout(() => setLogoOpacity(1), 200);
    const timer2 = setTimeout(() => setLineOpacity(1), 800);

    // Inicia a barra de progresso após a linha aparecer
    const timer3 = setTimeout(() => {
      const startTime = Date.now();
      const duration = 2500; // 2.5 segundos para completar (mais rápido)
      
      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / duration) * 100, 100);
        setProgressWidth(progress);
        
        if (progress < 100) {
          requestAnimationFrame(updateProgress);
        }
      };
      
      updateProgress();
    }, 1200);

    // Animação de saída após 3.5 segundos total
    const timer4 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Chama onComplete após a animação de saída mais longa
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Logo 'D' estilizado com animação de entrada */}
        <div 
          className={`w-20 h-20 border-2 border-gray-300 rounded-r-full border-l-0 transition-all duration-1000 ease-out ${
            logoOpacity > 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{ 
            opacity: logoOpacity,
            transform: `scale(${logoOpacity > 0 ? 1 : 0.75})`
          }}
        />
        
        {/* Linha horizontal com animação de entrada */}
        <div 
          className={`w-16 h-0.5 bg-gray-300 transition-all duration-1000 ease-out ${
            lineOpacity > 0 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ 
            opacity: lineOpacity,
            transform: `scaleX(${lineOpacity > 0 ? 1 : 0})`
          }}
        />
        
        {/* Barra de progresso com animação melhorada */}
        <div 
          className={`w-32 h-1 bg-gray-700 rounded-full overflow-hidden transition-all duration-1000 ease-out ${
            lineOpacity > 0 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ 
            opacity: lineOpacity,
            transform: `scaleX(${lineOpacity > 0 ? 1 : 0})`
          }}
        >
          <div 
            className="h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-full transition-all duration-300 ease-out shadow-sm"
            style={{ 
              width: `${progressWidth}%`,
              boxShadow: '0 0 10px rgba(156, 163, 175, 0.3)'
            }}
          />
        </div>
      </div>
    </div>
  );
} 