'use client'

import Image from 'next/image'
import { Wifi, Timer, Plug, CreditCard, Star, Users, ShieldCheck, TrendingUp, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

type Feature = {
  Icon: LucideIcon
  title: string
  desc: string
  num: string
  unit: string
  span?: string
}

const features: Feature[] = [
  {
    Icon: Wifi,
    title: 'Wi-Fi 6 Dedicated',
    desc: 'Koneksi 1 Gbps stabil — video call, upload, dan streaming tanpa gangguan.',
    num: '1',
    unit: 'Gbps',
    span: 'sm:col-span-2',
  },
  {
    Icon: Timer,
    title: 'Self-Ordering Cepat',
    desc: 'Pesan via kiosk atau HP — pesanan langsung ke dapur tanpa antre kasir.',
    num: '4',
    unit: 'menit',
  },
  {
    Icon: Plug,
    title: 'Meja Berdaya',
    desc: 'Stop kontak + USB-C di setiap meja. Kursi ergonomis, meja lebar 80 cm.',
    num: '100',
    unit: '%',
  },
  {
    Icon: CreditCard,
    title: '100% Cashless',
    desc: 'QRIS, GoPay, OVO, ShopeePay, dan semua kartu debit/kredit.',
    num: 'QRIS',
    unit: '',
    span: 'sm:col-span-2',
  },
]

const miniStats = [
  { Icon: Star, val: '4.9/5', label: 'Google Rating' },
  { Icon: Users, val: '1.200+', label: 'Member aktif' },
  { Icon: ShieldCheck, val: '24/7', label: 'Support tersedia' },
  { Icon: TrendingUp, val: '97%', label: 'Pesanan < 4 menit' },
]

export default function FasilitasSection() {
  return (
    <section className="py-20 lg:py-28" id="fasilitas" aria-label="Fasilitas Node Coffee">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Fasilitas"
            title={<>Didesain untuk produktivitas, <span className="text-brand">bukan sekadar tempat duduk.</span></>}
            subtitle="Setiap detail dipilih agar kamu bisa datang, fokus, dan pulang dengan hasil kerja nyata."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <div className="card-shine relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-slate-200 lg:min-h-[420px]">
              <Image
                src="/img/hero/hero 1.webp"
                alt="Suasana interior Node Coffee — coworking space Yogyakarta"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl border border-white/20 bg-white/90 px-3.5 py-2 text-xs font-medium text-navy backdrop-blur-md">
                <MapPin size={13} className="text-brand" />
                Node Coffee, Yogyakarta
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              {miniStats.map(({ Icon, val, label }) => (
                <div
                  key={label}
                  className="card-shine rounded-2xl border border-slate-200 bg-white px-2 py-4 text-center"
                >
                  <Icon size={14} className="mx-auto mb-1.5 text-brand" />
                  <div className="font-display text-xs font-bold text-navy">{val}</div>
                  <div className="mt-0.5 text-[9px] leading-tight text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {features.map(({ Icon, title, desc, num, unit, span }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.06} className={span}>
                <div className="card-shine h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-light to-white text-brand shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-display text-base font-semibold text-navy">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                  <div className="mt-4 flex items-baseline gap-1 border-t border-slate-100 pt-4">
                    <span className="font-display text-2xl font-bold text-brand">{num}</span>
                    {unit && <span className="text-sm font-semibold text-brand/60">{unit}</span>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
