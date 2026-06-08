import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Node Coffee — Kafe Produktif & Coworking Space di Yogyakarta',
  description:
    'Node Coffee adalah kafe coworking di Yogyakarta dengan Wi-Fi 6 1 Gbps, self-ordering kiosk, dan kopi single origin. Tempat terbaik untuk mahasiswa, freelancer, dan pekerja kreatif.',
  keywords: [
    'kafe yogyakarta', 'coworking yogyakarta', 'kafe wifi cepat', 'node coffee',
    'self ordering kiosk', 'kafe mahasiswa yogyakarta', 'kopi single origin',
  ],
  authors: [{ name: 'Node Coffee' }],
  openGraph: {
    title: 'Node Coffee — Kafe Produktif & Coworking Space di Yogyakarta',
    description: 'Wi-Fi 6 1 Gbps, self-ordering kiosk, kopi single origin. Tempat kerja dan ngopi terbaik di Yogyakarta.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Node Coffee — Kafe Produktif & Coworking Space di Yogyakarta',
    description: 'Wi-Fi 6 1 Gbps, self-ordering kiosk, kopi single origin. Tempat kerja dan ngopi terbaik di Yogyakarta.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
