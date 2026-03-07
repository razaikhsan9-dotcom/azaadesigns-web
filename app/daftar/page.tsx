"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function Daftar() {
  const [loading, setLoading] = useState(false);
  const [sukses, setSukses] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    email: "",
    whatsapp: "",
    minat: "Private Mentoring",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Proses ngirim data ke Supabase
    const { error } = await supabase.from("pendaftar").insert([
      {
        nama: form.nama,
        email: form.email,
        whatsapp: form.whatsapp,
        minat: form.minat,
      },
    ]);

    setLoading(false);

    if (error) {
      alert("Waduh, gagal ngirim data bro: " + error.message);
    } else {
      setSukses(true);
      setForm({
        nama: "",
        email: "",
        whatsapp: "",
        minat: "Private Mentoring",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white flex flex-col items-center justify-center p-6">
      <Link
        href="/"
        className="mb-8 text-gray-400 hover:text-[#004aad] transition"
      >
        &larr; Kembali ke Beranda
      </Link>

      <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 w-full max-w-md shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-2">Daftar Sekarang</h1>
        <p className="text-gray-400 text-center mb-8">
          Tinggalkan datamu, tim Azaadesigns ID akan segera menghubungi.
        </p>

        {sukses ? (
          <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg text-center font-medium">
            Mantap! Data lo berhasil masuk ke Database. 🎉
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
                className="w-full bg-[#0a0f1c] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] transition"
                placeholder="Misal: Budi Santoso"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#0a0f1c] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] transition"
                placeholder="budi@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                No. WhatsApp
              </label>
              <input
                type="text"
                required
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full bg-[#0a0f1c] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] transition"
                placeholder="0812xxxxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Minat Produk
              </label>
              <select
                value={form.minat}
                onChange={(e) => setForm({ ...form, minat: e.target.value })}
                className="w-full bg-[#0a0f1c] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] transition"
              >
                <option value="Private Mentoring">Private Mentoring</option>
                <option value="E-Book Marketing">E-Book Marketing</option>
                <option value="Kelas AI Workflow">Kelas AI Workflow</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full bg-[#004aad] hover:bg-[#003785] text-white py-3 rounded-lg font-bold transition shadow-[0_0_15px_rgba(0,74,173,0.3)] disabled:opacity-50"
            >
              {loading ? "Ngirim Data..." : "Kirim Data Sekarang"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
