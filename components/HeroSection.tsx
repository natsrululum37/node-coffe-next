'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] pt-32 pb-24 w-full overflow-hidden bg-white dark:bg-slate-950 flex flex-col justify-center transition-colors duration-500 border-b-4 border-slate-900 dark:border-white" id="home">
      
      {/* Editorial Image Block */}
      <motion.div 
        className="absolute right-0 lg:right-16 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-[60vh] z-0 overflow-hidden border-4 border-slate-900 dark:border-white shadow-[8px_8px_0_0_#0f172a] dark:shadow-[8px_8px_0_0_#2563eb]"
        style={{ y: yImage }}
        initial={{ scale: 0.95, rotate: -2 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=70&w=1200" 
          alt="Node Coffee Interior" 
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover filter contrast-125 transition-transform duration-700"
        />
      </motion.div>

      {/* Coffee Editorial Typography */}
      <motion.div 
        className="relative z-20 flex flex-col items-start px-6 lg:px-20 w-full mt-4"
        style={{ y: yText }}
      >
        
        <div className="overflow-hidden z-10 mb-4 -ml-2">
          <h1 
            className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] xl:text-[5vw] leading-none text-blue-600 bg-white dark:bg-slate-900 px-4 sm:px-5 py-2 border-4 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#2563eb]"
          >
            Node Coffee.
          </h1>
        </div>

        <div
          className="mb-4 sm:mb-6 inline-block bg-blue-600 text-white font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm px-3 sm:px-4 py-1 sm:py-1.5 border-2 border-slate-900 dark:border-white origin-left cursor-default"
        >
          COWORKING SPACE YOGYAKARTA
        </div>

        <div className="flex flex-col items-start gap-2 sm:gap-3">
          <div className="overflow-hidden">
            <h1 
              className="font-sans font-black text-4xl sm:text-5xl md:text-7xl lg:text-[6.5vw] xl:text-[6.5vw] leading-[0.9] tracking-tighter text-slate-900 dark:text-white uppercase"
            >
              Belajar Ngebut,
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <h1 
              className="font-sans font-black text-4xl sm:text-5xl md:text-7xl lg:text-[6.5vw] xl:text-[6.5vw] leading-[0.9] tracking-tighter text-white dark:text-slate-900 uppercase bg-slate-900 dark:bg-white px-4 sm:px-5 py-2 border-2 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#2563eb] md:shadow-[6px_6px_0_0_#2563eb]"
            >
              Kerja Tetap Fokus.
            </h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-8 md:mt-10"
        >
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-white shadow-[6px_6px_0_0_#2563eb] p-5 md:p-6 mb-8 max-w-xl">
            <p className="text-base md:text-lg text-slate-900 dark:text-white font-semibold leading-relaxed">
              Titik temu produktivitas dan sajian kopi cepat di Jogja. Nikmati kopi lokal premium tanpa antrean panjang lewat sistem <span className="bg-blue-600 text-white px-2 py-0.5 mx-1">self-ordering</span>, didukung fasilitas coworking space dengan <span className="bg-blue-600 text-white px-2 py-0.5 whitespace-nowrap mx-1">Wi-Fi 6</span> untuk hajar semua deadline-mu.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#lead" className="w-full sm:w-auto text-center bg-blue-600 text-white font-black text-sm md:text-base px-8 py-4 border-2 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#0f172a] dark:shadow-[4px_4px_0_0_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase">
              Klaim Voucher Kopi
            </a>
            <a href="#fasilitas" className="w-full sm:w-auto text-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-black text-sm md:text-base px-8 py-4 border-2 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#2563eb] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase">
              Lihat Ketersediaan Meja
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee Banner - Blue & White */}
      <div className="absolute bottom-0 left-0 w-full border-t-4 border-slate-900 dark:border-white bg-blue-600 overflow-hidden z-30 flex items-center py-2">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap font-black uppercase text-lg tracking-widest text-white"
        >
          <span className="mx-4">• KOPI NUSANTARA • WI-FI 6 (1 GBPS) • SELF-ORDERING • 100% CASHLESS • COWORKING SPACE</span>
          <span className="mx-4">• KOPI NUSANTARA • WI-FI 6 (1 GBPS) • SELF-ORDERING • 100% CASHLESS • COWORKING SPACE</span>
          <span className="mx-4">• KOPI NUSANTARA • WI-FI 6 (1 GBPS) • SELF-ORDERING • 100% CASHLESS • COWORKING SPACE</span>
          <span className="mx-4">• KOPI NUSANTARA • WI-FI 6 (1 GBPS) • SELF-ORDERING • 100% CASHLESS • COWORKING SPACE</span>
          <span className="mx-4">• KOPI NUSANTARA • WI-FI 6 (1 GBPS) • SELF-ORDERING • 100% CASHLESS • COWORKING SPACE</span>
        </motion.div>
      </div>
    </section>
  )
}
