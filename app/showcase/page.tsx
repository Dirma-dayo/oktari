"use client";

import React from "react";
import { showcase } from "@/data/showcase";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ShowcasePage() {
  return (
    <main className="relative min-h-screen text-gray-100 overflow-hidden">
<div className="absolute inset-0 animate-gradient bg-gradient-to-br from-blue-900 via-purple-1000 to-gray-1000" />


      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
            }}
            animate={{
              y: ["0vh", "100vh"],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <h1 className="relative text-3xl font-bold text-center mb-10 pt-8">
        Showcase
      </h1>

      <div className="relative max-w-6xl mx-auto p-8">
  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {showcase.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          whileHover={{ scale: 1.03, rotate: -1 }}
        >
          <Link
            href={item.href}
            target="_blank"
            className="block bg-gray-900/80 backdrop-blur rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</div>

    </main>
  );
}
