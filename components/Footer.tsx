'use client'

import Image from 'next/image'
import {
  Camera, MessageCircle, MapPin, Coffee,
  Wifi, Clock, ArrowUpRight
} from 'lucide-react'

const navLinks = [
  { href: '#menu',      label: 'Menu' },
  { href: '#fasilitas', label: 'Fasilitas' },
  { href: '#lokasi',    label: 'Lokasi' },
  { href: '#promo',     label: 'Promo' },
]

const socials = [
  { href: 'https://instagram.com',        icon: Camera,         label: 'Instagram' },
  { href: 'https://wa.me/6283143957624',  icon: MessageCircle,  label: 'WhatsApp' },
  { href: '#lokasi',                       icon: MapPin,         label: 'Maps', scroll: true },
]

const infoRows = [
  { Icon: MapPin,  text: 'Jl. Ring Road Utara, Condongcatur, Sleman, Yogyakarta 55283' },
  { Icon: Clock,   text: 'Setiap hari, 07.00 – 23.00 WIB' },
  { Icon: Wifi,    text: 'Wi-Fi 6 · 1 Gbps dedicated' },
  { Icon: Coffee,  text: 'Menu mulai Rp 15.000' },
]

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer Node Coffee">
      <div className="container">

        {/* ── Main grid ── */}
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <Image
                src="/img/logo/logo.webp"
                alt="Node Coffee Logo"
                width={24}
                height={24}
                style={{ objectFit: 'contain' }}
              />
              <span>Node Coffee</span>
            </div>
            <p className="footer-tagline">
              Specialty coffee &amp; coworking space untuk mahasiswa
              dan freelancer di Yogyakarta.
            </p>
            <div className="footer-socials">
              {socials.map(({ href, icon: Icon, label, scroll }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-social-btn"
                  aria-label={label}
                  {...(scroll
                    ? { onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, href) }
                    : { target: '_blank', rel: 'noopener noreferrer' }
                  )}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-nav-col">
            <div className="footer-col-title">Navigasi</div>
            <nav>
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-nav-link"
                  onClick={(e) => handleScroll(e, href)}
                >
                  {label}
                  <ArrowUpRight size={11} />
                </a>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div className="footer-info-col">
            <div className="footer-col-title">Informasi</div>
            {infoRows.map(({ Icon, text }) => (
              <div className="footer-info-row" key={text}>
                <Icon size={13} className="footer-info-icon" />
                <span>{text}</span>
              </div>
            ))}
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <span>© 2026 Node Coffee · All rights reserved</span>
          <span className="footer-bottom-right">
            <Coffee size={11} />
            Made in Yogyakarta
          </span>
        </div>

      </div>
    </footer>
  )
}
