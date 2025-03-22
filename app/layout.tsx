import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Scale your business with Auttono Tech",
  description:
    "Grow your business and build in-demand teams with our tailored outsourcing solutions...Auttonotech provides premium Business Process Outsourcing (BPO), Knowledge Process Outsourcing (KPO), and Human Resource Outsourcing (HRO) services.",
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans`}>
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'