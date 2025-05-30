"use client";
import { useState } from "react";
import { Eye, Pencil, Plus, Trash2 } from "lucide-react";
import ModalTambahCategory from "@/app/components/Modal/AddCategoryModal";

const articles = [
  {
    id: 1,
    title: "Understanding React Hookdsasdasfasfasfasfasfafafafasf   s",
    category: "Technology",
    createdAt: "2025-05-20",
  },
  {
    id: 2,
    title: "Healthy Living Tips",
    category: "Health",
    createdAt: "2025-05-18",
  },
];

export default function AdminLayout() {
  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);

  return (
    <div className="">
      <div>
        <div className="p-6">
          <span>Total Category :25</span>
        </div>
        <div className="p-6  flex justify-between items-center">
          <button
            className="bg-blue-500 px-4 py-2 rounded-lg flex gap-2 items-center"
            onClick={() => setIsFormModalOpen(true)}
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
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Created At</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm font-normal text-slate-600 whitespace-normal break-words max-w-xs">
                      {article.title}
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

      <ModalTambahCategory
        isOpen={isFormModalOpen}
        onClose={() => {
          setIsFormModalOpen(false);
        }}
      />
    </div>
  );
}
