import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Auttonotech - Engineering Excellence Across Industries",
  description:
    "Auttonotech is an engineering, consulting, and technology company serving industries like Automotive, Aerospace, Defense, Heavy Engineering, and Energy.",
  keywords:
    "Auttonotech, engineering, consulting, technology, automotive, aerospace, defense, heavy engineering, energy",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'