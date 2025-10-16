import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "StartupRunway | India’s One-Stop Startup Ecosystem |  The Launchpad for Your Business Success",
  description:
    "From idea to execution, we help entrepreneurs build, brand, and scale their businesses. Professional business consultancy and startup support platform, StartupRunway empowers founders, entrepreneurs, and studentpreneurs with strategy, SaaS automation, and AI cloud tools to launch, scale, and succeed.",
  keywords:
    "StartupRunway, Startup India, Startup Ecosystem, Startup Consultancy, Business Setup, SaaS Automation, AI Cloud, Founders, Entrepreneurs, Studentpreneurs, Investors, Service Partners",
  openGraph: {
    title: "StartupRunway | India’s One-Stop Startup Ecosystem",
    description:
      "Empowering Indian startups with strategy, SaaS, and AI automation. From ideation to IPO — your growth partner.",
    url: "https://startuprunway.in", // <-- replace with your actual domain
    siteName: "StartupRunway",
    images: [
      {
        url: "https://startuprunway.in/og-image.jpg", // <-- optional image for link previews
        width: 1200,
        height: 630,
        alt: "StartupRunway - Empowering Indian Startups",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StartupRunway | Empowering Indian Startups",
    description:
      "India’s Startup Innovation Hub — combining strategy, SaaS, and AI to help founders build faster and smarter.",
    images: ["https://startuprunway.in/og-image.jpg"], // optional
    creator: "@StartupRunwayIN", // replace if you have a Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${dmSans.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
