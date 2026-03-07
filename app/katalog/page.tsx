export default function Katalog() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">
        Katalog Produk Digital
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Kartu Produk 1 */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-bold mb-2">E-Book Marketing</h2>
          <p className="text-gray-400 mb-4">
            Strategi dasar digital marketing buat pemula
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-bold transition">
            Beli - Rp 99.000
          </button>
        </div>

        {/* Kartu Produk 2 */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-bold mb-2">Kelas AI Workflow</h2>
          <p className="text-gray-400 mb-4">
            Optimasi kerjaan desain pakai AI biar cepat
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-bold transition">
            Beli - Rp 150.000
          </button>
        </div>

        {/* Kartu Produk 3 */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-bold mb-2">Private Mentoring</h2>
          <p className="text-gray-400 mb-4">
            Bimbingan affiliate marketing 1-on-1
          </p>
          <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-bold transition">
            Daftar - Rp 500.000
          </button>
        </div>
      </div>
    </main>
  );
}
