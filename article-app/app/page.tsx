"use client";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import ContentLayout from "./components/MainContent/ContentLayout";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <ContentLayout />
      <Footer />
    </div>
  );
}
