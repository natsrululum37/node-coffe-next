'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { Tag, MapPin, Clock, ArrowRight, Star, Wifi } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { scrollToElement } from '@/lib/scroll'
import { NetworkPattern } from '@/components/ui/NetworkPattern'

const HERO_IMAGES = [
  { src: '/img/hero/hero 1.webp', alt: 'Node Coffee — Interior nyaman untuk kerja' },
  { src: '/img/hero/hero 2.webp', alt: 'Node Coffee — Suasana coworking space' },
  { src: '/img/hero/hero 3.webp', alt: 'Node Coffee — Kopi dan produktivitas' },
]

const SLIDE_DELAY = 5500

const METRICS = [
  { value: '±4 menit', label: 'Pesanan siap' },
  { value: '1 Gbps', label: 'Wi-Fi stabil' },
  { value: '4.9', label: '320+ review', star: true },
  { value: '1.200+', label: 'Member aktif' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion()
  const autoplayRef = useRef(Autoplay({ delay: SLIDE_DELAY, stopOnInteraction: false, stopOnMouseEnter: true }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 }, [autoplayRef.current])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  useEffect(() => {
    if (reduceMotion) {
      setProgress(100)
      return
    }
    setProgress(0)
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const pct = Math.min(((now - start) / SLIDE_DELAY) * 100, 100)
      setProgress(pct)
      if (pct < 100) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [selectedIndex, reduceMotion])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToElement(href)
  }

  const MotionWrap = reduceMotion ? 'div' : motion.div

  return (
    <section className="mesh-hero grain relative overflow-hidden pt-16" aria-label="Hero — Node Coffee">
      <NetworkPattern className="pointer-events-none absolute right-0 top-20 h-80 w-80 opacity-60 lg:right-8 lg:top-12 lg:h-96 lg:w-96" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
        <MotionWrap
          {...(!reduceMotion && { initial: 'hidden', animate: 'visible' })}
          className="text-center lg:text-left"
        >
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            custom={0}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand backdrop-blur-sm"
          >
            <Wifi size={12} />
            Coworking &amp; Specialty Coffee
          </motion.p>

          <motion.h1
            variants={reduceMotion ? undefined : fadeUp}
            custom={1}
            className="font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]"
          >
            Belajar ngebut,{' '}
            <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
              kerja tetap fokus.
            </span>
          </motion.h1>

          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            custom={2}
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-600 lg:mx-0"
          >
            Wi-Fi stabil, banyak colokan, dan suasana tenang.
            Pesan cepat tanpa antre — cocok untuk tugas, deadline, dan meeting.
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            custom={3}
            className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {[
              { Icon: Tag, text: 'Mulai Rp 15.000' },
              { Icon: MapPin, text: '5 menit dari AMIKOM' },
              { Icon: Clock, text: 'Buka 07.00–23.00' },
            ].map(({ Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm"
              >
                <Icon size={13} className="text-brand" aria-hidden="true" />
                {text}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            custom={4}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#lead"
              onClick={(e) => handleScroll(e, '#lead')}
              id="hero-voucher-btn"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-brand/35"
            >
              Klaim Voucher Kopi
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#menu"
              onClick={(e) => handleScroll(e, '#menu')}
              id="hero-menu-btn"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-7 py-3.5 text-sm font-semibold text-navy backdrop-blur-sm transition-all hover:border-brand hover:text-brand"
            >
              Lihat Menu &amp; Harga
            </a>
          </motion.div>
        </MotionWrap>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative"
        >
          <div className="gradient-border overflow-hidden rounded-3xl shadow-2xl shadow-brand/15">
            <div className="embla aspect-[4/3]" ref={emblaRef}>
              <div className="embla__container">
                {HERO_IMAGES.map((image, index) => (
                  <div key={image.src} className="embla__slide relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md sm:block lg:-left-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light">
                <Wifi size={18} className="text-brand" />
              </div>
              <div>
                <div className="text-sm font-bold text-navy">Wi-Fi 6 · 1 Gbps</div>
                <div className="text-[11px] text-slate-500">Dedicated per zona</div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-2" aria-label="Slide indicator">
            {HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`relative h-1.5 cursor-pointer overflow-hidden rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'w-10 bg-brand/25' : 'w-4 bg-slate-200 hover:bg-slate-300'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Slide ${index + 1}`}
                aria-current={index === selectedIndex ? 'true' : undefined}
              >
                {index === selectedIndex && (
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-brand"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 divide-x divide-slate-100 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-lg shadow-slate-200/50 backdrop-blur-sm sm:grid-cols-4"
          aria-label="Statistik Node Coffee"
        >
          {METRICS.map((m) => (
            <div key={m.label} className="group px-4 py-6 text-center transition-colors hover:bg-brand-light/30 sm:px-6">
              <div className="flex items-center justify-center gap-1 font-display text-xl font-bold text-navy">
                {m.value}
                {m.star && <Star size={15} className="fill-brand text-brand" />}
              </div>
              <div className="mt-1.5 text-xs font-medium text-slate-500">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
