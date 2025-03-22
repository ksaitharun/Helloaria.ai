import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'Hello Aria - Your AI WhatsApp Assistant | Smart Task Management',
  description: 'Hello Aria is your AI-powered WhatsApp calendar assistant. Stay organized, set reminders, manage tasks, and automate your workflow effortlessly.',
  keywords: 'Hello Aria, WhatsApp AI, task management, AI assistant, productivity tools, WhatsApp automation, reminder app',
  metadataBase: new URL('https://helloaria.in'),
  icons: {
    icon: '/assets/aria-icon.svg',
    apple: '/assets/aria-icon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://helloaria.in',
    title: 'Hello Aria - Your AI WhatsApp Assistant | Smart Task Management',
    description: 'Transform your productivity with Hello Aria, the intelligent WhatsApp AI assistant.',
    siteName: 'Hello Aria',
    images: [{
      url: '/assets/header-logo.svg',
      width: 1200,
      height: 630,
      alt: 'Hello Aria Logo'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@helloaria_ai',
    creator: '@helloaria_ai',
    images: '/assets/header-logo.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  authors: [{ name: 'Realityrift Innovations Pvt. Ltd.' }],
  applicationName: 'Hello Aria',
  generator: 'Next.js',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Base gradient background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-950/20 to-rose-500/5" />
        
        {/* Animated gradient overlay */}
        <div className="fixed inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-rose-500/5"
              style={{
                transform: `rotate(${120 * i}deg)`,
                animation: `pulse ${6 + i}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                opacity: 0.3
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />

        {/* Noise texture */}
        <div className="fixed inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]" />

        {/* Content */}
        <div className="relative z-10">
          <Header />
          {children}
        </div>

        {/* Decorative orbs */}
        <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </body>
    </html>
  )
}