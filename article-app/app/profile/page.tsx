"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
        <div className="border flex flex-col justify-center items-center w-[400px] px-4 py-6 text-black rounded-lg gap-5">
          <a className="text-xl font-semibold text-slate-900">User Profile</a>
          <div className="h-10 w-10 rounded-full bg-[#BFDBFE] text-blue-900 items-center justify-center flex">
            J
          </div>
          <div className="py-2.5 px-3 bg-gray-100 border-slate-200 w-full">
            <a>Username :</a>
            <a>user 1</a>
          </div>
          <div className="py-2.5 px-3 bg-gray-100 border-slate-200 w-full">
            <a>Username :</a>
            <a>user 1</a>
          </div>
          <div className="py-2.5 px-3 bg-gray-100 border-slate-200 w-full">
            <a>Username :</a>
            <a>user 1</a>
          </div>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="w-[368px] h-10 rounded-md px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Back to home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
