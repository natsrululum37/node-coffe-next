'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const REVIEWS = [
  { name: 'Andi S.', role: 'Freelancer', text: 'Koneksi 1 Gbps-nya sangat andal. Saya bisa mengunduh file 50GB sambil video conference tanpa putus.' },
  { name: 'Siti K.', role: 'Mahasiswa Akhir', text: 'Suasananya sangat mendukung deep work. Jauh dari hiruk-pikuk kedai kopi pada umumnya.' },
  { name: 'Budi R.', role: 'Remote Developer', text: 'Kiosk pemesanan mandiri sangat efisien. V60-nya juga sempurna untuk menemani sesi lembur.' },
  { name: 'Rina M.', role: 'Content Creator', text: 'Tempat ternyaman untuk ngedit video. Nggak berisik dan colokan ada di mana-mana!' },
  { name: 'Dodi P.', role: 'Entrepreneur', text: 'Biji kopi lokalnya fresh banget. Kopi arennya the best di Jogja menurutku. Bikin melek seharian.' },
  { name: 'Lia T.', role: 'Designer', text: 'Warna dan ambiencenya pas banget buat nyari inspirasi. Kursinya ergonomis bikin betah duduk lama.' },
  { name: 'Tomy W.', role: 'Programmer', text: 'Sistem order pakai QR code bikin proses cepat. Nggak perlu antre kasir, waktu istirahat nggak kebuang.' },
  { name: 'Sarah A.', role: 'Writer', text: 'Barista-nya ramah tapi nggak overly talkative. Pas banget buat introvert yang mau nulis dengan tenang.' },
  { name: 'Reza F.', role: 'Digital Marketer', text: 'Fasilitas Wi-Fi 6-nya benar-benar terasa bedanya kalau lagi upload materi campaign yang ukurannya raksasa.' },
  { name: 'Kevin J.', role: 'Gamer', text: 'Satu-satunya kafe di Jogja yang ping-nya stabil buat main game online pas lagi break kerja!' },
]

export default function TestimoniSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  return (
    <section className="py-32 bg-white dark:bg-slate-950 border-b-4 border-slate-900 dark:border-white overflow-hidden relative transition-colors duration-500" id="testimoni" ref={containerRef}>
      <div className="max-w-[100vw] mx-auto relative z-10">
        
        {/* Header container */}
        <div className="max-w-[80rem] mx-auto px-6 flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-blue-600 pb-6">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="font-sans font-black text-5xl md:text-7xl text-slate-900 dark:text-white uppercase tracking-tighter leading-none"
          >
            Kata <br/> <span className="font-serif italic text-blue-600">Mereka.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold border-2 border-slate-900 dark:border-white shadow-[4px_4px_0_0_#2563eb] px-4 py-2 mt-6 md:mt-0 text-sm"
          >
            *10,000+ MEMBER PUAS
          </motion.div>
        </div>

        {/* Embla Auto-Scroll Container */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }}
          className="overflow-hidden w-full relative"
        >
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
          
          <div className="cursor-grab active:cursor-grabbing overflow-hidden px-16" ref={emblaRef}>
            <div className="flex gap-6 pb-4">
              {REVIEWS.map((review, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_85%] md:flex-[0_0_400px] lg:flex-[0_0_450px] min-w-0"
                >
                  <div className="bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-white shadow-[6px_6px_0_0_#2563eb] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#2563eb] transition-all duration-300 p-6 md:p-8 h-full flex flex-col justify-between">
                    <p className="text-base md:text-lg font-bold tracking-tight leading-snug mb-8 text-slate-900 dark:text-white">
                      &quot;{review.text}&quot;
                    </p>
                    <div className="border-t-2 border-slate-900 dark:border-white pt-4 flex flex-col md:flex-row justify-between md:items-end gap-3">
                      <h4 className="font-black text-lg md:text-xl uppercase text-slate-900 dark:text-white leading-none">{review.name}</h4>
                      <p className="bg-blue-600 text-white font-bold text-[10px] tracking-widest uppercase px-2 py-1 border-2 border-slate-900 dark:border-white self-start md:self-auto text-center">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
