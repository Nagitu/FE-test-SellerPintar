"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<p>Tulis artikel di sini...</p>",
  });

  return (
    <div className="border rounded-md shadow bg-white">
      {/* Toolbar */}
      <div className="flex gap-2 px-3 py-2 border-b bg-gray-50">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="font-bold"
        >
          B
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="italic"
        >
          I
        </button>
        <button
          onClick={() => {
            const url = prompt("Image URL");
            if (url) editor?.chain().focus().setImage({ src: url }).run();
          }}
        >
          🖼
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="min-h-[200px] p-4 text-slate-900 focus:outline-none"
      />
    </div>
  );
};

export default TiptapEditor;
