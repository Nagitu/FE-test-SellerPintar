"use client";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import ContentLayout from "./components/MainContent/ContentLayout";
import Footer from "./components/Footer";

const schema = z.object({
  username: z.string().min(1, "Please enter your username"),
  password: z.string().min(1, "Please enter your password"),
});

type FormData = z.infer<typeof schema>;

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
