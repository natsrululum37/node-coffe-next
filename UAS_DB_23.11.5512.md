**LAPORAN UJIAN AKHIR SEMESTER** 

**DIGITAL BUSINESS (ST155)**
**ANALISIS DAN EVALUASI LANDING PAGE NODE COFFEE**

Disusun oleh:
Ahmad Natsrul Ulum     (23.11.5524)
Zulfa Meydita Rahma    (23.11.5512)

23S1IF05-Digital(ST155)

**FAKULTAS ILMU KOMPUTER**
**UNIVERSITAS AMIKOM YOGYAKARTA**
**2026**

---

# **BAB I: PENDAHULUAN & REVIEW LANDING PAGE**

## 1.1 Latar Belakang Proyek
Node Coffee adalah ide bisnis kedai kopi modern yang mengusung konsep *tech-enabled F&B*, mengintegrasikan area *coworking space* dengan sistem pelayanan digital. Sebagai representasi digital dari bisnis ini, kami telah mengembangkan sebuah *landing page* yang bertujuan untuk membangun *brand awareness* dan mengakuisisi calon pelanggan.

Proyek *landing page* ini kami bangun menggunakan spesifikasi teknologi (*tech stack*) modern:
1. **Framework:** Next.js (v16.2) dan React.
2. **Styling & UI:** Tailwind CSS (v4.3).
3. **Animasi:** *framer-motion* dan *embla-carousel*.
4. **Hosting/Deployment:** Vercel (https://nodecoffe.vercel.app/).

**[SISIPKAN GAMBAR DI SINI: Screenshot tampilan halaman utama (Hero Section) dari landing page Node Coffee yang sudah Anda deploy di Vercel]**
*Gambar 1.1 Tampilan Antarmuka Landing Page Node Coffee*

## 1.2 Implementasi Tool Analitik
Untuk mengukur efektivitas *landing page* dalam mendatangkan dan mempertahankan pengunjung (sesuai dengan CPMK09), kami telah mengintegrasikan proyek ini dengan *tool* analitik standar industri, yaitu **Google Analytics 4 (GA4)**. 

Implementasi kami lakukan dengan menanamkan ID Pelacakan GA4 (Measurement ID) langsung ke dalam *source code* utama proyek menggunakan pustaka pihak ketiga resmi dari Next.js (`@next/third-parties/google`). Data perekaman *traffic* kini berjalan secara *real-time* di *dashboard* Google Analytics.

**[SISIPKAN GAMBAR DI SINI: Screenshot potongan kode (dari file layout.tsx atau file sejenis) yang memperlihatkan script Google Analytics `<GoogleAnalytics gaId="G-XXXXXX" />` telah dimasukkan ke dalam kode Next.js Anda]**
*Gambar 1.2 Potongan Kode Implementasi Google Analytics pada Source Code*

---

# **BAB II: HASIL INSIGHT & DATA ANALITIK**

Data analitik yang direkam dan ditarik dari *dashboard* Google Analytics mencakup periode 28 hari pada masa peluncuran awal dan pengujian (*initial deployment phase*), yaitu dari tanggal **16 Juni 2026 hingga 13 Juli 2026**.

**[SISIPKAN GAMBAR DI SINI: Screenshot grafik dan angka dari file PDF `Ringkasan_laporan.pdf` yang menunjukkan 6 Pengguna, 80 Peristiwa, dll. Screenshot ini membuktikan bahwa pelacakan benar-benar berjalan]**
*Gambar 2.1 Dashboard Ringkasan Laporan Google Analytics 4*

Berikut adalah ringkasan *insight* metrik performa awal dari *landing page* Node Coffee:

1. **Pengguna Aktif:** 6 Pengguna Unik (100% Pengguna Baru).
2. **Tampilan Halaman (Page Views):** 36 Tayangan Halaman.
3. **Interaksi (Events):** 80 Peristiwa interaksi.
4. **Waktu Keterlibatan Rata-rata:** 31 detik per pengguna.
5. **Sumber Akuisisi:** 
   - `(direct) / (none)`: 9 Sesi (Tautan langsung).
   - `vercel.com / referral`: 4 Sesi (Akses melalui hosting).
6. **Demografi Lokasi:** Depok (4), Indramayu (1), Yogyakarta (1).

---

# **BAB III: ANALISIS, EVALUASI & STRATEGI SCALE-UP**

## 3.1 Evaluasi Performa Saat Ini
Berdasarkan data pada Bab II, kami mengevaluasi bahwa *landing page* Node Coffee sudah beroperasi dengan baik secara teknis, namun masih berada pada fase *testing*. 
*   Rata-rata keterlibatan **31 detik** mengindikasikan bahwa situs berhasil dimuat (*loading*) dengan cepat dan desain UI/UX sudah cukup menarik untuk menahan audiens melakukan *skimming* bagian *hero section* dan fasilitas.
*   Tingginya interaksi peristiwa (80 events dari 6 pengunjung) membuktikan bahwa audiens melakukan eksplorasi fitur-fitur antarmuka yang kami sediakan.
*   Belum adanya *traffic* dari `Organic Search` (Google) mengindikasikan bahwa *website* kami belum memiliki otoritas SEO yang kuat di mesin pencari. 

## 3.2 Strategi Scale-Up
Berdasarkan hasil evaluasi *insight* di atas (CPMK11), kami telah merumuskan strategi *scale-up* agar performa *landing page* dan bisnis Node Coffee ke depannya dapat terus bertumbuh:

1. **Scale-up Akuisisi Organik (SEO):**
   Kami akan mendaftarkan *sitemap* proyek Next.js ke **Google Search Console** agar situs dapat terindeks secara alami. Kami juga berencana melakukan optimalisasi kata kunci pada *tag* HTML, seperti menyematkan *"Coworking space cepat di Yogyakarta"* agar lebih mudah ditemukan.

2. **Scale-up melalui Social Media Marketing (SMM):**
   Mengingat *traffic* kami saat ini masih bergantung pada *Direct Link*, langkah *scale-up* berikutnya adalah mempublikasikan tautan *landing page* secara masif melalui platform visual seperti Instagram Reels dan TikTok. Konten video pendek yang menonjolkan fitur Wi-Fi 1 Gbps (berdasarkan *copywriting* pendekatan FAB) sangat efektif menarik audiens Gen-Z.

3. **Conversion Rate Optimization (CRO):**
   Untuk meningkatkan durasi *engagement* menjadi di atas 1 menit, kami perlu mengoptimalkan tingkat konversi (CRO). Langkah taktisnya adalah dengan memperjelas dan memperbesar penempatan tombol *"Call-to-Action"* (CTA) untuk *Lead Generation*, seperti tawaran "Klaim Voucher Promo Rp 22.000". Interaksi pada tombol ini akan kami lacak menggunakan *Custom Event* di GA4 untuk mengukur kesuksesan konversi secara presisi.

---

# **BAB IV: KESIMPULAN**

Bagi kami, integrasi *tool* analitik pada *landing page* Node Coffee membuktikan bahwa pengelolaan bisnis digital (*Digital Business*) tidak dapat hanya mengandalkan intuisi, melainkan harus berbasis data (*data-driven*). Meskipun metrik kami saat ini masih dalam skala peluncuran awal, *insight* yang dihasilkan telah memampukan kami untuk memformulasikan evaluasi teknis dan strategi *scale-up* yang sangat komprehensif, mencakup lini SEO, Pemasaran Media Sosial, dan Optimasi Konversi. Ini menjadi fondasi yang kokoh agar Node Coffee dapat berkembang menjadi model bisnis *Digital F&B* yang solid dan terukur.
