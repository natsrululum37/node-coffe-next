'use client'

import { useState } from 'react'
import {
  Gift, ShieldCheck, Check,
  MapPin, Building2, Clock, Navigation, Car, AlertTriangle, SendHorizonal,
  Wifi, Zap, Coffee, Frown, CheckCircle2
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { NetworkPattern } from '@/components/ui/NetworkPattern'

const pasItems = [
  {
    label: 'Masalah',
    icon: Frown,
    title: 'Kafe ramai, koneksi tidak stabil, colokan terbatas.',
    desc: 'Tempat kerja cepat penuh, Wi-Fi terbagi, dan antrean bikin waktu terbuang.',
  },
  {
    label: 'Dampak',
    icon: Clock,
    title: 'Tugas tertunda, deadline mepet.',
    desc: 'Video call patah, upload gagal, dan fokus kerja pecah.',
  },
  {
    label: 'Solusi',
    icon: CheckCircle2,
    title: 'Node Coffee: koneksi stabil, pesanan cepat, meja siap kerja.',
    desc: 'Self-ordering ringkas, stop kontak di tiap meja, dan suasana yang mendukung fokus.',
    highlight: true,
  },
]

const benefits = [
  { icon: Coffee, text: 'Berlaku semua menu kopi hot/iced' },
  { icon: Zap, text: 'Langsung terdaftar sebagai member' },
  { icon: Wifi, text: 'Update promo dan diskon pelajar' },
]

type FormStatus = 'idle' | 'success' | 'error'

export default function LeadSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2500)
      return
    }
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3500)
  }

  const btnClass =
    status === 'success'
      ? 'bg-emerald-500 hover:bg-emerald-500'
      : status === 'error'
        ? 'bg-red-500 hover:bg-red-500'
        : 'bg-brand hover:bg-brand-dark shadow-brand/25 hover:shadow-brand/35'

  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28" id="lead" aria-label="Klaim Voucher & Lokasi">
      <NetworkPattern className="pointer-events-none absolute -right-16 top-10 h-72 w-72 opacity-30" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeader
            light
            tag="Promo & Lokasi"
            title={<>Mulai dari sini, <span className="text-brand">fokus dari hari pertama.</span></>}
            subtitle="Klaim voucher kopi gratis dan temukan kami di dekat kampus — siap untuk kerja produktif."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm sm:grid-cols-3">
            {pasItems.map(({ label, icon: Icon, title, desc, highlight }) => (
              <div
                key={label}
                className={`p-6 transition-colors ${highlight ? 'bg-brand/15' : 'bg-white/5 hover:bg-white/8'}`}
              >
                <Icon size={20} className="mb-3 text-brand" strokeWidth={2} />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{label}</span>
                <h4 className="mt-2 text-sm font-semibold leading-snug text-white">{title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Penawaran Terbatas</span>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">
                Voucher Kopi{' '}
                <span className="text-brand">Rp 22.000</span>
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Daftar sekarang dan nikmati kopi gratis di kunjungan pertama Anda.
              </p>
              <ul className="mt-5 space-y-3">
                {benefits.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                      <Icon size={10} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-slate-300">
                <ShieldCheck size={14} className="shrink-0 text-brand" />
                Sudah dipercaya <strong className="text-white">1.200+ member aktif</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl shadow-black/20">
              <h3 className="font-display text-lg font-bold text-navy">Klaim Voucher Kopi</h3>
              <p className="mt-1 text-xs text-slate-500">Voucher langsung dikirim ke email Anda.</p>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-brand/20 bg-brand-light px-3.5 py-2.5 text-xs font-medium text-brand-dark">
                <Gift size={15} />
                Voucher kopi senilai <strong>Rp 22.000</strong>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-5">
                <label htmlFor="voucher-email-input" className="mb-1.5 block text-xs font-medium text-slate-500">
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="voucher-email-input"
                  placeholder="nama@email.com"
                  aria-label="Alamat email untuk voucher"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'success'}
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-navy placeholder:text-slate-400 outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 ${
                    status === 'error' ? 'border-red-400' : 'border-slate-200'
                  }`}
                />
                <button
                  type="submit"
                  id="voucher-submit-btn"
                  disabled={status === 'success'}
                  className={`mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition-all ${btnClass}`}
                >
                  {status === 'success' && <><Check size={16} /> Voucher Terkirim!</>}
                  {status === 'error' && <><AlertTriangle size={16} /> Masukkan email yang valid</>}
                  {status === 'idle' && <><SendHorizonal size={16} /> Kirim Voucher Sekarang</>}
                </button>
              </form>

              <p className="mt-3 flex items-center gap-1 text-[10px] text-slate-400">
                <ShieldCheck size={11} />
                Email tidak dibagikan. Berhenti kapan saja.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="lg:col-span-1" >
            <div id="lokasi" className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="flex items-center gap-2 font-display text-sm font-bold text-white">
                <MapPin size={16} className="text-brand" />
                Lokasi &amp; Jam Buka
              </h4>

              {[
                { Icon: Building2, text: 'Jl. Ring Road Utara, Condongcatur, Sleman, Yogyakarta 55283' },
                { Icon: Clock, text: 'Senin–Minggu, 07.00–23.00 WIB' },
                { Icon: Navigation, text: '5 menit dari AMIKOM · 8 menit dari UPN · 10 menit dari UGM' },
                { Icon: Car, text: 'Parkir motor & mobil tersedia' },
              ].map(({ Icon, text }) => (
                <div key={text} className="mt-3 flex gap-3 text-xs leading-relaxed text-slate-300">
                  <Icon size={14} className="mt-0.5 shrink-0 text-brand" />
                  <span>{text}</span>
                </div>
              ))}

              <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2!2d110.4!3d-7.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDUnMDAuMCJTIDExMMKwMjQnMDAuMCJF!5e0!3m2!1sid!2sid!4v1"
                  title="Lokasi Node Coffee di Google Maps"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-44 w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
