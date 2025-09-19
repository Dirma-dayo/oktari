import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import ModernNavbar from "./components/ModernNavbar"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Octary Community - Platform Belajar Coding",
  description:
    "Platform belajar coding yang asik banget buat developer masa depan. Belajar web development, UI/UX design, dan computer science dengan cara yang seru!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="dark">
      <body className={`${inter.className} bg-slate-900 text-slate-200`}>
        
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>

        <ModernNavbar />
        <Analytics />
      </body>
    </html>
  )
}