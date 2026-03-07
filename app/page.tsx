import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white selection:bg-[#004aad] selection:text-white">
      {/* Navbar Atas */}
      <nav className="border-b border-gray-800 bg-[#0a0f1c]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Manggil Logo dari folder public */}
            <div className="bg-white p-1 rounded-md">
              <Image
                src="/logo.png"
                alt="Logo Azaadesigns ID"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-extrabold text-xl tracking-wide">
              AZAADESIGNS<span className="text-[#004aad]">ID</span>
            </span>
          </div>
          <div className="hidden md:flex gap-6 font-medium text-gray-400">
            <Link href="/katalog" className="hover:text-[#004aad] transition">
              Katalog Produk
            </Link>
            <Link
              href="https://wa.me/6281299989695"
              className="hover:text-[#004aad] transition"
            >
              Komunitas
            </Link>
          </div>
        </div>
      </nav>

      {/* Bagian Hero (Utama) */}
      <main className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
        {/* Label Kecil */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004aad]/10 border border-[#004aad]/30 text-[#4da1ff] text-sm font-semibold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4da1ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4da1ff]"></span>
          </span>
          Ekosistem Kreatif Digital Terdepan
        </div>

        {/* Judul Besar */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Level Up Skill Kamu <br className="hidden md:block" />
          Bersama{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004aad] to-[#4da1ff]">
            Azaadesigns ID
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Pelajari strategi Affiliate Marketing, optimasi kerja dengan AI
          Workflow, dan temukan produk digital terbaik untuk membangun aset
          digitalmu.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/katalog"
            className="px-8 py-4 bg-[#004aad] hover:bg-[#003785] text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,74,173,0.4)] hover:shadow-[0_0_30px_rgba(0,74,173,0.6)] flex items-center justify-center"
          >
            Lihat Katalog Produk
          </Link>
          <Link
            href="/daftar"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center"
          >
            Daftar Sekarang
          </Link>
        </div>
      </main>
    </div>
  );
}
