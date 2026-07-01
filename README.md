# Node Coffee — Kafe Produktif & Coworking Space

Landing page interaktif bergaya Neo-Brutalism untuk Node Coffee, sebuah kafe produktif dan *coworking space* di Yogyakarta. Proyek ini dibangun menggunakan **Next.js 16 (App Router)** dan ditujukan sebagai tugas mata kuliah Bisnis Digital.

## Fitur Utama

- **Desain Neo-Brutalism**: Tata letak yang berani, kontras tinggi, dan bayangan tebal khas antarmuka Brutalisme modern.
- **Dark Mode & Light Mode**: Peralihan mode warna secara dinamis yang menyesuaikan preferensi sistem.
- **Scroll & Animasi Interaktif**: Memanfaatkan `framer-motion` dan `Lenis` untuk transisi halaman yang mulus dan *reveal animation*.
- **Marquee Testimoni**: Korsel gulir otomatis tanpa akhir menggunakan `embla-carousel-react` dengan fitur seret interaktif (*draggable*).
- **Google Analytics (GA4)**: Terintegrasi penuh dengan pustaka pihak ketiga `@next/third-parties` untuk mengumpulkan data pengunjung (Tugas *Digital Business*).
- **Responsif Sempurna**: Dioptimalkan dari layar *mobile* yang kecil hingga layar *desktop* yang sangat lebar (Ulta-Wide).

## Teknologi yang Digunakan

- [Next.js](https://nextjs.org/) (App Router, Server Components)
- [Tailwind CSS](https://tailwindcss.com/) (Styling & Dark Mode)
- [Framer Motion](https://www.framer.com/motion/) (Animasi)
- [Lenis](https://lenis.studiofreight.com/) (Smooth Scrolling)
- [Embla Carousel](https://www.embla-carousel.com/) (Marquee & Carousel)
- [Lucide React](https://lucide.dev/) (Ikon)

## Menjalankan Proyek Secara Lokal

Pastikan Anda memiliki [Node.js](https://nodejs.org/) yang terpasang di komputer Anda.

1. **Instal dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```

3. Buka [http://localhost:3000](http://localhost:3000) di *browser* Anda.

## Penugasan & Deployment

Proyek ini telah dikonfigurasi untuk siap *deploy* ke [Vercel](https://vercel.com).
Semua pengoptimalan gambar, pelacakan analitik, dan SEO sudah disesuaikan dengan praktik terbaik (*Best Practices*). Laporan *Lighthouse* mencapai **95-100** di semua metrik.
