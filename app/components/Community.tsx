"use client"
import React, { useRef } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion } from "framer-motion"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Dari Nol Sampai Punya Proyek",
    description:
      "Bingung mulai dari mana? Di Octary, kami akan membimbing kamu langkah demi langkah. Kamu akan belajar dengan langsung membuat proyek nyata, dari aplikasi web sederhana sampai portofolio yang bisa kamu banggakan untuk bekal di dunia kerja.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://creamteam.vercel.app/ak.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Gak Sendirian, Ada Mentor & Teman",
    description:
      "Stuck sama error atau bingung soal konsep? Jangan khawatir! Kamu bisa bertanya langsung kepada mentor berpengalaman atau berdiskusi dengan teman-teman sesama siswa RPL. Kami percaya belajar bareng itu lebih seru dan efektif.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://creamteam.vercel.app/ak.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Teknologi Relevan dengan Industri",
    description:
      "Kurikulum kami dirancang khusus untuk kebutuhan industri saat ini. Kamu akan belajar HTML, CSS, JavaScript, React, Next.js, dan alat-alat lain yang akan membuatmu siap bersaing dan relevan saat lulus nanti.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://creamteam.vercel.app/ak.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Persiapan Karir Sejak Dini",
    description:
      "Selain coding, kami juga akan membantumu mempersiapkan karir. Mulai dari cara membuat CV yang menarik, membangun portofolio online yang profesional, sampai tips dan trik untuk menghadapi wawancara kerja pertamamu.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://creamteam.vercel.app/ak.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
]

export function Community() {
  return (
    <div className="w-full py-4">
      <div className="p-4 sm:p-6 lg:p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Tentang Octary</h2>
        <p className="text-lg text-slate-300 text-center max-w-4xl mx-auto">
          Octary adalah sebuah komunitas yang didedikasikan untuk para developer dan pegiat teknologi di Indonesia. Kami menyediakan platform untuk belajar, berbagi pengetahuan, dan berkolaborasi dalam berbagai proyek. Visi kami adalah untuk memajukan ekosistem teknologi di Indonesia dengan mencetak talenta-talenta digital yang siap bersaing di panggung global.
        </p>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}