'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }

  return (
    <>
      <nav className="nav-main" aria-label="Navigasi utama" style={scrolled ? { background: 'rgba(9,9,11,0.97)' } : {}}>
        <div className="container">
          <Link href="/" className="logo" aria-label="Node Coffee — Beranda">
            <div className="logo-img-wrapper">
              <Image
                src="/img/logo/logo.webp"
                alt="Node Coffee Logo"
                width={48}
                height={48}
                priority
                className="logo-img"
              />
            </div>
            <span className="logo-text">Node Coffee</span>
          </Link>

          {/* Desktop Links */}
          <ul className="links" role="list">
            <li><a href="#menu" onClick={(e) => handleNavClick(e, '#menu')}>Menu</a></li>
            <li><a href="#fasilitas" onClick={(e) => handleNavClick(e, '#fasilitas')}>Fasilitas</a></li>
            <li><a href="#lokasi" onClick={(e) => handleNavClick(e, '#lokasi')}>Lokasi</a></li>
            <li><a href="#lead" onClick={(e) => handleNavClick(e, '#lead')}>Promo</a></li>
          </ul>

          {/* Desktop CTA */}
          <a
            href="#lead"
            className="cta nav-cta-desktop"
            onClick={(e) => handleNavClick(e, '#lead')}
            id="nav-voucher-btn"
          >
            Klaim Voucher
          </a>

          {/* Mobile Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi mobile"
      >
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Tutup menu"
        >
          <X size={24} />
        </button>
        <a href="#menu" onClick={(e) => handleNavClick(e, '#menu')}>Menu</a>
        <a href="#fasilitas" onClick={(e) => handleNavClick(e, '#fasilitas')}>Fasilitas</a>
        <a href="#lokasi" onClick={(e) => handleNavClick(e, '#lokasi')}>Lokasi</a>
        <a href="#lead" onClick={(e) => handleNavClick(e, '#lead')}>Promo</a>
        <a
          href="#lead"
          className="cta"
          onClick={(e) => handleNavClick(e, '#lead')}
          id="nav-mobile-voucher-btn"
        >
          Klaim Voucher
        </a>
      </div>
    </>
  )
}
