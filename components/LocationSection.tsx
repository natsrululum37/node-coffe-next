'use client'

import { MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LocationSection() {
  return (
    <section className="bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden border-b-4 border-slate-900 dark:border-white" id="lokasi">
      <div className="grid lg:grid-cols-2">
        
        {/* Info Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="p-12 lg:p-20 border-r-4 border-b-4 lg:border-b-0 border-slate-900 dark:border-white flex flex-col justify-center"
        >
          <h2 className="font-sans font-black text-6xl md:text-8xl text-slate-900 dark:text-white mb-12 tracking-tighter leading-[0.8] uppercase">
            Visit <br />
            <span className="font-serif italic text-blue-600">Us.</span>
          </h2>

          <div className="space-y-10">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="font-black text-2xl text-slate-900 dark:text-white mb-3 uppercase flex items-center gap-2">
                <Clock className="text-blue-600" size={24} /> Jam Operasional
              </h3>
              <div className="text-slate-700 dark:text-slate-300 font-medium space-y-1 text-lg">
                <p className="flex justify-between w-full max-w-[16rem]"><span>Senin - Jumat:</span> <span className="font-black text-slate-900 dark:text-white">08:00 - 23:00</span></p>
                <p className="flex justify-between w-full max-w-[16rem]"><span>Sabtu - Minggu:</span> <span className="font-black text-slate-900 dark:text-white">07:00 - 00:00</span></p>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="font-black text-2xl text-slate-900 dark:text-white mb-3 uppercase flex items-center gap-2">
                <MapPin className="text-blue-600" size={24} /> Alamat
              </h3>
              <p className="text-slate-700 dark:text-slate-300 font-medium max-w-sm mb-4 text-lg">
                Jl. Ringroad Utara No. 123, Condongcatur, Yogyakarta
              </p>
              <a href="https://maps.app.goo.gl/xxx" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-black uppercase text-white bg-slate-900 dark:bg-blue-600 border-2 border-slate-900 dark:border-white px-5 py-2.5 shadow-[4px_4px_0_0_#2563eb] dark:shadow-[4px_4px_0_0_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                Buka di Maps <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Real Google Maps Iframe */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative h-[50vh] lg:h-auto border-b-4 lg:border-b-0 border-slate-900 dark:border-white"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.036664972744!2d110.3986064147775!3d-7.760773694406216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599ed30154bf%3A0x6b40280ebdbd5225!2sRing%20Road%20Utara%2C%20Yogyakarta!5e0!3m2!1sen!2sid!4v1689230000000!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'contrast(1.1)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </motion.div>

      </div>
    </section>
  )
}
