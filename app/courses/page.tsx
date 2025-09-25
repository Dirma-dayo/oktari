"use client";

import React, { useState, useEffect } from "react";
import { courses, CourseGroup, CourseItem } from "@/data/course";
import Link from "next/link";
import { motion, Variants, cubicBezier } from "framer-motion";

export default function CoursesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.1, ease: cubicBezier(0.17, 0.67, 0.83, 0.67) },
    }),
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-blue-900 via-slate-900 to-purple-900 to-black text-slate-100 p-6">
      {courses.map((group: CourseGroup) => (
        <div key={group.title} className="mb-12 flex flex-col items-center">
          
          {/* Logo + title with badge animation */}
          <motion.div
            className={`flex items-center gap-4 bg-slate-700/50 rounded-xl px-6 py-3 mb-8 backdrop-blur-md ${isLoaded ? "loaded" : ""}`}
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <motion.img
  src={group.logo}
  alt={`${group.title} logo`}
  className="w-12 h-12 object-contain"
  whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.5 } }}
/>

            <h2 className="text-3xl font-bold">{group.title}</h2>
            
          </motion.div>

          {/* Course cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {group.items.map((item: CourseItem, index: number) => (
              <motion.div
                key={item.name}
                className="w-64 h-80 bg-slate-700/70 backdrop-blur-md rounded-xl p-4 hover:shadow-2xl transition-shadow duration-300 relative flex flex-col"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="w-full h-36 overflow-hidden rounded-md mb-3">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-sm mb-3 flex-grow">{item.description}</p>
                {item.href && (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href={item.href}
                      className="text-blue-400 hover:text-blue-500 font-medium text-sm mt-auto"
                      target="_blank"
                    >
                      Lihat Kursus
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
