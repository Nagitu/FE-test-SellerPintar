"use client";
import { LogOut } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 z-50 w-full 
      bg-white md:bg-white/30 md:backdrop-blur 
      border-b border-slate-200 
      h-[64px] md:h-10 
      flex justify-between items-center 
      px-[20px] md:px-[60px] py-[20px] md:py-[32px]"
    >
      <img src="next.svg" alt="Logo" className="h-5" />

      <div className="relative">
        <div className="flex gap-4 items-center justify-center ">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-4 focus:outline-none"
          >
            <div className="bg-[#BFDBFE] h-[32px] w-[32px] rounded-full text-lg font-bold text-center text-[#1E3A8A] flex items-center justify-center">
              J
            </div>
          </button>
          <span className="underline text-black hidden md:flex">
            James Dean
          </span>
        </div>

        {open && (
          <div className="absolute right-0 mt-2 w-[240px] bg-white shadow-lg rounded-lg py-2 z-50 border border-slate-200">
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              My Account
            </a>
            <a
              href="/user/auth/login"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
