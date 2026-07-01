'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function LeadSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 0])

  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden border-b-4 border-slate-900 dark:border-white" id="lead" ref={containerRef}>
      <div className="max-w-[70rem] mx-auto px-6">
        <motion.div 
          style={{ scale, rotate }}
          className="relative border-4 border-slate-900 dark:border-white bg-blue-600 text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-12 shadow-[12px_12px_0_0_#0f172a] dark:shadow-[12px_12px_0_0_#ffffff] transition-all"
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.2] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none"></div>

          <div className="relative z-10 w-full">
            <h2 className="font-sans font-black text-4xl md:text-6xl tracking-tighter leading-[1] mb-6 uppercase text-white">
              Klaim Voucher <br/>
              <span className="font-serif italic text-slate-900">Kerja Nyaman.</span>
            </h2>
            <p className="text-lg font-medium mb-10 max-w-xl mx-auto bg-slate-900 text-white p-4 border-2 border-white shadow-[4px_4px_0_0_#ffffff] rotate-1">
              Tinggalkan emailmu dan dapatkan potongan Rp 22.000 untuk pembelian pertamamu di Node Coffee. Datang, klaim, dan langsung fokus berkarya!
            </p>

            <form className="w-full max-w-xl mx-auto relative flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                aria-label="Email address for voucher"
                className="flex-1 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white px-5 py-4 outline-none focus:bg-slate-50 dark:focus:bg-slate-800 transition-colors font-black text-lg uppercase placeholder:text-slate-400"
                required
              />
              <button 
                type="submit" 
                className="bg-slate-900 text-white border-2 border-slate-900 dark:border-white font-black text-sm md:text-base px-6 py-4 uppercase hover:bg-white hover:text-slate-900 transition-colors shadow-[4px_4px_0_0_#ffffff] dark:shadow-[4px_4px_0_0_#ffffff]"
              >
                AMBIL VOUCHER RP22.000
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
