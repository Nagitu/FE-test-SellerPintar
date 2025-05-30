"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { Bold, Italic, Image as ImageIcon, Undo, Redo } from "lucide-react";
import { useState } from "react";

export default function RichTextEditor() {
  const [wordCount, setWordCount] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Placeholder.configure({
        placeholder: "Type a content...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "",
    onUpdate({ editor }) {
      const text = editor.getText();
      setWordCount(text.trim().split(/\s+/).filter(Boolean).length);
    },
  });

  if (!editor) return null;

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-3 py-2 border-b bg-white">
        <button onClick={() => editor.chain().focus().undo().run()}>
          <Undo className="w-4 h-4 text-slate-900" />
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          <Redo className="w-4 h-4 text-slate-900" />
        </button>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold className="w-4 h-4 text-slate-900" />
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic className="w-4 h-4 text-slate-900" />
        </button>
        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .setImage({ src: prompt("Image URL") || "" })
              .run()
          }
        >
          <ImageIcon className="w-4 h-4 text-slate-900" />
        </button>
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
          >
            <span className="text-slate-900 text-sm font-medium">L</span>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
          >
            <span className="text-slate-900 text-sm font-medium">C</span>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
          >
            <span className="text-slate-900 text-sm font-medium">R</span>
          </button>
        </div>
      </div>

      <EditorContent
        editor={editor}
        className="w-full min-h-[200px] px-4 py-3 bg-gray-50 text-slate-900 text-sm"
      />

      <div className="px-4 py-2 text-xs text-slate-900 border-t bg-white">
        {wordCount} Words
      </div>
    </div>
  );
}
