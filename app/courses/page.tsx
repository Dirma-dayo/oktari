"use client";

import React from "react";
import { courses, CourseGroup, CourseItem } from "@/data/course";
import Link from "next/link";
import { motion, Variants, TargetAndTransition, cubicBezier } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: cubicBezier(0.17, 0.67, 0.83, 0.67) } },
};

const linkHoverEffect: TargetAndTransition = {
  scale: 1.05,
  y: -2,
  transition: { type: "spring", stiffness: 300 },
};

export default function CoursesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-slate-800 via-slate-900 to-black text-slate-100 p-6">
      {courses.map((group: CourseGroup) => (
        <div key={group.title} className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">{group.title}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {group.items.map((item: CourseItem) => (
              <motion.div
                key={item.name}
                className="w-64 h-80 bg-slate-700/70 backdrop-blur-md rounded-xl p-4 hover:shadow-2xl transition-shadow duration-300 relative flex flex-col"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="w-full h-36 overflow-hidden rounded-md mb-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-sm mb-3 flex-grow">{item.description}</p>
                {item.href && (
                  <motion.div whileHover={linkHoverEffect}>
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
