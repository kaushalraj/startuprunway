import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

#noupe-chatbot {
  position: fixed !important;  /* makes it stick to viewport */
  bottom: 1rem !important;     /* distance from bottom */
  right: 1rem !important;      /* distance from right */
  z-index: 9999 !important;    /* very high, always on top */
}


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Startup Runway - The Launchpad for Your Business Success",
  description:
    "From idea to execution, we help entrepreneurs build, brand, and scale their businesses. Professional business consultancy and startup support platform.",
  generator: "StartupRunway Team",
}

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
