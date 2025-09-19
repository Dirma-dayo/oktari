"use client"

import { HoverEffect } from "./card-hover-effect"

export const features = [
  {
    title: "Tech Stack Kekinian",
    description: "Pelajari teknologi terbaru dan paling dicari yang digunakan oleh perusahaan top di industri.",
    link: "https://weboctary.hashnode.space/default-guide/fundamental/introduction",
  },
  {
    title: "Belajar Interaktif",
    description: "Ikuti proyek langsung, dapatkan umpan balik real-time, dan coding bersama dalam lingkungan seru.",
    link: "#",
  },
  {
    title: "Komunitas & Support",
    description:
      "Bergabung dengan komunitas aktif dari pelajar dan mentor yang siap membantu kesuksesanmu dalam coding.",
    link: "#",
  },
  {
    title: "Showcase Portfolio",
    description: "Buat dan pamerkan proyek-proyekmu untuk menunjukkan keterampilan kepada calon pemberi kerja.",
    link: "https://claritybase.icu/",
  },
  {
    title: "Chatbot AI Canggih",
    description: "Dapatkan bantuan instan dan panduan 24/7 dari chatbot pintar kami, dirancang untuk mendukung belajarmu.",
    link: "#",
  },
  {
    title: "Sertifikasi Profesional",
    description: "Dapatkan sertifikat yang diakui industri setelah menyelesaikan kursus untuk meningkatkan karirmu.",
    link: "#",
  },
  
]

const Features = () => {
  return (
    <section
      id="features"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 relative"
      style={{
        background: `
          linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%),
          radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.15), transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.1), transparent 50%)
        `,
      }}
    >
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-4">Kenapa Harus Pilih Kami?</h2>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Temukan fitur-fitur unggulan yang menjadikan platform kami pilihan terbaik untuk perjalanan belajar dan
          pengembanganmu.
        </p>
      </div>

      <HoverEffect items={features} />
    </section>
  )
}

export default Features
