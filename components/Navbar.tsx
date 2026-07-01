'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const links = [
    { label: 'TENTANG', href: '#about' },
    { label: 'MENU', href: '#menu' },
    { label: 'FASILITAS', href: '#fasilitas' },
    { label: 'LOKASI', href: '#lokasi' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white dark:bg-slate-950 border-b-2 border-slate-900 dark:border-white py-3' : 'bg-white dark:bg-slate-950 py-5 border-b-2 border-transparent'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="font-sans font-black text-2xl md:text-3xl tracking-tighter uppercase text-slate-900 dark:text-white z-[60] flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <motion.div 
              className="relative h-10 w-10"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
            >
              <Image src="/logo/logo.webp" alt="Node Coffee Logo" fill sizes="40px" className="object-contain" priority />
            </motion.div>
            <span>NODE<span className="text-blue-600">COFFEE.</span></span>
          </Link>

          <ul className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm font-black tracking-widest uppercase text-slate-900 dark:text-white hover:bg-blue-600 hover:text-white transition-colors px-4 py-2 border-2 border-transparent hover:border-slate-900 dark:hover:border-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            <a href="#lead" onClick={(e) => handleNavClick(e, '#lead')} className="text-sm font-black tracking-widest uppercase text-white bg-blue-600 border-2 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#0f172a] dark:shadow-[4px_4px_0_0_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all px-6 py-2">
              GABUNG MEMBER
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4 z-[60]">
            <ThemeToggle />
            <button aria-label="Toggle menu" className="text-slate-900 dark:text-white border-2 border-slate-900 dark:border-white p-1 hover:bg-blue-600 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: "backOut" }}
            className="fixed inset-0 z-50 bg-white dark:bg-slate-950 flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-black text-4xl sm:text-6xl tracking-tighter text-slate-900 dark:text-white hover:text-blue-600 transition-colors uppercase"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#lead"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={(e) => handleNavClick(e, '#lead')}
              className="mt-8 text-xl font-black tracking-widest text-white bg-blue-600 border-2 border-slate-900 dark:border-white shadow-[6px_6px_0_0_#0f172a] dark:shadow-[6px_6px_0_0_#ffffff] px-8 py-4 uppercase"
            >
              GABUNG MEMBER
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
