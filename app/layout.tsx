import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tabbio — You, In Real Time | One Profile, Everywhere",
  description:
    "Every job board forces you to start over — but Tabbio makes it one profile, everywhere. Update once. Auto-sync everywhere that matters. Hiring made simple & smart.",
  keywords:
    "job board, career management, job search, resume, profile sync, hiring platform, job applications, career tools, employment, job matching",
  authors: [{ name: "Tabbio" }],
  creator: "Tabbio",
  publisher: "Tabbio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tabbio.com",
    siteName: "Tabbio",
    title: "Tabbio — You, In Real Time | One Profile, Everywhere",
    description:
      "Every job board forces you to start over — but Tabbio makes it one profile, everywhere. Update once. Auto-sync everywhere that matters.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tabbio - You, In Real Time",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tabbio — You, In Real Time | One Profile, Everywhere",
    description: "Every job board forces you to start over — but Tabbio makes it one profile, everywhere.",
    images: ["/og-image.jpg"],
    creator: "@tabbio",
  },
  alternates: {
    canonical: "https://tabbio.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" translate="no" className="dark">
      <head>
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://tabbio.com" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#226fd3" />
        <meta name="msapplication-TileColor" content="#226fd3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tabbio",
              url: "https://tabbio.com",
              logo: "https://tabbio.com/favicon.png",
              description:
                "Every job board forces you to start over — but Tabbio makes it one profile, everywhere. Update once. Auto-sync everywhere that matters.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "hello@tabbio.com",
              },
              sameAs: [
                "https://twitter.com/tabbio",
                "https://linkedin.com/company/tabbio",
                "https://facebook.com/tabbio",
              ],
              service: [
                {
                  "@type": "Service",
                  name: "Job Profile Management",
                  description: "One profile that syncs across all job boards automatically",
                },
                {
                  "@type": "Service",
                  name: "Career Tracking",
                  description: "Track applications and manage your job search in real time",
                },
                {
                  "@type": "Service",
                  name: "Smart Job Matching",
                  description: "AI-powered job recommendations based on your profile",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className} translate="no">
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
