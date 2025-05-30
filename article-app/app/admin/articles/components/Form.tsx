import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  title: z.string().min(1, "Please enter title"),
  content: z.string().min(1, "Please enter content"),
  categoryid: z.string().min(1, "Select category"),
});

type FormData = z.infer<typeof schema>;
type CategoryOption = {
  label: string;
  value: string;
};
export default function ArticleForm() {
  const [editorContent, setEditorContent] = useState("");
  const [options, setOptions] = useState<CategoryOption[]>([]);
  console.log(options);
  useEffect(() => {
    // Simulasi ambil data dari API
    const fetchCategories = async () => {
      const data = [
        { label: "Technology", value: "technology" },
        { label: "Health", value: "health" },
        { label: "Business", value: "business" },
      ];
      setOptions(data);
    };

    fetchCategories();
  }, []);
  const {
    register,
    // handleSubmit,
    formState: {},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  console.log(editorContent);
  return (
    <>
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
          <label className="text-slate-900 font-semibold text-sm">title</label>
          <input
            {...register("title")}
            type="text"
            placeholder="Input title"
            className="px-3 py-2 rounded-md text-sm focus:outline-none border border-slate-200 focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-slate-900 font-semibold text-sm">
            Catgory
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
          <div className="w-3/4 max-50 border rounded-lg">
            <SimpleEditor onUpdate={(content) => setEditorContent(content)} />
          </div>
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
    </>
  );
}
