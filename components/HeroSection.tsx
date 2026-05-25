'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { Tag, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const HERO_IMAGES = [
  { src: '/img/hero/hero%201.webp', alt: 'Node Coffee — Interior 1' },
  { src: '/img/hero/hero%202.webp', alt: 'Node Coffee — Interior 2' },
  { src: '/img/hero/hero%203.webp', alt: 'Node Coffee — Interior 3' },
]

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" aria-label="Hero — Node Coffee">
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

        <button
          className="carousel-button carousel-button--prev"
          onClick={scrollPrev}
          aria-label="Slide sebelumnya"
          type="button"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          className="carousel-button carousel-button--next"
          onClick={scrollNext}
          aria-label="Slide berikutnya"
          type="button"
        >
          <ChevronRight size={22} />
        </button>

        <div className="carousel-indicators carousel-indicators--hero" aria-label="Indikator slide hero">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator${index === selectedIndex ? ' active' : ''}`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Slide ${index + 1}`}
              aria-current={index === selectedIndex ? 'true' : undefined}
              type="button"
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="ov">Ruang kerja nyaman untuk mahasiswa &amp; freelancer</div>
        <h1>
          Belajar ngebut,<br />
          <em>kerja tetap fokus.</em>
        </h1>
        <p className="sub">
          Wi-Fi stabil, banyak colokan, dan suasana tenang. Pesan cepat tanpa antre.
          Cocok untuk tugas, deadline freelance, dan meeting singkat.
        </p>

        <div className="hero-info">
          <span>
            <Tag size={13} className="icon" aria-hidden="true" />
            Mulai Rp 15.000
          </span>
          <span>
            <MapPin size={13} className="icon" aria-hidden="true" />
            5 menit dari AMIKOM
          </span>
          <span>
            <Clock size={13} className="icon" aria-hidden="true" />
            Buka 07.00–23.00
          </span>
        </div>

        <div className="acts">
          <a
            href="#lead"
            className="cta cta-lg"
            onClick={(e) => handleScroll(e, '#lead')}
            id="hero-voucher-btn"
          >
            Klaim Voucher Kopi <ArrowRight size={16} />
          </a>
          <a
            href="#menu"
            className="cta-o"
            onClick={(e) => handleScroll(e, '#menu')}
            id="hero-menu-btn"
          >
            Lihat Menu &amp; Harga
          </a>
        </div>

        <div className="hero-metrics" aria-label="Statistik Node Coffee">
          <div className="m">
            <div className="v">±4 menit</div>
            <div className="l">Rata-rata pesanan siap</div>
          </div>
          <div className="m">
            <div className="v">1 Gbps</div>
            <div className="l">Wi-Fi stabil untuk kelas/kerja</div>
          </div>
          <div className="m">
            <div className="v">4.9/5</div>
            <div className="l">320+ review</div>
          </div>
          <div className="m">
            <div className="v">1.200+</div>
            <div className="l">Member aktif</div>
          </div>
        </div>
      </div>
    </section>
  )
}

