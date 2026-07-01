'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-t-4 border-slate-900 dark:border-white transition-colors duration-500">
      <div className="border-b-2 border-slate-900 dark:border-slate-800">
        <div className="max-w-[80rem] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <motion.div 
              className="relative h-16 w-16"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
            >
              <Image src="/logo/logo.webp" alt="Node Coffee Logo" fill sizes="64px" className="object-contain" />
            </motion.div>
            <h2 className="font-sans font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none text-slate-900 dark:text-white">
              NODE<span className="text-blue-600">COFFEE.</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="bg-blue-600 text-white px-5 py-2 font-bold uppercase tracking-widest border-2 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#0f172a] dark:shadow-[4px_4px_0_0_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">Instagram</a>
            <a href="#" className="bg-blue-600 text-white px-5 py-2 font-bold uppercase tracking-widest border-2 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#0f172a] dark:shadow-[4px_4px_0_0_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">Twitter</a>
          </div>
        </div>
      </div>
      <div className="max-w-[80rem] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
        <p>&copy; 2026 NODE COFFEE. TUGAS KULIAH BISNIS DIGITAL.</p>
        <p className="mt-2 md:mt-0">DIBUAT DENGAN NEXT.JS & TAILWIND.</p>
      </div>
    </footer>
  )
}
