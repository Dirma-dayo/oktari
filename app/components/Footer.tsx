"use client";

import React, { useState, MouseEvent } from "react";
import { Github, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { motion, cubicBezier, Variants, TargetAndTransition } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const footerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: cubicBezier(0.17, 0.67, 0.83, 0.67) },
    },
  };

  const linkHoverEffect: TargetAndTransition = {
    scale: 1.05,
    y: -2,
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <motion.footer
      className="relative bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl"
        style={{
          background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`,
        }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-bold text-slate-200 mb-4">
            Octary Community
          </h3>
          <p className="text-sm leading-relaxed">
            Platform belajar coding yang asik banget buat developer masa depan.
            Belajar web development, UI/UX design, dan computer science dengan
            cara yang seru!
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="font-semibold text-slate-300 mb-4">Jelajahi</h4>
          <ul className="space-y-3">
            <li>
              <motion.div whileHover={linkHoverEffect}>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Beranda
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover={linkHoverEffect}>
                <Link
                  href="/kursus"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Kursus
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover={linkHoverEffect}>
                <Link
                  href="/showcase"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Showcase
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover={linkHoverEffect}>
                <Link
                  href="/kontak"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Kontak
                </Link>
              </motion.div>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="font-semibold text-slate-300 mb-4">Ikuti Kami</h4>
          <div className="flex space-x-4">
            <motion.a
              whileHover={linkHoverEffect}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={linkHoverEffect}
              href="https://www.instagram.com/_octary_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              whileHover={linkHoverEffect}
              href="https://www.youtube.com/@octarycommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <Youtube size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 mt-10 pt-8 border-t border-slate-800 text-center text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>&copy; {currentYear} Octary Community. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
