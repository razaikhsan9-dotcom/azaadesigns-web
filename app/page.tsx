import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#004aad] selection:text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Azaadesigns Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <span className="text-2xl font-extrabold text-[#004aad] tracking-tight">
              AZAADESIGNS<span className="text-gray-800">.ID</span>
            </span>
          </div>
          <Link
            href="/daftar"
            className="bg-[#004aad] hover:bg-blue-800 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
          >
            Daftar Sekarang
          </Link>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Hiasan Biru */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block bg-blue-100 text-[#004aad] font-semibold px-4 py-1.5 rounded-full text-sm mb-2">
              🚀 Digital Marketing & Affiliate Ecosystem
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Membangun Bisnis Digital{" "}
              <span className="text-[#004aad]">Dari Nol.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              Wadah edukasi, kolaborasi, dan pengembangan bisnis digital
              berbasis strategi dan teknologi AI. Kami percaya keterbatasan
              bukan penghalang untuk berkembang di dunia digital — dengan strategi yang tepat, siapa pun bisa membangun kerajaan bisnis digitalnya sendiri. Bergabunglah dengan komunitas kami dan mulai perjalananmu menuju kesuksesan digital hari ini!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link
                href="/daftar"
                className="bg-[#004aad] hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_10px_20px_rgba(0,74,173,0.2)] hover:-translate-y-1 text-center"
              >
                Mulai Belajar Sekarang
              </Link>
              <a
                href="https://lynk.id/azaa_designs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#004aad] text-[#004aad] hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
              >
                Lihat Produk Digital
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#004aad] to-blue-300 rounded-full animate-pulse blur-xl opacity-50"></div>
            {/* FOTO FOUNDER */}
            <img
              src="/founder.jpg"
              alt="Raza Ikhsan Al Fitrah"
              className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 animate-bounce">
              <p className="font-bold text-gray-800 text-sm">
                Raza Ikhsan Al Fitrah
              </p>
              <p className="text-xs text-[#004aad] font-semibold">
                Founder & CEO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIGITAL PRODUCTS (Lynk.id integration) */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Eksplorasi <span className="text-[#004aad]">Produk Digital</span>{" "}
              Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tingkatkan skill dan aset digitalmu dengan template, e-book, dan
              panduan premium dari Azaadesigns ID yang dirancang khusus untuk pebisnis digital dan affiliate marketer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://lynk.id/azaa_designs"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300"
            >
              <div className="h-40 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                📚
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Panduan Affiliate Pemula
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Langkah demi langkah menghasilkan konversi pertama dari Shopee &
                TikTok Affiliate
              </p>
              <span className="text-[#004aad] font-bold flex items-center gap-2">
                Dapatkan Sekarang →
              </span>
            </a>
            <a
              href="https://lynk.id/azaa_designs"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300"
            >
              <div className="h-40 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                🤖
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI Workflow Masterclass
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Otomatisasi konten dan strategi marketing menggunakan kecerdasan
                buatan untuk hasil yang lebih konsisten dan efisien
              </p>
              <span className="text-[#004aad] font-bold flex items-center gap-2">
                Dapatkan Sekarang →
              </span>
            </a>
            <a
              href="https://lynk.id/azaa_designs"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300"
            >
              <div className="h-40 bg-blue-100 rounded-xl mb-6 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                🎨
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Template Landing Page
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Desain website siap pakai untuk mengoptimalkan konversi
                penjualan produkmu
              </p>
              <span className="text-[#004aad] font-bold flex items-center gap-2">
                Dapatkan Sekarang →
              </span>
            </a>
          </div>
          <div className="text-center mt-10">
            <a
              href="https://lynk.id/azaa_designs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md"
            >
              Lihat Semua Produk di Lynk.id
            </a>
          </div>
        </div>
      </section>

      {/* 3. BIMBINGAN PRIVATE & MENTOR */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Kiri: Bimbingan Private */}
            <div className="space-y-8 bg-blue-50 p-8 md:p-10 rounded-3xl border border-blue-100">
              <img
                src="/logo-bimbingan.png"
                alt="Bimbingan Private"
                className="w-40 h-40 mx-auto object-contain drop-shadow-lg"
              />
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  Bimbingan <span className="text-[#004aad]">Private</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Program pendampingan intensif untuk kamu yang ingin dibimbing
                  langsung dari nol hingga menghasilkan income dari dunia
                  Affiliate & Bisnis Digital
                </p>
                <a
                  href="https://wa.me/6281299989695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-[#004aad] text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg"
                >
                  Konsultasi Program Private
                </a>
              </div>
            </div>

            {/* Kanan: Mentor */}
            <div>
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                  Belajar Langsung Dari{" "}
                  <span className="text-[#004aad]">Praktisi.</span>
                </h2>
                <p className="text-gray-500">
                  Mentor kami siap membagikan strategi yang sudah terbukti di
                  lapangan, mulai dari Affiliate TikTok, Shopee, hingga pengembangan bisnis digital berbasis AI. Kamu gak cuma belajar teori, tapi langsung praktek dan dapat feedback real-time untuk hasil yang maksimal
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Mentor 1 */}
                <div className="group text-center">
                  <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                    <img
                      src="/nasrul.png"
                      alt="Nasrul Kadapi"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Nasrul Kadapi
                  </h3>
                  <p className="text-[#004aad] font-semibold text-sm">
                    Expert Mentor
                  </p>
                </div>

                {/* Mentor 2 */}
                <div className="group text-center">
                  <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                    <img
                      src="/fauzan.png"
                      alt="Muhamad Fauzan"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Muhamad Fauzan
                  </h3>
                  <p className="text-[#004aad] font-semibold text-sm">
                    Expert Mentor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TENTANG FOUNDER & PERJALANAN (ABOUT ME) */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#004aad] rounded-full blur-[120px] opacity-40"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center border-b border-gray-700 pb-6">
            Jejak Langkah <span className="text-blue-400">Azaadesigns ID</span>
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base text-justify">
            <p>
              Perjalanan saya di dunia digital dimulai sejak kelas 1 SMA,
              mendalami Affiliate TikTok secara otodidak di tengah keterbatasan
              fasilitas di lingkungan pondok pesantren 📚 Bermodal HP yang
              terbatas, saya memahami sistem affiliate dari dasar
            </p>
            <p>
              Memasuki kelas 2 dan 3 SMA, saya memperluas sayap ke Affiliate
              Shopee 📈 Mempelajari konversi, copywriting, dan perilaku pasar
              digital. Konsistensi selama lebih dari 3 tahun membuahkan hasil.
              Pada{" "}
              <strong className="text-white bg-blue-600/30 px-2 py-0.5 rounded">
                27 Februari 2022
              </strong>
              , Azaadesigns ID resmi lahir
            </p>
            <p>
              Kini, sebagai mahasiswa S1 Teknik Informatika 💻, saya
              mengintegrasikan teknologi, AI Workflow, dan strategi digital
              untuk mengembangkan ekosistem edukasi ini. Saya percaya bahwa
              keterbatasan bukan penghalang — dengan strategi dan konsistensi,
              siapa pun bisa membangun kerajaan bisnis digitalnya 💡
            </p>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONI */}
      <section className="py-24 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Apa Kata <span className="text-[#004aad]">Mereka?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="text-blue-200 text-4xl absolute top-4 right-4">
                "
              </div>
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm mb-4 italic">
                "Materi Bimbingan Privatenya daging banget! Mentor Kang Nasrul &
                Mas Raza ngajarin bener-bener dari nol sampai pecah telor komisi
                Shopee Affiliate pertama gue. Gak nyangka bisa secepat ini hasilnya"
              </p>
              <h4 className="font-bold text-gray-900">- Budi S.</h4>
              <p className="text-xs text-gray-500">Member Affiliate</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="text-blue-200 text-4xl absolute top-4 right-4">
                "
              </div>
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm mb-4 italic">
                "Awalnya gaptek banget soal AI, tapi setelah ikut panduan dari
                produk digital Azaadesigns, sekarang bikin konten otomatis jauh
                lebih gampang dan cepet. Hasilnya juga makin konsisten"
              </p>
              <h4 className="font-bold text-gray-900">- Dinda A.</h4>
              <p className="text-xs text-gray-500">Content Creator</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="text-blue-200 text-4xl absolute top-4 right-4">
                "
              </div>
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm mb-4 italic">
                "Produk digital di Lynk.id nya murah tapi kualitasnya premium.
                Template landing page-nya langsung bikin konversi jualan gue
                naik 2x lipat"
              </p>
              <h4 className="font-bold text-gray-900">- Rian M.</h4>
              <p className="text-xs text-gray-500">Digital Marketer</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="text-blue-200 text-4xl absolute top-4 right-4">
                "
              </div>
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm mb-4 italic">
                "Salut sama komunitas Azaadesigns. Grup WA-nya aktif banget,
                Kang Fauzan juga sering sharing insight baru soal Tiktok
                Affiliate yang lagi hits. Bener-bener support system yang solid buat belajar"
              </p>
              <h4 className="font-bold text-gray-900">- Sarah K.</h4>
              <p className="text-xs text-gray-500">Student & Affiliate</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & SOSMED */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-[6px] border-[#004aad]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <span className="text-2xl font-extrabold text-white tracking-tight mb-4 block">
              Azaadesigns<span className="text-[#004aad]">.ID</span>
            </span>
            <p className="text-gray-400 text-sm">
              Empowering your digital journey through practical affiliate
              marketing, AI strategy, and digital products.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Hubungi Kami</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="https://wa.me/6281299989695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  📱 WhatsApp Admin
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/EhcuihaIIHl2eaK0Osi6pp?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  👥 Grup Komunitas WA
                </a>
              </li>
              <li>
                <Link
                  href="/daftar"
                  className="hover:text-blue-400 transition-colors"
                >
                  📋 Form Pendaftaran
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Sosial Media</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/azaadesigns_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  📸 Instagram Official
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/raaa_zaaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  📸 Instagram Founder
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@chanel_cacan?si=YD61a9d8fa6JM1t2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  ▶️ YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          © {new Date().getFullYear()} Azaadesigns ID All rights reserved
          Designed with ❤️ by Raza Ikhsan Al Fitrah
        </div>
      </footer>
    </div>
  );
}
