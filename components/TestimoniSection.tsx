'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Wi-Fi stabil banget buat kelas online dan upload file desain besar. Suasananya tenang, enak buat fokus kerja seharian.',
    initials: 'RN',
    name: 'Raihan Nugraha',
    role: 'Mahasiswa DKV, UNY',
    sub: '24 kunjungan bulan ini',
    avatarClass: 'a',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Self-ordering super praktis, kopi datang dalam 4 menit. Tinggal duduk, buka laptop, langsung kerja. Favorit buat nulis artikel.',
    initials: 'SA',
    name: 'Siti Amara',
    role: 'Content Writer Freelance',
    sub: 'Member sejak Januari 2026',
    avatarClass: 'b',
    platform: 'Instagram Review',
    rating: 5,
  },
  {
    quote: 'Colokan di tiap meja itu life saver. Koneksinya stabil, harganya ramah kantong. Lebih baik dari kafe mana pun yang pernah saya coba.',
    initials: 'BD',
    name: 'Bagas Dwi',
    role: 'UI/UX Designer',
    sub: 'Via Google Review',
    avatarClass: 'c',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Tempat paling nyaman buat ngerjain skripsi. Tidak berisik, Wi-Fi kenceng, kopi enak, dan harganya tidak bikin kantong jebol.',
    initials: 'FA',
    name: 'Fara Aulia',
    role: 'Mahasiswi Hukum, UGM',
    sub: 'Member Gold',
    avatarClass: 'a',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Satu-satunya kafe yang benar-benar paham kebutuhan remote worker. Stop kontak di meja, kopi specialty, suasana yang mendukung fokus.',
    initials: 'MR',
    name: 'Muhammad Rizki',
    role: 'Backend Developer',
    sub: 'Member sejak 2025',
    avatarClass: 'c',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Sudah coba banyak kafe di Jogja, Node Coffee yang paling konsisten. Pesanan cepat, koneksi stabil, pelayanan ramah.',
    initials: 'DL',
    name: 'Diana Listya',
    role: 'Graphic Designer Freelance',
    sub: '15+ kunjungan',
    avatarClass: 'b',
    platform: 'Instagram Review',
    rating: 5,
  },
]

const trustStats = [
  { value: '4.9', unit: '/5',   label: 'Google Review' },
  { value: '1.200', unit: '+',  label: 'Member aktif' },
  { value: '320',  unit: '+',   label: 'Review positif' },
  { value: '97',   unit: '%',   label: 'Pesanan < 4 menit' },
]

function TestimoniCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="tc-marquee">
      {/* Big decorative quote mark */}
      <div className="tc-big-quote" aria-hidden="true">&ldquo;</div>

      {/* Stars + platform */}
      <div className="tc-stars-row">
        <div className="tc-stars" aria-label={`Rating ${t.rating} bintang`}>
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} size={12} fill="currentColor" aria-hidden="true" />
          ))}
        </div>
        <span className="tc-platform-badge">{t.platform}</span>
      </div>

      {/* Quote */}
      <p className="tc-quote">{t.quote}</p>

      {/* Author */}
      <div className="tc-author">
        <div className={`tc-avatar tc-avatar--${t.avatarClass}`} aria-hidden="true">
          {t.initials}
        </div>
        <div className="tc-author-info">
          <div className="tc-name">{t.name}</div>
          <div className="tc-role">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function TestimoniSection() {
  return (
    <section className="sec-testi" id="testimoni" aria-label="Testimoni pelanggan Node Coffee">

      {/* Container: header + stats */}
      <div className="container">
        <div className="testi-header reveal">
          <div className="tag">Kata Mereka</div>
          <h2 className="stl">
            Lebih dari <em>1.200 orang</em> sudah<br />
            memilih Node Coffee.
          </h2>
          <p className="sdsc testi-sdsc">
            Rating 4.9/5 dari ratusan ulasan nyata — bukan sekadar klaim.
          </p>
        </div>

        {/* Trust stats */}
        <div className="trust-bar reveal">
          {trustStats.map((s) => (
            <div className="trust-item" key={s.label}>
              <div className="tv">
                {s.value}<span className="tv-unit">{s.unit}</span>
              </div>
              <div className="tl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Infinite Marquee — full viewport width ── */}
      <div className="marquee-outer reveal" aria-label="Daftar ulasan pelanggan">
        <div className="marquee-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimoniCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

    </section>
  )
}
