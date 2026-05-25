'use client'

import Image from 'next/image'
import { Wifi, Timer, Plug, CreditCard, TrendingUp, ShieldCheck, Users, Star, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Feature = {
  Icon: LucideIcon
  title: string
  desc: string
  num: string
  unit: string
  vs: string
  delay: string
}

const features: Feature[] = [
  {
    Icon: Wifi,
    title: 'Wi-Fi 6 Dedicated',
    desc: 'Koneksi 1 Gbps stabil — video call, upload, dan streaming tanpa gangguan.',
    num: '1',
    unit: 'Gbps',
    vs: 'Kafe biasa: 10–50 Mbps',
    delay: '0ms',
  },
  {
    Icon: Timer,
    title: 'Self-Ordering Cepat',
    desc: 'Pesan via kiosk atau HP — pesanan langsung ke dapur tanpa antre kasir.',
    num: '4',
    unit: 'menit',
    vs: 'Kafe biasa: 10–15 menit',
    delay: '80ms',
  },
  {
    Icon: Plug,
    title: 'Meja Berdaya',
    desc: 'Stop kontak + USB-C di setiap meja. Kursi ergonomis, meja lebar 80 cm.',
    num: '100',
    unit: '%',
    vs: 'Kafe biasa: terbatas',
    delay: '160ms',
  },
  {
    Icon: CreditCard,
    title: '100% Cashless',
    desc: 'QRIS, GoPay, OVO, ShopeePay, dan semua kartu debit/kredit.',
    num: 'QRIS',
    unit: '',
    vs: 'Tanpa uang tunai',
    delay: '240ms',
  },
]

const miniStats = [
  { Icon: Star,        val: '4.9/5',   label: 'Google Rating' },
  { Icon: Users,       val: '1.200+',  label: 'Member aktif' },
  { Icon: ShieldCheck, val: '24/7',    label: 'Support tersedia' },
  { Icon: TrendingUp,  val: '97%',     label: 'Pesanan < 4 menit' },
]

export default function FasilitasSection() {
  return (
    <section className="sec" id="fasilitas" aria-label="Fasilitas Node Coffee">
      <div className="container">

        {/* ── Section header (centered) ── */}
        <div className="fas-header reveal">
          <div className="tag">Fasilitas Unggulan</div>
          <h2 className="stl">
            Didesain untuk produktivitas.<br />
            <em>Bukan sekadar tempat duduk.</em>
          </h2>
          <p className="sdsc fas-sdsc">
            Setiap detail di Node Coffee dipilih agar kamu bisa datang, fokus, dan pulang
            dengan hasil kerja nyata.
          </p>
        </div>

        {/* ── 2-column: image left, cards right ── */}
        <div className="fasilitas-inner">

          {/* Kiri — Gambar + mini stats */}
          <div className="reveal fas-image-col">
            <div className="fas-image-wrap">
              <Image
                src="/img/hero/hero 1.webp"
                alt="Suasana interior Node Coffee — coworking space Yogyakarta"
                fill
                sizes="(max-width: 991px) 100vw, 42vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
              {/* Overlay label */}
              <div className="fas-image-badge">
                <MapPin size={11} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle', opacity: 0.7 }} />
                Node Coffee, Yogyakarta
              </div>
            </div>

            {/* Mini stats strip */}
            <div className="fas-stats">
              {miniStats.map(({ Icon, val, label }) => (
                <div className="fas-stat" key={label}>
                  <Icon size={13} className="fas-stat-icon" />
                  <div className="fas-stat-val">{val}</div>
                  <div className="fas-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Kanan — Feature Cards */}
          <div className="fas-cards reveal">
            <div className="feat-grid">
              {features.map(({ Icon, title, desc, num, unit, vs, delay }) => (
                <div className="feat" key={title} style={{ animationDelay: delay }}>
                  <div className="feat-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <div className="feat-num-row">
                    <span className="num">{num}</span>
                    {unit && <span className="feat-unit">{unit}</span>}
                  </div>
                  <div className="vs">
                    <TrendingUp size={9} style={{ display: 'inline', marginRight: 3, verticalAlign: 'middle' }} />
                    {vs}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
