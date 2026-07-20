<div align="center">
  <h1>☕ Node Coffee</h1>
  <p><strong>Kafe Produktif & Coworking Space di Yogyakarta</strong></p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/GA4-E37400?style=for-the-badge&logo=google-analytics&logoColor=white" alt="Google Analytics" />
  </p>
</div>

<br/>

Landing page interaktif bergaya **Neo-Brutalism** untuk Node Coffee. Proyek ini dibangun menggunakan arsitektur modern web (Next.js App Router) dan ditujukan sebagai *showcase* integrasi antara pengembangan antarmuka (UI/UX) dan pelacakan metrik bisnis digital.

## ✨ Fitur Utama

- **Desain Neo-Brutalism**: Tata letak berani, kontras tinggi, dan elemen bayangan tebal khas antarmuka web modern.
- **Dark Mode & Light Mode**: Peralihan mode tema warna secara dinamis (`next-themes`).
- **Scroll & Animasi Interaktif**: Memanfaatkan `framer-motion` dan `Lenis` untuk efek parallax dan *reveal animation*.
- **Marquee Testimoni**: Komponen *carousel* gulir otomatis (interaktif & *draggable*) menggunakan `embla-carousel-react`.
- **Ultra-Responsive**: Presisi *layout* dari layar *mobile* terkecil hingga monitor Ultra-Wide.

## 🚀 Optimasi Skalabilitas & Analitik Bisnis

Proyek ini tidak hanya mementingkan aspek visual, melainkan juga dibekali dengan strategi skala bisnis (*Scale-Up*):

1. **Google Analytics (GA4) Integration** 📊
   - Perekaman kunjungan (*page views*) dan metrik *engagement* menggunakan pustaka `@next/third-parties/google`.
2. **Conversion Rate Optimization (CRO)** 🎯
   - Implementasi `sendGAEvent` secara langsung (*Custom Events*) pada komponen aksi seperti tombol "Klaim Voucher" untuk melacak konversi (*leads*).
3. **Advanced SEO Metadata** 🔍
   - Penanaman struktur meta *keywords* dan *Open Graph* di `layout.tsx` untuk menunjang performa organik pada Search Engine dan saat *link* dibagikan di media sosial.

## 💻 Teknologi yang Digunakan

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Ikonografi**: [Lucide React](https://lucide.dev/)

## 🛠️ Menjalankan Proyek Secara Lokal

Pastikan [Node.js](https://nodejs.org/) versi terbaru telah terpasang.

1. **Klon / Unduh repositori ini.**
2. **Instal dependensi:**
   ```bash
   npm install
   ```
3. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di *browser* Anda.

## 🌐 Deployment

Proyek ini telah dikonfigurasi (*Zero-Config*) untuk langsung di-*deploy* melalui [Vercel](https://vercel.com).
Seluruh pengoptimalan gambar, penyajian *font*, dan analitik sudah disesuaikan dengan pedoman Web Vitals (*Best Practices*).
