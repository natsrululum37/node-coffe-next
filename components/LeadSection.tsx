'use client'

import { useState } from 'react'
import {
  Gift, ShieldCheck, Check,
  MapPin, Building2, Clock, Navigation, Car, AlertTriangle, SendHorizonal,
  Wifi, Zap, Coffee, AlertCircle, Timer, CheckCircle
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const pasItems = [
  {
    type: 'p',
    label: 'Masalah',
    Icon: AlertCircle,
    title: 'Kafe ramai, koneksi tidak stabil, colokan terbatas.',
    desc: 'Tempat kerja cepat penuh, Wi-Fi terbagi, dan antrean bikin waktu terbuang.',
  },
  {
    type: 'a',
    label: 'Dampak',
    Icon: Timer,
    title: 'Tugas tertunda, deadline mepet.',
    desc: 'Video call patah, upload gagal, dan fokus kerja pecah.',
  },
  {
    type: 's',
    label: 'Solusi',
    Icon: CheckCircle,
    title: 'Node Coffee: koneksi stabil, pesanan cepat, meja siap kerja.',
    desc: 'Self-ordering ringkas, stop kontak di tiap meja, dan suasana yang mendukung fokus.',
  },
]

const benefits = [
  { icon: Coffee,  text: 'Berlaku semua menu kopi hot/iced' },
  { icon: Zap,     text: 'Langsung terdaftar sebagai member' },
  { icon: Wifi,    text: 'Update promo dan diskon pelajar' },
]

type FormStatus = 'idle' | 'success' | 'error'

export default function LeadSection() {
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
    setTimeout(() => setStatus('idle'), 3500)
  }

  const btnContent = () => {
    if (status === 'success') return <><Check size={16} /> Voucher Terkirim!</>
    if (status === 'error')   return <><AlertTriangle size={16} /> Masukkan email yang valid</>
    return <><SendHorizonal size={16} /> Kirim Voucher Sekarang</>
  }

  return (
    <section className="sec sec-dark" id="lead" aria-label="Klaim Voucher & Lokasi">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="lead-section-header reveal">
          <div className="tag">Kenapa Node Coffee?</div>
          <h2 className="stl">
            Tempat yang <em>benar-benar</em> mendukung<br />
            produktivitasmu.
          </h2>
          <p className="sdsc lead-sdsc">
            Dirancang untuk mahasiswa dan freelancer yang butuh fokus—bukan sekadar tempat duduk.
          </p>
        </div>

        {/* ── PAS Cards ── */}
        <div className="pas-grid reveal">
          {pasItems.map((item) => (
            <div className={`pas ${item.type}`} key={item.type}>
              <span className="pas-icon"><item.Icon size={18} /></span>
              <span className="lb">{item.label}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>


        {/* ── Lead + Location Grid ── */}
        <div className="lead-grid reveal">

          {/* Kiri: Voucher Info */}
          <div className="lead-voucher-col">
            <div className="tag">Penawaran Terbatas</div>
            <h2 className="stl">
              Voucher Kopi<br />
              <em>Rp 22.000</em>
            </h2>
            <p className="lead-sub">
              Daftar sekarang dan nikmati kopi gratis di kunjungan pertama Anda.
            </p>
            <ul className="b-list">
              {benefits.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <div className="ck" aria-hidden="true">
                    <Icon size={10} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            {/* Trust badge */}
            <div className="lead-trust">
              <ShieldCheck size={13} />
              Sudah dipercaya <strong>1.200+ member aktif</strong>
            </div>
          </div>

          {/* Tengah: Form Card */}
          <div>
            <div className="f-card">
              <div className="f-card-header">
                <div className="ft">Klaim Voucher Kopi</div>
                <div className="fs">Voucher langsung dikirim ke email Anda.</div>
              </div>

              <div className="save-badge">
                <Gift size={15} />
                Voucher kopi senilai <strong>Rp 22.000</strong>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="voucher-email-input" className="fi-label">
                  Alamat Email
                </label>
                <input
                  type="email"
                  className={`fi${status === 'error' ? ' fi-error' : ''}`}
                  placeholder="nama@email.com"
                  aria-label="Alamat email untuk voucher"
                  id="voucher-email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'success'}
                />
                <button
                  type="submit"
                  className="fb"
                  id="voucher-submit-btn"
                  disabled={status === 'success'}
                  style={
                    status === 'success' ? { background: 'linear-gradient(135deg,#10B981,#059669)' }
                    : status === 'error'  ? { background: 'linear-gradient(135deg,#EF4444,#DC2626)' }
                    : {}
                  }
                >
                  {btnContent()}
                </button>
              </form>

              <p className={`fn${status === 'success' ? ' success' : ''}`}>
                <ShieldCheck size={11} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                Email tidak dibagikan. Berhenti kapan saja.
              </p>
            </div>
          </div>

          {/* Kanan: Location Card */}
          <div id="lokasi">
            <div className="loc-card">
              <h4>
                <MapPin size={16} className="icon" />
                Lokasi &amp; Jam Buka
              </h4>
              <div className="loc-row">
                <Building2 size={15} className="icon" />
                <div>
                  Jl. Ring Road Utara, Condongcatur,<br />
                  Sleman, Yogyakarta 55283
                </div>
              </div>
              <div className="loc-row">
                <Clock size={15} className="icon" />
                <div>Senin–Minggu, 07.00–23.00 WIB</div>
              </div>
              <div className="loc-row">
                <Navigation size={15} className="icon" />
                <div>5 menit dari AMIKOM · 8 menit dari UPN · 10 menit dari UGM</div>
              </div>
              <div className="loc-row">
                <Car size={15} className="icon" />
                <div>Parkir motor &amp; mobil tersedia</div>
              </div>
              <div className="map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2!2d110.4!3d-7.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDUnMDAuMCJTIDExMMKwMjQnMDAuMCJF!5e0!3m2!1sid!2sid!4v1"
                  title="Lokasi Node Coffee di Google Maps"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
