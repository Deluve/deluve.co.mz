"use client"

import { useEffect, useState } from "react"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [logoOpacity, setLogoOpacity] = useState(0)
  const [textOpacity, setTextOpacity] = useState(0)
  const [progressWidth, setProgressWidth] = useState(0)

  useEffect(() => {
    // Sequência de animações mais fluida
    const timer1 = setTimeout(() => setLogoOpacity(1), 400)
    const timer2 = setTimeout(() => setTextOpacity(1), 1200)

    // Barra de progresso mais suave
    const timer3 = setTimeout(() => {
      const startTime = Date.now()
      const duration = 1800

      const updateProgress = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min((elapsed / duration) * 100, 100)

        // Easing function para movimento mais natural
        const easeOutQuart = 1 - Math.pow(1 - progress / 100, 4)
        setProgressWidth(easeOutQuart * 100)

        if (progress < 100) {
          requestAnimationFrame(updateProgress)
        }
      }

      updateProgress()
    }, 1400)

    // Saída mais elegante
    const timer4 = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 800)
    }, 3800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center space-y-12">
        {/* Logo D redesenhado - mais elegante */}
        <div
          className="transition-all duration-1200 ease-out"
          style={{
            opacity: logoOpacity,
            transform: `translateY(${logoOpacity > 0 ? "0" : "30px"}) scale(${logoOpacity > 0 ? 1 : 0.9})`,
          }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100" className="filter drop-shadow-sm">
            {/* D principal - forma mais sofisticada */}
            <path
              d="M25 15 L25 85 L55 85 C75 85 85 75 85 55 L85 45 C85 25 75 15 55 15 L25 15 Z"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: logoOpacity > 0 ? "none" : "240",
                strokeDashoffset: logoOpacity > 0 ? "0" : "240",
                transition: "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />

            {/* Detalhe interno sutil */}
            <path
              d="M35 25 L35 75 L50 75 C65 75 75 65 75 50 C75 35 65 25 50 25 L35 25 Z"
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: logoOpacity > 0 ? "none" : "180",
                strokeDashoffset: logoOpacity > 0 ? "0" : "180",
                transition: "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
              }}
            />
          </svg>
        </div>

        {/* Texto DELUVE com melhor tipografia */}
        <div
          className="text-white font-extralight text-3xl tracking-[0.4em] uppercase transition-all duration-1000 ease-out"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textOpacity > 0 ? "0" : "20px"})`,
            letterSpacing: "0.4em",
            fontWeight: "200",
          }}
        >
          DELUVE
        </div>

        {/* Barra de progresso refinada */}
        <div
          className="w-40 h-0.5 bg-gray-900 rounded-full overflow-hidden transition-all duration-1000 ease-out"
          style={{
            opacity: textOpacity * 0.8,
            transform: `scaleX(${textOpacity > 0 ? 1 : 0})`,
          }}
        >
          <div
            className="h-full bg-gradient-to-r from-white via-gray-300 to-white rounded-full transition-all duration-200 ease-out"
            style={{
              width: `${progressWidth}%`,
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
            }}
          />
        </div>

        {/* Indicador sutil de loading */}
        <div
          className="flex space-x-1 transition-all duration-1000 ease-out"
          style={{
            opacity: textOpacity * 0.6,
            transform: `translateY(${textOpacity > 0 ? "0" : "10px"})`,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 bg-white rounded-full"
              style={{
                animation: `pulse 1.5s ease-in-out infinite ${i * 0.2}s`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}
