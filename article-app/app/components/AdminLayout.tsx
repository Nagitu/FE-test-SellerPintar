"use client";
import { useState } from "react";
import {
  Eye,
  LogOut,
  Newspaper,
  Pencil,
  Plus,
  Tag,
  Trash2,
} from "lucide-react";

type MenuItem = "articles" | "categories";
const articles = [
  {
    id: 1,
    thumbnail: "https://via.placeholder.com/80",
    title: "Understanding React Hookdsasdasfasfasfasfasfafafafasf   s",
    category: "Technology",
    createdAt: "2025-05-20",
  },
  {
    id: 2,
    thumbnail: "https://via.placeholder.com/80",
    title: "Healthy Living Tips",
    category: "Health",
    createdAt: "2025-05-18",
  },
];

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

      <div className=" sm:ml-64 flex-1 bg-white px-1">
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
        <div className=" p-6">
          <div className="p-6">
            <span>Total article :25</span>
          </div>
          <div className="p-6  flex justify-between items-center">
            <div className="flex justify-center items-center gap-2 ">
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

              {/* Input pencarian */}
              <input
                type="text"
                placeholder="Search category..."
                className="px-3 py-2 rounded-md text-sm focus:outline-none border border-slate-200 focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
              />
            </div>
            <button className="bg-blue-500 px-4 py-2 rounded-lg flex gap-2 items-center">
              <Plus className="h-5 w-5" />
              <span>Add Article</span>
            </button>
          </div>
          <div className="p-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm text-gray-700">
                    <th className="px-4 py-2">Thumbnail</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Created At</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">
                        <img
                          src={article.thumbnail}
                          alt={article.title}
                          className="h-14 w-20 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-2 text-sm font-normal text-slate-600 whitespace-normal break-words max-w-xs">
                        {article.title}
                      </td>
                      <td className="px-4 py-2 text-sm font-normal text-slate-600">
                        {article.category}
                      </td>
                      <td className="px-4 py-2 text-sm font-normal text-slate-600">
                        {article.createdAt}
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex gap-2">
                          <button
                            title="Preview"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button
                            title="Edit"
                            className="text-green-600 hover:text-green-800"
                          >
                            <Pencil className="w-5 h-5" />
                          </button>
                          <button
                            title="Delete"
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
