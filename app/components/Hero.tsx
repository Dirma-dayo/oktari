"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div id="home" className="main-content">
      <div className="hero-background" />
      <div className="welcome-section">
        <div className={`welcome-badge ${isLoaded ? "loaded" : ""}`} style={{ transitionDelay: "800ms" }}>
          <span>Komunitas Developer Terbuka</span>
          <ArrowUpRight className="badge-icon" />
        </div>

        <h1 className="welcome-title">
          <span className={`title-line ${isLoaded ? "loaded" : ""}`} style={{ transitionDelay: "200ms" }}>
            Octary Community
          </span>
        </h1>

        <p className={`welcome-subtitle ${isLoaded ? "loaded" : ""}`} style={{ transitionDelay: "600ms" }}>
          Tempat bagi para developer dan kreator digital Indonesia untuk
          <br />
          berkolaborasi, belajar, dan menciptakan solusi inovatif bersama.
        </p>
      </div>

      <style jsx global>{`
        .main-content {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          background-color: rgb(15, 23, 42);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.3), transparent 70%);
          z-index: 0;
          animation: backgroundPulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .welcome-section {
          z-index: 1;
        }

        .welcome-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          font-size: 0.875rem;
          color: #a0aec0;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .welcome-badge:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          transform: translateY(-2px);
        }

        .welcome-badge.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .badge-icon {
          width: 1rem;
          height: 1rem;
          stroke-width: 2;
        }

        .welcome-title {
          font-size: 4.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #e2e8f0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .title-line {
          display: block;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .title-line.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .welcome-subtitle {
          font-size: 1.125rem;
          color: #a0aec0;
          margin: 0 auto;
          max-width: 600px;
          line-height: 1.6;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .welcome-subtitle.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .welcome-title {
            font-size: 3rem;
          }
          .welcome-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero
