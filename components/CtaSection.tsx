'use client'

import { motion } from 'framer-motion'

export default function CtaSection() {
  return (
    <section className="bg-blue-600 border-b-4 border-slate-900 dark:border-white transition-colors duration-500">
      <div className="grid lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="p-12 lg:p-20 border-b-4 lg:border-b-0 lg:border-r-4 border-slate-900 dark:border-white flex flex-col justify-center items-start"
        >
          <h2 className="font-sans font-black text-6xl md:text-8xl tracking-tighter text-white uppercase leading-[0.8] mb-6">
            Siap <br />
            <span className="font-serif italic text-slate-900">Fokus?</span>
          </h2>
          <p className="text-xl font-bold text-white mb-10 max-w-sm">
            Tinggalkan zona lambat. Buka laptop Anda, dan mulai hari yang produktif.
          </p>
          <a href="#lokasi" className="inline-block bg-white text-slate-900 font-black text-xl uppercase px-8 py-4 border-2 border-slate-900 shadow-[6px_6px_0_0_#1c1917] dark:shadow-[6px_6px_0_0_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#1c1917] transition-all">
            Kunjungi Lokasi
          </a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="h-[40vh] lg:h-auto bg-[url('https://images.unsplash.com/photo-1495474472205-d62fbc6b377b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center filter contrast-125"
        ></motion.div>
      </div>
    </section>
  )
}
