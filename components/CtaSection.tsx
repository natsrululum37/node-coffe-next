'use client'

import { useState } from 'react'
import { ArrowRight, MapPin, Gift, Check, AlertTriangle, SendHorizonal, ShieldCheck } from 'lucide-react'
import { scrollToElement } from '@/lib/scroll'
import { Reveal } from '@/components/ui/Reveal'

type FormStatus = 'idle' | 'success' | 'error'

export default function CtaSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToElement(href)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2500)
      return
    }
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  const btnClass =
    status === 'success'
      ? 'bg-emerald-500 hover:bg-emerald-500'
      : status === 'error'
        ? 'bg-red-500 hover:bg-red-500'
        : 'bg-brand hover:bg-brand-dark shadow-brand/25'

  return (
    <section className="py-20 lg:py-28" id="promo" aria-label="Klaim Voucher — CTA">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-light via-white to-white p-8 shadow-xl shadow-brand/10 lg:grid lg:grid-cols-2 lg:gap-16 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand shadow-sm">
                Penawaran Eksklusif
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
                Kopi gratis untuk kunjungan{' '}
                <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
                  pertamamu.
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Daftarkan email dan klaim voucher Rp&nbsp;22.000 — berlaku untuk semua
                menu kopi panas &amp; dingin. Tidak perlu kode promo.
              </p>
              <a
                href="#lokasi"
                onClick={(e) => handleScroll(e, '#lokasi')}
                className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-brand"
              >
                <MapPin size={13} />
                Jl. Ring Road Utara, Condongcatur, Yogyakarta
              </a>
            </div>

            <div className="relative mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-lg backdrop-blur-sm lg:mt-0">
              <div className="flex items-center gap-2 rounded-xl border border-brand/20 bg-brand-light px-3.5 py-2.5 text-xs font-medium text-brand-dark">
                <Gift size={16} />
                Voucher senilai <strong>Rp 22.000</strong>
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-navy">Klaim Sekarang</h3>
              <p className="mt-1 text-xs text-slate-500">Voucher otomatis dikirim ke email Anda.</p>

              <form onSubmit={handleSubmit} noValidate className="mt-5">
                <input
                  type="email"
                  placeholder="nama@email.com"
                  aria-label="Email untuk klaim voucher"
                  id="cta-email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'success'}
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-navy placeholder:text-slate-400 outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20 ${
                    status === 'error' ? 'border-red-400' : 'border-slate-200'
                  }`}
                />
                <button
                  type="submit"
                  id="cta-submit-btn"
                  disabled={status === 'success'}
                  className={`mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition-all ${btnClass}`}
                >
                  {status === 'success' && <><Check size={15} /> Terkirim!</>}
                  {status === 'error' && <><AlertTriangle size={15} /> Email tidak valid</>}
                  {status === 'idle' && <><SendHorizonal size={15} /> Kirim Voucher</>}
                </button>
              </form>

              <p className="mt-3 flex items-center gap-1 text-[10px] text-slate-400">
                <ShieldCheck size={11} />
                Email tidak dibagikan. Berhenti kapan saja.
              </p>

              <div className="relative my-5 text-center text-xs text-slate-400">
                <span className="relative z-10 bg-white px-3">atau</span>
                <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
              </div>

              <a
                href="#menu"
                onClick={(e) => handleScroll(e, '#menu')}
                id="cta-menu-link"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-navy transition-all hover:border-brand hover:bg-brand-light/30 hover:text-brand"
              >
                <ArrowRight size={14} /> Lihat Menu &amp; Harga
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
