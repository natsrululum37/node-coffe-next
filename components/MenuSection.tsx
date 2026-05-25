'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import { Info, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const PRODUCT_IMAGES = [
  { src: '/img/product/americano.webp', alt: 'Americano Node Coffee', caption: 'Americano — Hot / Iced' },
  { src: '/img/product/Latte-Caffe.webp', alt: 'Café Latte Node Coffee', caption: 'Café Latte — Susu segar lokal' },
  { src: '/img/product/aren-latte.webp', alt: 'Aren Latte Node Coffee', caption: 'Aren Latte — Gula aren asli' },
  { src: '/img/product/paket-kerja.webp', alt: 'Paket Kerja Node Coffee', caption: 'Paket Kerja — Kopi + Croissant' },
]

export default function MenuSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="sec sec-warm" id="menu" aria-label="Menu Node Coffee">
      <div className="container">
        <div className="menu-section-inner">

          {/* ── KIRI: Tentang Node Coffee ── */}
          <div className="menu-left-col reveal">
            <div className="tag">Tentang Node Coffee</div>
            <h2 className="stl">
              Kopi Nusantara<br />
              Disangrai Mingguan
            </h2>
            <p className="sdsc">
              Biji kopi single origin dari Gayo, Toraja, dan Flores. Disangrai rutin
              agar rasa tetap konsisten, segar, dan mudah dinikmati setiap hari.
            </p>
            <div className="menu-brand-wrap">
              <div className="menu-brand-image">
                <Image
                  src="/img/product/biji-kopi.webp"
                  alt="Biji kopi segar Node Coffee"
                  fill
                  sizes="(max-width: 991px) 100vw, 40vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="menu-brand-caption">Single origin — disangrai mingguan</p>
            </div>
          </div>

          {/* ── KANAN: Menu Unggulan (Carousel) ── */}
          <div className="menu-right-col reveal">
            <div className="menu-header">
              <div className="tag" style={{ marginBottom: 0 }}>Menu Unggulan</div>
              <div className="menu-update">Harga dine-in · update 2026</div>
            </div>

            <div className="menu-carousel-wrap">
              <div className="menu-embla" ref={emblaRef}>
                <div className="menu-embla__container">
                  {PRODUCT_IMAGES.map((item) => (
                    <div className="menu-embla-slide" key={item.src}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 991px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="menu-carousel-caption-overlay">
                        {item.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="menu-nav-btn menu-nav-btn--prev"
                onClick={scrollPrev}
                aria-label="Menu sebelumnya"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="menu-nav-btn menu-nav-btn--next"
                onClick={scrollNext}
                aria-label="Menu berikutnya"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <p className="menu-note" style={{ marginTop: '16px' }}>
              <Info size={11} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
              Menu lengkap tersedia di kiosk pemesanan mandiri
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
