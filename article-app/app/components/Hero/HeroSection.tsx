"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px]">
      <Image
        src="/image-example.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      {/* Overlay warna biru semi transparan */}
      <div className="absolute inset-0 bg-[#2563EBDB] bg-opacity-[86%] flex flex-col justify-center items-center">
        <div className="w-[400px] md:w-[700px] flex flex-col items-center">
          <h1>Blog genzet</h1>
          <h4 className="text-[36px] md:text-[48px] text-center">
            The Journal : Design Resources, Interviews, and Industry News
          </h4>
          <h3 className="text-2xl">Your daily dose of design insights!</h3>
        </div>
      </div>
    </div>
  );
}
