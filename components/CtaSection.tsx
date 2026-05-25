'use client'

import { useState } from 'react'
import { ArrowRight, MapPin, Gift, Check, AlertTriangle, SendHorizonal, ShieldCheck } from 'lucide-react'

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

type FormStatus = 'idle' | 'success' | 'error'

export default function CtaSection() {
  const [email, setEmail]   = useState('')
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
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="cta-sec" id="promo" aria-label="Klaim Voucher — CTA">
      {/* Decorative glow blobs */}
      <div className="cta-blob cta-blob--l" aria-hidden="true" />
      <div className="cta-blob cta-blob--r" aria-hidden="true" />

      <div className="container">
        <div className="cta-inner reveal">

          {/* Left — Copy */}
          <div className="cta-copy">
            <div className="tag" style={{ color: 'var(--blue-l)' }}>Penawaran Eksklusif</div>
            <h2 className="cta-h">
              Kopi gratis<br />
              untuk kunjungan<br />
              <em>pertamamu.</em>
            </h2>
            <p className="cta-sub">
              Daftarkan email dan klaim voucher Rp&nbsp;22.000 — berlaku untuk semua
              menu kopi panas &amp; dingin. Tidak perlu kode promo.
            </p>
            <a
              href="#lokasi"
              className="cta-loc-link"
              onClick={(e) => handleScroll(e, '#lokasi')}
            >
              <MapPin size={13} /> Jl. Ring Road Utara, Condongcatur, Yogyakarta
            </a>
          </div>

          {/* Right — Inline form */}
          <div className="cta-form-wrap">
            <div className="cta-form-card">
              {/* Badge */}
              <div className="cta-gift-badge">
                <Gift size={16} />
                <span>Voucher senilai <strong>Rp 22.000</strong></span>
              </div>

              <h3 className="cta-form-title">Klaim Sekarang</h3>
              <p className="cta-form-sub">Voucher otomatis dikirim ke email Anda.</p>

              <form onSubmit={handleSubmit} noValidate className="cta-form">
                <input
                  type="email"
                  className={`fi${status === 'error' ? ' fi-error' : ''}`}
                  placeholder="nama@email.com"
                  aria-label="Email untuk klaim voucher"
                  id="cta-email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'success'}
                />
                <button
                  type="submit"
                  className="fb"
                  id="cta-submit-btn"
                  disabled={status === 'success'}
                  style={
                    status === 'success' ? { background: 'linear-gradient(135deg,#10B981,#059669)' }
                    : status === 'error'  ? { background: 'linear-gradient(135deg,#EF4444,#DC2626)' }
                    : {}
                  }
                >
                  {status === 'success' ? <><Check size={15} /> Terkirim!</>
                   : status === 'error'  ? <><AlertTriangle size={15} /> Email tidak valid</>
                   : <><SendHorizonal size={15} /> Kirim Voucher</>}
                </button>
              </form>

              <p className="fn" style={{ marginTop: 10 }}>
                <ShieldCheck size={11} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                Email tidak dibagikan. Berhenti kapan saja.
              </p>

              <div className="cta-or">atau</div>

              <a
                href="#menu"
                className="cta-o cta-o--dark"
                onClick={(e) => handleScroll(e, '#menu')}
                id="cta-menu-link"
              >
                <ArrowRight size={14} /> Lihat Menu &amp; Harga
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
