"use client";

import { Mail, Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-black p-6">
      <motion.div
        className="bg-slate-900/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">
          Get in Touch
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Gmail */}
          <a
            href="/gtwawokawokaowokaowko"
            /* mailto:yourmail@gmail.com use this lter */
            className="flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl font-semibold bg-red-600 hover:bg-red-500 text-white transition"
          >
            <Mail className="w-6 h-6" /> Gmail
          </a>

          {/* WhatsApp */}
          <a
            href="/gtwawokawokaowokaowko" // replace with ur WA biz num
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl font-semibold bg-green-600 hover:bg-green-500 text-white transition"
          >
            <Phone className="w-6 h-6" /> WhatsApp
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_octary_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl font-semibold bg-gradient-to-tl from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 text-white transition"
          >
            <Instagram className="w-6 h-6" /> Instagram
          </a>
        </div>
      </motion.div>
    </div>
  );
}
