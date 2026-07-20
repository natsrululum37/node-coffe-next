import type { Metadata } from 'next'
import { Libre_Bodoni, Public_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SmoothScrolling } from '@/components/SmoothScrolling'
import { GoogleAnalytics } from '@next/third-parties/google'

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const libreBodoni = Libre_Bodoni({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Node Coffee — Kafe Produktif & Coworking Space di Yogyakarta',
  description: 'Node Coffee adalah kafe coworking di Yogyakarta dengan Wi-Fi 6 1 Gbps, self-ordering kiosk, dan kopi single origin.',
  keywords: ['coworking space yogyakarta', 'cafe produktif jogja', 'node coffee', 'wifi cepat', 'tempat nugas jogja'],
  openGraph: {
    title: 'Node Coffee — Coworking Space Yogyakarta',
    description: 'Tingkatkan produktivitasmu dengan Wi-Fi 1 Gbps dan kopi single origin.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning className={`${publicSans.variable} ${libreBodoni.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen font-sans flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-blue-600 selection:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-G4THENRTMY" />
    </html>
  )
}
