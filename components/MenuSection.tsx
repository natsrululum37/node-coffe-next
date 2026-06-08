'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import { Info, ChevronLeft, ChevronRight, Coffee } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

const PRODUCT_IMAGES = [
  { src: '/img/product/americano.webp', alt: 'Americano Node Coffee', caption: 'Americano — Hot / Iced' },
  { src: '/img/product/Latte-Caffe.webp', alt: 'Café Latte Node Coffee', caption: 'Café Latte — Susu segar lokal' },
  { src: '/img/product/aren-latte.webp', alt: 'Aren Latte Node Coffee', caption: 'Aren Latte — Gula aren asli' },
  { src: '/img/product/paket-kerja.webp', alt: 'Paket Kerja Node Coffee', caption: 'Paket Kerja — Kopi + Croissant' },
]

const MENU_PRICES = [
  { name: 'Americano', desc: 'Hot / Iced', price: 'Rp 18.000' },
  { name: 'Café Latte', desc: 'Susu segar lokal', price: 'Rp 22.000' },
  { name: 'Aren Latte', desc: 'Gula aren asli', price: 'Rp 24.000' },
  { name: 'Paket Kerja', desc: 'Kopi + Croissant', price: 'Rp 35.000' },
]

export default function MenuSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="relative bg-surface py-20 lg:py-28" id="menu" aria-label="Menu Node Coffee">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,136,229,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Menu & Kopi"
            title={<>Kopi Nusantara, <span className="text-brand">disangrai mingguan.</span></>}
            subtitle="Biji single origin dari Gayo, Toraja, dan Flores — disangrai rutin agar rasa tetap segar dan konsisten."
          />
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={0.1}>
            <div className="card-shine overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/img/product/biji-kopi.webp"
                  alt="Biji kopi segar Node Coffee"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-navy backdrop-blur-sm">
                  <Coffee size={14} className="text-brand" />
                  Single origin — disangrai mingguan
                </div>
              </div>

              <div className="divide-y divide-slate-100 p-1">
                {MENU_PRICES.map((item) => (
                  <div
                    key={item.name}
                    className="flex cursor-default items-baseline justify-between gap-4 px-5 py-4 transition-colors hover:bg-brand-light/20"
                  >
                    <div>
                      <div className="text-sm font-semibold text-navy">{item.name}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                    <div className="font-display text-sm font-bold text-brand">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Favorit Pelanggan</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500 shadow-sm">Harga dine-in · 2026</span>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-brand/5">
              <div className="embla aspect-[4/3]" ref={emblaRef}>
                <div className="embla__container">
                  {PRODUCT_IMAGES.map((item) => (
                    <div key={item.src} className="embla__slide relative aspect-[4/3]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent px-6 py-5">
                        <p className="font-display text-sm font-semibold text-white">{item.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Menu sebelumnya"
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-navy opacity-0 shadow-lg transition-all group-hover:opacity-100 hover:bg-brand hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Menu berikutnya"
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-navy opacity-0 shadow-lg transition-all group-hover:opacity-100 hover:bg-brand hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <p className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-xs text-slate-500">
              <Info size={13} className="shrink-0 text-brand" />
              Menu lengkap tersedia di kiosk pemesanan mandiri
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
