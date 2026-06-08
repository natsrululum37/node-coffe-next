'use client'

import Image from 'next/image'
import { Camera, MessageCircle, MapPin, Coffee, Wifi, Clock, ArrowUpRight } from 'lucide-react'
import { scrollToElement } from '@/lib/scroll'

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#fasilitas', label: 'Fasilitas' },
  { href: '#lokasi', label: 'Lokasi' },
  { href: '#promo', label: 'Promo' },
]

const socials = [
  { href: 'https://instagram.com', icon: Camera, label: 'Instagram' },
  { href: 'https://wa.me/6283143957624', icon: MessageCircle, label: 'WhatsApp' },
  { href: '#lokasi', icon: MapPin, label: 'Maps', scroll: true },
]

const infoRows = [
  { Icon: MapPin, text: 'Jl. Ring Road Utara, Condongcatur, Sleman, Yogyakarta 55283' },
  { Icon: Clock, text: 'Setiap hari, 07.00 – 23.00 WIB' },
  { Icon: Wifi, text: 'Wi-Fi 6 · 1 Gbps dedicated' },
  { Icon: Coffee, text: 'Menu mulai Rp 15.000' },
]

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToElement(href)
  }

  return (
    <footer className="border-t border-white/5 bg-navy text-white" aria-label="Footer Node Coffee">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/img/logo/logo.webp"
                alt="Node Coffee Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-display text-lg font-bold">Node Coffee</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Specialty coffee &amp; coworking space untuk mahasiswa
              dan freelancer di Yogyakarta.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ href, icon: Icon, label, scroll }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
                  {...(scroll
                    ? { onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, href) }
                    : { target: '_blank', rel: 'noopener noreferrer' }
                  )}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Navigasi</p>
            <nav className="mt-5 flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                  className="group inline-flex cursor-pointer items-center gap-1 text-sm text-slate-400 transition-colors hover:text-brand"
                >
                  {label}
                  <ArrowUpRight size={12} className="opacity-0 transition-all group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Informasi</p>
            {infoRows.map(({ Icon, text }) => (
              <div key={text} className="mt-3 flex gap-2.5 text-xs leading-relaxed text-slate-400">
                <Icon size={13} className="mt-0.5 shrink-0 text-brand" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Node Coffee · All rights reserved</span>
          <span className="flex items-center gap-1.5">
            <Coffee size={12} className="text-brand" />
            Made in Yogyakarta
          </span>
        </div>
      </div>
    </footer>
  )
}
