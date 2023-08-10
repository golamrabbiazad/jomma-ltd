import { siteConfig } from "@/config/site"

import "./globals.css"

import type { Metadata } from "next"
import { Footer, Navbar } from "@/components"
import { AppProvider } from "@/context/StockContext"
import { Chat } from "@/icons"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <AppProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="pt-65 flex-1">{children}</main>
            <section className="fixed bottom-0 right-0 z-30 m-2">
              <div className="flex h-16 w-16 items-center justify-center ">
                <Chat />
              </div>
            </section>
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
