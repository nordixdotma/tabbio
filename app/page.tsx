"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PartnersSection from "@/components/partners-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import { Roboto } from "next/font/google"
import Head from "next/head"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const elementId = hash.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [searchParams])

  return (
    <>
      <Head>
        <title>Tabbio — You, In Real Time | One Profile, Everywhere</title>
        <meta
          name="description"
          content="Every job board forces you to start over — but Tabbio makes it one profile, everywhere. Update once. Auto-sync everywhere that matters. Hiring made simple & smart."
        />
        <meta
          name="keywords"
          content="job board, career management, job search, resume, profile sync, hiring platform, job applications, career tools"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tabbio.com" />
        <meta property="og:title" content="Tabbio — You, In Real Time | One Profile, Everywhere" />
        <meta
          property="og:description"
          content="Every job board forces you to start over — but Tabbio makes it one profile, everywhere."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tabbio.com" />
        <meta property="og:image" content="https://tabbio.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tabbio — You, In Real Time | One Profile, Everywhere" />
        <meta
          name="twitter:description"
          content="Every job board forces you to start over — but Tabbio makes it one profile, everywhere."
        />
        <meta name="twitter:image" content="https://tabbio.com/og-image.jpg" />
      </Head>

      <div className={`min-h-screen bg-white text-foreground overflow-x-hidden ${roboto.className}`} translate="no">
        {/* Main content */}
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <PartnersSection />
          <TestimonialsSection />
          <FaqSection />
          <CtaSection />
          <Footer />
        </div>
      </div>
    </>
  )
}
