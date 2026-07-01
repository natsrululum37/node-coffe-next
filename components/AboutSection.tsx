'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section className="py-32 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500 border-b-4 border-slate-900 dark:border-white" id="about" ref={containerRef}>
      <div className="max-w-[80rem] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          <motion.div 
            style={{ y: yText }} 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="lg:col-span-5 order-2 lg:order-1 pt-12 lg:pt-0"
          >
            <h2 className="font-sans font-black text-5xl md:text-6xl tracking-tighter leading-[0.9] uppercase mb-8">
              Lebih Dari <br />
              <span className="font-serif italic font-medium text-blue-600 dark:text-blue-500">Kopi.</span>
            </h2>
            
            <div className="text-lg font-medium leading-relaxed space-y-6 border-l-2 border-blue-600 dark:border-blue-500 pl-6 mb-12">
              <p className="text-slate-700 dark:text-slate-300">
                <span className="float-left text-6xl font-serif font-black mr-3 -mt-2 text-blue-600 dark:text-blue-500">S</span>ering badmood karena Wi-Fi kafe lemot atau antre kopi kelamaan? Waktu produktifmu habis cuma buat nunggu nama dipanggil. Belum lagi kalau koneksi putus-nyambung saat meeting atau ngerjain tugas penting.
              </p>
              <p className="bg-slate-900 dark:bg-slate-900 text-white dark:text-white p-4 border-2 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#2563eb]">
                Di Node Coffee, kami mengubah cara kamu ngopi dan bekerja. Tidak ada lagi antrean kasir yang panjang. Pesan lewat kiosk mandiri, kopi siap dalam 4 menit, dan nikmati koneksi internet yang benar-benar stabil seharian penuh. <span className="font-bold text-blue-400 italic block mt-2">Pesan cepat, ambil, kerja lagi.</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold px-4 py-3 border-2 border-slate-900 dark:border-white rotate-[2deg] shadow-[4px_4px_0_0_#2563eb]">
                EST. 2021
              </div>
              <div className="bg-blue-600 text-white font-bold px-4 py-3 border-2 border-slate-900 dark:border-white rotate-[-1deg] shadow-[4px_4px_0_0_#1e293b] dark:shadow-[4px_4px_0_0_#ffffff]">
                10K+ MEMBER
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 w-full h-[50vh] lg:h-[70vh] relative border-4 border-slate-900 dark:border-white shadow-[12px_12px_0_0_#2563eb] overflow-hidden bg-white"
          >
            <Image 
              src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&q=80&w=1200" 
              alt="Macbook and coffee on table" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover filter contrast-125 transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
