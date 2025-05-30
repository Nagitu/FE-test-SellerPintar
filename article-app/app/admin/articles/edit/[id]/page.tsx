"use client";
import { useState } from "react";
import { ArrowLeftIcon, ImagePlus, LogOut, Newspaper, Tag } from "lucide-react";
import RichTextEditor from "@/app/components/RichTextEditor";

type MenuItem = "articles" | "categories";

export default function AdminLayout() {
  const [active, setActive] = useState<MenuItem>("articles");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-[267px] h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-600">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                onClick={() => setActive("articles")}
                className={`w-full flex items-center gap-3 text-left px-4 py-2 w-f rounded hover:bg-blue-500 text-white ${
                  active === "articles" ? "bg-blue-500 font-semibold" : ""
                }`}
              >
                <Newspaper className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap text-base">
                  Articles
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActive("categories")}
                className={`w-full flex items-center gap-3 text-left px-4 py-2 rounded hover:bg-blue-500 text-white ${
                  active === "categories" ? "bg-blue-500 font-semibold" : ""
                }`}
              >
                <Tag className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap text-base">
                  Categories
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActive("categories")}
                className={`w-full flex items-center gap-3 text-left px-4 py-2 rounded hover:bg-blue-500 text-white 
                  
                `}
              >
                <LogOut className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap text-base">
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div className=" sm:ml-64 flex-1 bg-white px-1 overflow-scroll">
        <nav className="pt-5 px-6 pb-4  flex justify-between items-center">
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
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </nav>
        <div className=" m-6 p-6 border border-slate-200 rounded-lg flex flex-col gap-4 ">
          <button className=" flex flex-row gap-2 items-center justify-start">
            <ArrowLeftIcon className="w-5 h-5 text-black" />
            <span className="text-slate-900">Create article</span>
          </button>
          <div>
            <div className="flex flex-col justify-center">
              <span className="text-slate-900 font-semibold text-sm mb-2">
                Thumbnails
              </span>
              <label
                htmlFor="thumbnail"
                className="cursor-pointer border border-dashed border-slate-300 bg-slate-50 rounded-lg w-64 h-40 flex flex-col items-center justify-center gap-2 text-slate-500 hover:border-blue-400"
              >
                <ImagePlus className="w-6 h-6" />
                <span className="text-sm underline">Click to select files</span>
                <span className="text-xs">Support File Type: jpg or png</span>
                <input
                  id="thumbnail"
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-slate-900 font-semibold text-sm">
                title
              </label>
              <input
                type="text"
                placeholder="Search category..."
                className="px-3 py-2 rounded-md text-sm focus:outline-none border border-slate-200 focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-slate-900 font-semibold text-sm">
                title
              </label>
              <select
                className="px-3 py-2 rounded-md text-sm border border-slate-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-slate-900 text-sm font-semibold">
                Content
              </label>
              <RichTextEditor />
            </div>
          </div>
          <div className="py-4 flex justify-end items-center gap-2">
            <button className="px-4 py-2 bg-white border-slate-200 border text-center rounded-lg text-sm font-normal text-slate-900">
              Back
            </button>
            <button className="px-4 py-2 bg-slate-200 border-slate-200 border text-center rounded-lg text-sm font-normal text-slate-900">
              Preview
            </button>
            <button className="px-4 py-2 bg-blue-600 border-slate-200 border text-center rounded-lg text-sm font-normal text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
