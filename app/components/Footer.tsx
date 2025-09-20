"use client";

import React, { useState, MouseEvent } from "react";
import { Github, Instagram, Youtube } from "lucide-react";
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
      className="relative bg-slate-900 text-slate-400 py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800 overflow-hidden text-sm sm:text-base"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* background glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`,
        }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-200 mb-3 sm:mb-4">
            Octary Community
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed">
            Platform belajar coding yang asik banget buat developer masa depan.
            Belajar web development, UI/UX design, dan computer science dengan
            cara yang seru!
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-sm sm:text-base font-semibold text-slate-300 mb-3 sm:mb-4">
            Jelajahi
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {[
              { href: "/", label: "Beranda" },
              { href: "/kursus", label: "Kursus" },
              { href: "/showcase", label: "Showcase" },
              { href: "/kontak", label: "Kontak" },
            ].map(({ href, label }) => (
              <li key={href}>
                <motion.div whileHover={linkHoverEffect}>
                  <Link
                    href={href}
                    className="hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {label}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-sm sm:text-base font-semibold text-slate-300 mb-3 sm:mb-4">
            Ikuti Kami
          </h4>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Instagram, href: "https://www.instagram.com/_octary_/" },
              { Icon: Youtube, href: "https://www.youtube.com/@octarycommunity" },
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                whileHover={linkHoverEffect}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* copyright */}
      <motion.div
        className="relative z-10 mt-8 pt-6 border-t border-slate-800 text-center text-xs sm:text-sm"
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
