'use client'

import { Star } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

const testimonials = [
  {
    quote: 'Wi-Fi stabil banget buat kelas online dan upload file desain besar. Suasananya tenang, enak buat fokus kerja seharian.',
    initials: 'RN',
    name: 'Raihan Nugraha',
    role: 'Mahasiswa DKV, UNY',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Self-ordering super praktis, kopi datang dalam 4 menit. Tinggal duduk, buka laptop, langsung kerja.',
    initials: 'SA',
    name: 'Siti Amara',
    role: 'Content Writer Freelance',
    platform: 'Instagram',
    rating: 5,
  },
  {
    quote: 'Colokan di tiap meja itu life saver. Koneksinya stabil, harganya ramah kantong. Lebih baik dari kafe mana pun.',
    initials: 'BD',
    name: 'Bagas Dwi',
    role: 'UI/UX Designer',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Tempat paling nyaman buat ngerjain skripsi. Tidak berisik, Wi-Fi kenceng, kopi enak, harganya terjangkau.',
    initials: 'FA',
    name: 'Fara Aulia',
    role: 'Mahasiswi Hukum, UGM',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Satu-satunya kafe yang benar-benar paham kebutuhan remote worker. Stop kontak di meja, kopi specialty, suasana fokus.',
    initials: 'MR',
    name: 'Muhammad Rizki',
    role: 'Backend Developer',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Sudah coba banyak kafe di Jogja, Node Coffee yang paling konsisten. Pesanan cepat, koneksi stabil, pelayanan ramah.',
    initials: 'DL',
    name: 'Diana Listya',
    role: 'Graphic Designer',
    platform: 'Instagram',
    rating: 5,
  },
]

const trustStats = [
  { value: '4.9', unit: '/5', label: 'Google Review' },
  { value: '1.200', unit: '+', label: 'Member aktif' },
  { value: '320', unit: '+', label: 'Review positif' },
  { value: '97', unit: '%', label: 'Pesanan < 4 menit' },
]

const AVATAR_COLORS = [
  'bg-brand-light text-brand ring-brand/20',
  'bg-sky-50 text-sky-600 ring-sky-200',
  'bg-indigo-50 text-indigo-600 ring-indigo-200',
]

function TestimoniCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  return (
    <div className="card-shine flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-0.5 text-amber-400" aria-label={`Rating ${t.rating} bintang`}>
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} size={12} fill="currentColor" aria-hidden="true" />
          ))}
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-500">
          {t.platform}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ring-2 ${AVATAR_COLORS[index % 3]}`}
          aria-hidden="true"
        >
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-navy">{t.name}</div>
          <div className="text-xs text-slate-500">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function TestimoniSection() {
  return (
    <section className="relative bg-surface py-20 lg:py-28" id="testimoni" aria-label="Testimoni pelanggan Node Coffee">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(30,136,229,0.05),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Testimoni"
            title={<>Dipercaya <span className="text-brand">1.200+ orang</span> di Yogyakarta.</>}
            subtitle="Rating 4.9/5 dari ratusan ulasan nyata — bukan sekadar klaim."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-10 grid grid-cols-2 divide-x divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-4">
            {trustStats.map((s) => (
              <div key={s.label} className="px-4 py-6 text-center transition-colors hover:bg-brand-light/20">
                <div className="font-display text-2xl font-bold text-brand">
                  {s.value}<span className="text-base">{s.unit}</span>
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Daftar ulasan pelanggan">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.05 + i * 0.05}>
              <TestimoniCard t={t} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
