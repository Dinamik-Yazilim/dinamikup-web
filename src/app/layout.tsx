import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
// import "@fortawesome/fontawesome-free/css/all.min.css"
import "./globals.css"
import LayoutClientSide from './(authenticated)/layout-client'
import { ThemeProvider } from '@/components/theme-provider'
const inter = Inter({ subsets: ["latin"] })
import { RedirectType, redirect } from 'next/navigation'
import { Suspense } from 'react'
import { Toaster } from "@/components/ui/toaster"
import { Header } from './(components)/header'
import { Footer } from './(components)/footer'

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
  initialScale: 1,
  width: 'device-width',
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: 'contain',
  userScalable: false,
  interactiveWidget: 'overlays-content'
}
export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE || 'ENV ERROR',
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'ENV ERROR',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href={`/img/icon.svg`} type="image/svg+xml" /> */}
        <link rel="icon" href={`/img/icon.png`} type="image/png" />
        <link rel="manifest" href={`/manifest.json`} />
      </head>
      <body className={`${inter.className}`} suppressHydrationWarning >

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange

        >
          <Suspense >
            <Header />
            <div className='container py-4 px-3 min-h-[600px]'>
              {children}
            </div>
            <Footer />
            <Toaster />
          </Suspense>
        </ThemeProvider>

      </body>
    </html>
  )
}


export default RootLayout