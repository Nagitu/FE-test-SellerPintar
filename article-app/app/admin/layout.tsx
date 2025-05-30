"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Newspaper, Tag, LogOut } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const active = pathname?.startsWith("/admin/articles")
    ? "articles"
    : pathname?.startsWith("/admin/categories")
    ? "categories"
    : "";

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-[267px] h-screen bg-blue-600 p-4">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/admin/articles"
              className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-500 text-white ${
                active === "articles" ? "bg-blue-500 font-semibold" : ""
              }`}
            >
              <Newspaper className="w-5 h-5" />
              <span className="whitespace-nowrap text-base">Articles</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/categories"
              className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-500 text-white ${
                active === "categories" ? "bg-blue-500 font-semibold" : ""
              }`}
            >
              <Tag className="w-5 h-5" />
              <span className="whitespace-nowrap text-base">Categories</span>
            </Link>
          </li>
          <li>
            <button
              className="flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-500 text-white"
              onClick={() => alert("Logout clicked")}
            >
              <LogOut className="w-5 h-5" />
              <span className="whitespace-nowrap text-base">Logout</span>
            </button>
          </li>
        </ul>
      </aside>
      {/* Main Content */}
      <main className="sm:ml-[267px] flex-1 bg-white text-black p-6 overflow-auto">
        <nav className="flex justify-between items-center">
          <span className="text-black">{active}</span>
          <div className="relative flex gap-4 items-center justify-center">
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
            {open && (
              <div className="absolute top-full right-0 mt-2 w-[240px] bg-white shadow-lg rounded-lg py-2 z-50 border border-slate-200">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Account
                </a>
                <a
                  href="/user/auth/login"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    router.push("/admin/auth/login");
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </nav>
        {children}
      </main>
    </div>
  );
}
