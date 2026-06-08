'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { scrollToElement } from '@/lib/scroll'

const NAV_LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#fasilitas', label: 'Fasilitas' },
  { href: '#lokasi', label: 'Lokasi' },
  { href: '#lead', label: 'Promo' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    setTimeout(() => scrollToElement(href), 50)
  }

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/60 bg-white/90 shadow-sm shadow-slate-200/40 backdrop-blur-xl'
            : 'border-b border-transparent bg-white/70 backdrop-blur-md'
        }`}
        aria-label="Navigasi utama"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Node Coffee — Beranda">
            <div className="relative">
              <Image
                src="/img/logo/logo.webp"
                alt="Node Coffee Logo"
                width={36}
                height={36}
                priority
                className="rounded-full transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -inset-1 -z-10 rounded-full bg-brand/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <span className="font-display text-base font-bold tracking-tight text-navy">Node Coffee</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-brand-light/50 hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#lead"
            onClick={(e) => handleNavClick(e, '#lead')}
            id="nav-voucher-btn"
            className="hidden cursor-pointer rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand/20 transition-all hover:bg-brand-dark hover:shadow-brand/30 md:inline-flex"
          >
            Klaim Voucher
          </a>

          <button
            type="button"
            className="cursor-pointer rounded-lg p-2 text-navy transition-colors hover:bg-slate-100 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/98 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi mobile"
      >
        <button
          type="button"
          className="absolute right-5 top-5 cursor-pointer rounded-lg p-2 text-navy hover:bg-slate-100"
          onClick={() => setMenuOpen(false)}
          aria-label="Tutup menu"
        >
          <X size={24} />
        </button>
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
            className="font-display text-2xl font-semibold text-navy"
          >
            {label}
          </a>
        ))}
        <a
          href="#lead"
          onClick={(e) => handleNavClick(e, '#lead')}
          id="nav-mobile-voucher-btn"
          className="cursor-pointer rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25"
        >
          Klaim Voucher
        </a>
      </div>
    </>
  )
}
