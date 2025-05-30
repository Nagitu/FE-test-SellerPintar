"use client";
import Image from "next/image";
import { useState } from "react";
import Select from "react-select";

const categoryOptions = [
  { value: "all", label: "All" },
  { value: "technology", label: "Technology" },
  { value: "health", label: "Health" },
  { value: "finance", label: "Finance" },
  { value: "lifestyle", label: "Lifestyle" },
];

type CategoryOption = {
  value: string;
  label: string;
};

export default function HeroSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryOption | null>(null);
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
        <div className="w-[400px] md:w-[700px] flex flex-col items-center text-white">
          <h1>Blog genzet</h1>
          <h4 className="text-[36px] md:text-[48px] text-center">
            The Journal : Design Resources, Interviews, and Industry News
          </h4>
          <h3 className="text-2xl">Your daily dose of design insights!</h3>
        </div>
        <div className="p-2.5 bg-blue-600 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-[180px]">
            <Select
              options={categoryOptions}
              value={category}
              placeholder="Select category"
              onChange={(selected) => setCategory(selected)}
              className="text-black"
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: 6,
                  borderColor: "#ccc",
                  padding: "2px",
                }),
              }}
            />
          </div>
          <input
            type="text"
            placeholder="Search article..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 bg-white rounded-md  outline-none text-black w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
