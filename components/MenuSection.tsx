'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { Coffee, Milk, Droplets, Package, Info, ChevronUp, ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type MenuItem = {
  Icon: LucideIcon
  name: string
  desc: string
  price: string
}

const menuItems: MenuItem[] = [
  { Icon: Coffee, name: 'Americano', desc: 'Hot / Iced', price: 'Rp 15.000' },
  { Icon: Milk, name: 'Café Latte', desc: 'Susu segar lokal', price: 'Rp 22.000' },
  { Icon: Droplets, name: 'Pour Over', desc: 'Flores / Gayo', price: 'Rp 25.000' },
  { Icon: Package, name: 'Paket Kerja', desc: 'Kopi + Croissant', price: 'Rp 35.000' },
]

const PRODUCT_IMAGES = [
  { src: '/img/product/americano.webp', alt: 'Americano Node Coffee', caption: 'Americano — Hot / Iced' },
  { src: '/img/product/Latte-Caffe.webp', alt: 'Café Latte Node Coffee', caption: 'Café Latte — Susu segar lokal' },
  { src: '/img/product/aren-latte.webp', alt: 'Aren Latte Node Coffee', caption: 'Aren Latte — Gula aren asli' },
  { src: '/img/product/paket-kerja.webp', alt: 'Paket Kerja Node Coffee', caption: 'Paket Kerja — Kopi + Croissant' },
  { src: '/img/product/biji-kopi.webp', alt: 'Biji Kopi Node Coffee', caption: 'Single origin — disangrai mingguan' },
]

export default function MenuSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', loop: true, duration: 25 }, [
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
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

  return (
    <section className="sec sec-warm" id="menu" aria-label="Menu Node Coffee">
      <div className="container">
        <div className="menu-section-inner">
          <div className="reveal">
            <MenuBranding
              emblaRef={emblaRef}
              selectedIndex={selectedIndex}
              scrollPrev={scrollPrev}
              scrollNext={scrollNext}
            />
          </div>

          <div className="reveal">
            <div className="menu-header">
              <div className="tag" style={{ marginBottom: 0 }}>Menu Unggulan</div>
              <div className="menu-update">Harga dine-in · update 2026</div>
            </div>
            <div className="menu-grid">
              {menuItems.map(({ Icon, name, desc, price }) => (
                <div className="menu-card" key={name}>
                  <div className="mi" aria-hidden="true">
                    <Icon size={28} />
                  </div>
                  <h5>{name}</h5>
                  <div className="md">{desc}</div>
                  <div className="mp">{price}</div>
                </div>
              ))}
            </div>
            <p className="menu-note">
              <Info size={11} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
              Menu lengkap tersedia di kiosk pemesanan mandiri
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function MenuBranding({
  emblaRef,
  selectedIndex,
  scrollPrev,
  scrollNext,
}: {
  emblaRef: ReturnType<typeof useEmblaCarousel>[0]
  selectedIndex: number
  scrollPrev: () => void
  scrollNext: () => void
}) {
  return (
    <>
      <div className="tag">Tentang Node Coffee</div>
      <h2 className="stl">
        Kopi Nusantara<br />
        Disangrai Mingguan
      </h2>
      <p className="sdsc">
        Biji kopi single origin dari Gayo, Toraja, dan Flores. Disangrai rutin
        agar rasa tetap konsisten, segar, dan mudah dinikmati setiap hari.
      </p>

      <div className="menu-product-carousel">
        <button
          type="button"
          className="menu-carousel-btn menu-carousel-btn--up"
          onClick={scrollPrev}
          aria-label="Produk sebelumnya"
        >
          <ChevronUp size={18} />
        </button>

        <div className="menu-carousel-viewport">
          <div className="embla embla--vertical" ref={emblaRef}>
            <div className="embla__container embla__container--vertical">
              {PRODUCT_IMAGES.map((product, index) => (
                <div
                  key={product.src}
                  className={`embla__slide embla__slide--vertical${index === selectedIndex ? ' is-active' : ''}`}
                >
                  <div className="menu-carousel-slide">
                    <Image
                      src={product.src}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 991px) 100vw, 40vw"
                      className="menu-carousel-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="cap menu-carousel-caption">{PRODUCT_IMAGES[selectedIndex]?.caption}</p>
        </div>

        <button
          type="button"
          className="menu-carousel-btn menu-carousel-btn--down"
          onClick={scrollNext}
          aria-label="Produk berikutnya"
        >
          <ChevronDown size={18} />
        </button>
      </div>
    </>
  )
}
