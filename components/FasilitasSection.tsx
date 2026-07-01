'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FACILITIES = [
  { num: '01', title: 'Kecepatan 1 Gbps', desc: 'Jaringan internet berstandar tinggi yang stabil. Sesi meeting online, render video, atau unduh aset tugas lancar tanpa buffering.' },
  { num: '02', title: 'Kopi Siap < 4 Menit', desc: 'Pesan langsung dari layar interaktif. Hemat waktu tanpa perlu berdiri lama di kasir, pesanan otomatis masuk ke antrean barista.' },
  { num: '03', title: 'Bayar Pakai QRIS', desc: 'Transaksi mulus, higienis, dan instan. Tinggal scan pakai e-wallet atau m-banking favoritmu.' },
  { num: '04', title: 'Stopkontak di Tiap Meja', desc: 'Tata letak ergonomis yang dirancang khusus untuk kenyamanan bekerja berjam-jam tanpa takut kehabisan baterai laptop.' }
]

export default function FasilitasSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <section className="py-32 bg-white dark:bg-slate-950 border-b-4 border-slate-900 dark:border-white overflow-hidden" id="fasilitas" ref={containerRef}>
      
      {/* Kinetic Typography Header */}
      <div className="flex flex-col gap-2 mb-20 opacity-90">
        <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
          <h2 className="font-black text-[12vw] leading-none tracking-tighter text-slate-900 dark:text-white">
            FASILITAS • FASILITAS • 
          </h2>
        </motion.div>
        <motion.div style={{ x: xRight }} className="whitespace-nowrap">
          <h2 className="font-black text-[12vw] leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: '3px #2563eb' }}>
            PREMIUM • PREMIUM • 
          </h2>
        </motion.div>
      </div>

      <div className="max-w-[80rem] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "backOut", delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-white shadow-[6px_6px_0_0_#0f172a] dark:shadow-[6px_6px_0_0_#ffffff] p-6 hover:shadow-[8px_8px_0_0_#2563eb] dark:hover:shadow-[8px_8px_0_0_#2563eb] transition-all cursor-default"
            >
              <div className="font-sans font-black text-5xl text-blue-600 mb-4 tracking-tighter">
                {fac.num}
              </div>
              <h3 className="font-black text-xl mb-3 tracking-tight text-slate-900 dark:text-white">{fac.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm">{fac.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
