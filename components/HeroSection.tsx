'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import { Tag, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const HERO_IMAGES = [
  { src: '/img/hero/hero 1.webp', alt: 'Node Coffee — Interior nyaman untuk kerja' },
  { src: '/img/hero/hero 2.webp', alt: 'Node Coffee — Suasana coworking space' },
  { src: '/img/hero/hero 3.webp', alt: 'Node Coffee — Kopi dan produktivitas' },
]

const SLIDE_DELAY = 5500

export default function HeroSection() {
  const autoplayRef = useRef(Autoplay({ delay: SLIDE_DELAY, stopOnInteraction: false, stopOnMouseEnter: true }))

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 50 },
    [autoplayRef.current]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  /* Sinkronisasi index aktif */
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  /* Progress bar animasi per slide */
  useEffect(() => {
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
  }, [selectedIndex])

  /* Reveal observer */
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" aria-label="Hero — Node Coffee">
      {/* ── Background Carousel ── */}
      <div className="hero-carousel-container">
        <div className="embla hero-embla" ref={emblaRef}>
          <div className="embla__container">
            {HERO_IMAGES.map((image, index) => (
              <div
                key={image.src}
                className={`embla__slide${index === selectedIndex ? ' is-active' : ''}`}
              >
                <div className="hero-bg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="hero-bg-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav Buttons */}
        <button className="hero-nav-btn hero-nav-btn--prev" onClick={scrollPrev} aria-label="Slide sebelumnya" type="button">
          <ChevronLeft size={20} />
        </button>
        <button className="hero-nav-btn hero-nav-btn--next" onClick={scrollNext} aria-label="Slide berikutnya" type="button">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* ── Content ── */}
      <div className="container hero-content">
        <div className="hero-text-block">
          <div className="ov">Ruang kerja nyaman untuk mahasiswa &amp; freelancer</div>
          <h1>
            Belajar ngebut,<br />
            <em>kerja tetap fokus.</em>
          </h1>
          <p className="sub">
            Wi-Fi stabil, banyak colokan, dan suasana tenang.
            Pesan cepat tanpa antre — cocok untuk tugas, deadline, dan meeting.
          </p>

          <div className="hero-info">
            <span><Tag size={13} className="icon" aria-hidden="true" />Mulai Rp 15.000</span>
            <span><MapPin size={13} className="icon" aria-hidden="true" />5 menit dari AMIKOM</span>
            <span><Clock size={13} className="icon" aria-hidden="true" />Buka 07.00–23.00</span>
          </div>

          <div className="acts">
            <a href="#lead" className="cta cta-lg" onClick={(e) => handleScroll(e, '#lead')} id="hero-voucher-btn">
              Klaim Voucher Kopi <ArrowRight size={16} />
            </a>
            <a href="#menu" className="cta-o" onClick={(e) => handleScroll(e, '#menu')} id="hero-menu-btn">
              Lihat Menu &amp; Harga
            </a>
          </div>
        </div>

        {/* ── Indikator + Progress (BAWAH) ── */}
        <div className="hero-bottom-bar">
          <div className="hero-indicators" aria-label="Slide indicator">
            {HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`hero-dot${index === selectedIndex ? ' active' : ''}`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Slide ${index + 1}`}
                aria-current={index === selectedIndex ? 'true' : undefined}
              >
                {index === selectedIndex && (
                  <span className="hero-dot-progress" style={{ width: `${progress}%` }} />
                )}
              </button>
            ))}
          </div>

          <div className="hero-metrics" aria-label="Statistik Node Coffee">
            <div className="m"><div className="v">±4 menit</div><div className="l">Pesanan siap</div></div>
            <div className="m"><div className="v">1 Gbps</div><div className="l">Wi-Fi stabil</div></div>
            <div className="m">
              <div className="v" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                4.9<Star size={16} fill="currentColor" strokeWidth={0} />
              </div>
              <div className="l">320+ review</div>
            </div>
            <div className="m"><div className="v">1.200+</div><div className="l">Member aktif</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
