"use client";

import Image from "next/image";
import ArticleCard from "./ArticleCard/ArticleCard";

const data = {
  id: "figma-dev-mode-2025",
  title: "Figma Dev Mode: Cara Baru Kolaborasi Desainer dan Developer di 2025",
  author: "OpenDesign Team",
  publishedDate: "2025-04-13",
  content: `<p>Di dunia <strong>desain produk digital</strong> yang terus berkembang, kolaborasi antara desainer dan developer adalah kunci keberhasilan—namun seringkali menjadi tantangan. Pada April 2025, <em>Figma</em> meluncurkan <strong>Dev Mode</strong>, sebuah fitur baru yang dirancang untuk menyederhanakan proses kolaborasi ini secara signifikan.</p>
  <h2>🔧 Apa Itu Dev Mode?</h2>
  <p><strong>Dev Mode</strong> adalah antarmuka baru di dalam Figma yang berfokus pada kebutuhan developer...</p>
  <ul>
    <li>Detail spesifikasi desain: ukuran, jarak antar elemen, dan warna</li>
    <li>Font dan gaya teks</li>
    <li>Ekspor aset siap pakai</li>
    <li>Cuplikan kode CSS, Swift, dan XML</li>
  </ul>
  <h2>🤝 Menyatukan Desainer & Developer</h2>
  <p>Sebelumnya, proses <em>handoff</em> desain ke developer sering memakan waktu...</p>
  <h2>🚀 Dampaknya dalam Proses Agile</h2>
  <p>Di tim yang bergerak cepat, waktu adalah segalanya...</p>
  <h2>🧠 Kesimpulan</h2>
  <p>Apakah kamu seorang desainer yang bekerja dengan tim pengembang, atau seorang developer yang ingin akses lebih mudah ke spesifikasi desain—Dev Mode adalah alat kolaborasi yang akan kamu nikmati.</p>`,
};

export default function DetailArticle() {
  return (
    <div className="min-h-screen px-[40px] md:px-[100px] lg:px-[160px] py-[40px] flex flex-col gap-10 jus">
      {/* Header Section */}
      <div>
        <div className="flex flex-col items-center text-center gap-2">
          <div className="flex gap-4 text-sm text-[#475569]">
            <span>{data.publishedDate}</span>
            <span>• Created by {data.author}</span>
          </div>
          <h1 className="text-[30px] text-[#0F172A] font-semibold">
            {data.title}
          </h1>
        </div>

        {/* Image Section */}
        <div className="relative h-[300px] md:h-[480px]rounded-lg overflow-hidden my-8">
          <Image
            src={"/sample-1.jpg"}
            layout="fill"
            objectFit="cover"
            alt="cover"
          />
        </div>

        {/* HTML Content Section */}
        <div
          className="prose max-w-none text-[#0F172A] my-10 text-justify"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px]">
        {Array.from({ length: 3 }).map((i, index) => (
          <ArticleCard key={index} />
        ))}
      </div>
    </div>
  );
}
