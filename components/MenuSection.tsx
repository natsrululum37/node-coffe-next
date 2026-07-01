'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const MENU_COL_1 = [
  { name: 'Node Aren Latte', desc: 'Espresso blend house spesial dengan gula aren organik', price: '28K', img: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=800' },
  { name: 'Kyoto Matcha', desc: 'Ceremonial grade matcha dengan creamy oat milk', price: '32K', img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=800' },
]

const MENU_COL_2 = [
  { name: 'V60 Manual Brew', desc: 'Biji kopi single origin pilihan roaster', price: '30K', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800' },
  { name: 'Artisan Pastry', desc: 'Croissant mentega renyah panggang segar', price: '25K', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800' },
]

export default function MenuSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const yCol1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const yCol2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500 relative border-b-4 border-slate-900 dark:border-white" id="menu" ref={containerRef}>
      
      <div className="max-w-[80rem] mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-slate-900 dark:border-white pb-6 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="max-w-3xl"
          >
            <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl text-slate-900 dark:text-white tracking-tighter leading-none uppercase mb-4">
              Kopi Nusantara <br />
              <span className="font-serif italic text-blue-600 text-4xl md:text-6xl">Disangrai Mingguan.</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "backOut", delay: 0.1 }}
            className="max-w-xs p-4 bg-blue-600 text-white font-bold border-2 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#0f172a] dark:shadow-[4px_4px_0_0_#ffffff]"
          >
            Kualitas biji kopi lokal premium yang selalu fresh. Dari Americano yang strong untuk melek seharian, sampai Cafe Latte yang creamy untuk menemani sesi santaimu.
          </motion.div>
        </div>

        {/* Cafe Brutalist Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div style={{ y: yCol1 }} className="flex flex-col gap-8 pt-8 md:pt-0">
            {MENU_COL_1.map((item, idx) => (
              <MenuCard key={idx} item={item} idx={idx} />
            ))}
          </motion.div>

          <motion.div style={{ y: yCol2 }} className="flex flex-col gap-8 md:mt-24">
            {MENU_COL_2.map((item, idx) => (
              <MenuCard key={idx} item={item} idx={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MenuCard({ item, idx }: { item: any, idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotate: idx % 2 === 0 ? -3 : 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "backOut", delay: idx * 0.1 }}
            className="group bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-white shadow-[8px_8px_0_0_#0f172a] dark:shadow-[8px_8px_0_0_#ffffff] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0_0_#0f172a] dark:hover:shadow-[2px_2px_0_0_#ffffff] transition-all duration-300 overflow-hidden"
    >
      <div className="relative aspect-[4/3] border-b-2 border-slate-900 dark:border-white overflow-hidden group-hover:[&>img]:scale-105">
        <Image 
          src={item.img} 
          alt={item.name} 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover filter contrast-125 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 bg-white text-slate-900 font-black text-lg px-3 py-1 border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a]">
          {item.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-sans font-black text-2xl text-slate-900 dark:text-white tracking-tighter mb-2">{item.name}</h3>
        <p className="text-slate-700 dark:text-slate-300 font-medium leading-snug">{item.desc}</p>
      </div>
    </motion.div>
  )
}
