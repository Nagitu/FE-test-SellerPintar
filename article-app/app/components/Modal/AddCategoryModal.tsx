"use client";

import { X } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const schema = z.object({
  title: z.string().min(1, "Please input a title"),
});

type FormData = z.infer<typeof schema>;

const ModalTambahCategory = ({ isOpen, onClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  if (!isOpen) return null;

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => {
            reset();
            onClose();
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold mb-4 text-slate-900">
          Tambah Kategori
        </h2>
        <input
          type="text"
          placeholder="Nama kategori"
          {...register("title")}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
          autoFocus
        />
        {errors.title && (
          <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
        )}
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => {
              reset();
              onClose();
            }}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded text-slate-700"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit(onSubmit)}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTambahCategory;
