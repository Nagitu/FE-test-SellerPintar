"use client";
import DetailArticle from "@/app/components/DetailArticle";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar/Navbar";

// const data = {
//   id: "figma-dev-mode-2025",
//   title: "Figma Dev Mode: Cara Baru Kolaborasi Desainer dan Developer di 2025",
//   author: "OpenDesign Team",
//   publishedDate: "2025-04-13",
//   coverImage: "/images/articles/figma-dev-mode.jpg",
//   content: `<p>Di dunia <strong>desain produk digital</strong> yang terus berkembang, kolaborasi antara desainer dan developer adalah kunci keberhasilan—namun seringkali menjadi tantangan. Pada April 2025, <em>Figma</em> meluncurkan <strong>Dev Mode</strong>, sebuah fitur baru yang dirancang untuk menyederhanakan proses kolaborasi ini secara signifikan.</p>
//   <h2>🔧 Apa Itu Dev Mode?</h2>
//   <p><strong>Dev Mode</strong> adalah antarmuka baru di dalam Figma yang berfokus pada kebutuhan developer...</p>
//   <ul>
//     <li>Detail spesifikasi desain: ukuran, jarak antar elemen, dan warna</li>
//     <li>Font dan gaya teks</li>
//     <li>Ekspor aset siap pakai</li>
//     <li>Cuplikan kode CSS, Swift, dan XML</li>
//   </ul>
//   <h2>🤝 Menyatukan Desainer & Developer</h2>
//   <p>Sebelumnya, proses <em>handoff</em> desain ke developer sering memakan waktu...</p>
//   <h2>🚀 Dampaknya dalam Proses Agile</h2>
//   <p>Di tim yang bergerak cepat, waktu adalah segalanya...</p>
//   <h2>🧠 Kesimpulan</h2>
//   <p>Apakah kamu seorang desainer yang bekerja dengan tim pengembang, atau seorang developer yang ingin akses lebih mudah ke spesifikasi desain—Dev Mode adalah alat kolaborasi yang akan kamu nikmati.</p>`,
// };

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <DetailArticle />
      <Footer />
    </div>
  );
}
