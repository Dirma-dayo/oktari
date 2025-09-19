"use client";

import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Layers, Github, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const navItems = [
  {
    title: "Beranda",
    icon: <Home className="nav-icon" />,
    href: "/",
  },
  {
    title: "Kursus",
    icon: <BookOpen className="nav-icon" />,
    href: "/courses",
  },
  {
    title: "Showcase",
    icon: <Layers className="nav-icon" />,
    href: "/showcase",
  },
  {
    title: "Kontak",
    icon: <Mail className="nav-icon" />,
    href: "/contact",
  }
];

const socialItems = [
  {
    title: "Twitter",
    icon: <Twitter className="nav-icon" />,
    href: "https://twitter.com",
  },
  {
    title: "GitHub",
    icon: <Github className="nav-icon" />,
    href: "https://github.com",
  },
  {
    title: "Instagram",
    icon: <Instagram className="nav-icon" />,
    href: "https://instagram.com/_octary_/",
  },
  {
    title: "Youtube",
    icon: <Youtube className="nav-icon" />,
    href: "https://youtube.com/@octarycommunity",
  },
];

const ModernNavbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleLinkClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]');
        if (anchor) {
            e.preventDefault();
            const href = anchor.getAttribute('href');
            if (href) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    const newActiveItem = navItems.find(item => item.href === href)?.title || "Home";
                    setActiveItem(newActiveItem);
                }
            }
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <>
      <div className="cursor-follower" style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
      }} />

      <div className="bottom-nav-container">
        <nav className="bottom-nav">
          <div className="nav-section">
            <div className="nav-items-container">
              {navItems.map((item, index) => (
                <a
                  key={`nav-${index}`}
                  href={item.href}
                  onClick={() => setActiveItem(item.title)}
                  className={`nav-item ${activeItem === item.title ? 'nav-item-active' : ''}`}
                >
                  <div className="nav-icon-wrapper">
                    {item.icon}
                  </div>
                  <span className="nav-label">{item.title}</span>
                  {activeItem === item.title && (
                    <div className="active-indicator"></div>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          <div className="nav-divider"></div>
          
          <div className="nav-section">
            <div className="social-items-container">
              {socialItems.map((item, index) => (
                <a
                  key={`social-${index}`}
                  href={item.href}
                  className="social-item"
                  title={item.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-icon-wrapper">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <style jsx global>{`
        .nav-icon {
          width: 1rem;
          height: 1rem;
          stroke-width: 1.5;
        }

        .badge-icon {
          width: 0.75rem;
          height: 0.75rem;
          stroke-width: 1.5;
        }

        .cursor-follower {
          display: none;
          position: fixed;
          width: 30px;
          height: 30px;
          border: 1px solid rgba(59, 130, 246, 0.5);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: width 0.2s, height 0.2s;
        }

        .bottom-nav-container {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
        }

        .bottom-nav {
          display: flex;
          align-items: center;
          background-color: rgb(30, 41, 59);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 50px;
          padding: 0.5rem 1.5rem;
          box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
        }

        .nav-section {
          display: flex;
          align-items: center;
        }

        .nav-items-container,
        .social-items-container {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .nav-divider {
          width: 1px;
          height: 2.5rem;
          background: rgba(59, 130, 246, 0.3);
          margin: 0 1.25rem;
        }

        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 50px;
          text-decoration: none;
          color: #94a3b8;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          overflow: hidden;
        }

        .nav-item:hover {
          color: #dbeafe;
          background: rgba(59, 130, 246, 0.1);
          transform: translateY(-1px);
        }

        .nav-item-active {
          color: #dbeafe;
          background: rgba(59, 130, 246, 0.2);
        }

        .nav-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .nav-item:hover .nav-icon-wrapper {
          transform: scale(1.05);
        }

        .nav-label {
          opacity: 0;
          max-width: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          white-space: nowrap;
        }

        .nav-item:hover .nav-label,
        .nav-item-active .nav-label {
          opacity: 1;
          max-width: 100px;
        }

        .active-indicator {
          position: absolute;
          bottom: 0.5rem;
          left: 1.25rem;
          transform: translateX(-50%);
          width: 3px;
          height: 3px;
          background: #3b82f6;
          border-radius: 50%;
          animation: scaleIn 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) both;
        }

        .social-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .social-item:hover {
          color: #dbeafe;
          background: rgba(59, 130, 246, 0.1);
          transform: translateY(-1px);
        }

        .social-icon-wrapper {
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .social-item:hover .social-icon-wrapper {
          transform: scale(1.1);
        }

        @keyframes scaleIn {
          from {
            transform: translateX(-50%) scale(0);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ModernNavbar;