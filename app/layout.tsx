import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ChocoRenda - Quiz",
  description: "Descubra como faturar até R$5.000 na Páscoa vendendo ovos gourmet",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main className="min-h-screen flex flex-col items-center justify-center">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'