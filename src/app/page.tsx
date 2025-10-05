"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login")
  }
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar */}
    

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-green-50 to-white">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Buat <span className="text-green-600">CV Profesional</span>  
          <br /> dalam hitungan menit 
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          CleveResu membantu kamu membuat CV otomatis yang rapi, modern, dan ATS-friendly.  
          Tinggal isi data → CV siap dipakai untuk apply kerja.
        </p>
        <div className="mt-8 flex gap-4">
          <button 
          onClick={handleClick}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-300 flex items-center gap-2">
            Mulai Sekarang <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100">
            Lihat Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Kenapa pilih CleveResu?</h2>
        <p className="mt-4 text-gray-600">Fitur-fitur yang memudahkan kamu bikin CV profesional:</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-green-600">Template Modern</h3>
            <p className="mt-3 text-gray-600">
              Pilih dari berbagai template CV ATS-friendly yang siap pakai.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-green-600">Mudah & Cepat</h3>
            <p className="mt-3 text-gray-600">
              Isi data sekali, CV langsung dibuat otomatis tanpa ribet.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-green-600">Download Instan</h3>
            <p className="mt-3 text-gray-600">
              CV bisa langsung di-download dalam format PDF berkualitas tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Siap bikin CV yang standout?</h2>
        <p className="mt-4 text-lg">Gabung bersama ribuan pencari kerja yang sudah memakai CleveResu</p>
        <button className="mt-6 px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100">
          Mulai Gratis
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} CleveResu. All rights reserved.
      </footer>
    </main>
  );
}
