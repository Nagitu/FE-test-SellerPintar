"use client";
import { useState } from "react";
import { ArrowLeftIcon, Plus } from "lucide-react";
import Image from "next/image";
import ArticleForm from "./components/Form";
const articles = [
  {
    id: 1,
    thumbnail: "/vercel.svg",
    title: "Understanding React Hookdsasdasfasfasfasfasfafafafasf   s",
    category: "Technology",
    createdAt: "2025-05-20",
  },
  {
    id: 2,
    thumbnail: "/vercel.svg",
    title: "Healthy Living Tips",
    category: "Health",
    createdAt: "2025-05-18",
  },
];

export default function AdminLayout() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  console.log(category);
  console.log(search);
  return (
    <>
      {isFormOpen ? (
        <>
          <div className=" m-6 p-6 border border-slate-200 rounded-lg flex flex-col gap-4 ">
            <button
              className=" flex flex-row gap-2 items-center justify-start"
              onClick={() => {
                setIsFormOpen(false);
              }}
            >
              <ArrowLeftIcon className="w-5 h-5 text-black" />
              <span className="text-slate-900">Create article</span>
            </button>
            <ArticleForm />
          </div>
        </>
      ) : (
        <>
          <div className=" p-6">
            <div className="p-6">
              <span>Total article :{articles.length}</span>
            </div>
            <div className="p-6  flex justify-between items-center">
              <div className="flex justify-center items-center gap-2 ">
                <select
                  className="px-3 py-2 rounded-md text-sm border border-slate-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  defaultValue=""
                  onChange={(e) => setCategory(e.target.value)}
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
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search category..."
                  className="px-3 py-2 rounded-md text-sm focus:outline-none border border-slate-200 focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
                />
              </div>
              <button
                className="bg-blue-500 px-4 py-2 rounded-lg flex gap-2 items-center"
                onClick={() => {
                  setIsFormOpen(true);
                }}
              >
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
                      <tr
                        key={article.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="px-4 py-2">
                          <div className="relative w-20 h-7 rounded overflow-hidden">
                            <Image
                              src={article.thumbnail}
                              alt={article.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
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
                        <td className="px-4 py-2 text-sm">
                          <div className="flex gap-2">
                            <button
                              title="Preview"
                              className="text-blue-600 hover:text-blue-800"
                            >
                              Preview
                            </button>
                            <button
                              title="Edit"
                              className="text-green-600 hover:text-green-800"
                            >
                              Edit
                            </button>
                            <button
                              title="Delete"
                              className="text-red-600 hover:text-red-800"
                            >
                              Delete
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
        </>
      )}
    </>
  );
}
