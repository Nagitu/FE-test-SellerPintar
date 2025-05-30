import React from "react";
import { LogOut, Tag, Newspaper } from "lucide-react";

type MenuItem = "dashboard" | "users" | "settings";

interface SidebarProps {
  active: MenuItem;
  onChange: (item: MenuItem) => void;
}

export default function Sidebar({ active, onChange }: SidebarProps) {
  return (
    <aside className="w-[267px] bg-blue-600 border-r border-gray-300 p-6">
      <h2 className="text-xl font-bold mb-6 text-white">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <button
          onClick={() => onChange("dashboard")}
          className={`flex items-center gap-3 text-left px-4 py-2 rounded hover:bg-blue-500 text-white ${
            active === "dashboard" ? "bg-blue-500 font-semibold" : ""
          }`}
        >
          <Newspaper className="w-5 h-5" />
          <span>Article</span>
        </button>

        <button
          onClick={() => onChange("users")}
          className={`flex items-center gap-3 text-left px-4 py-2 rounded hover:bg-blue-500 text-white ${
            active === "users" ? "bg-blue-500 font-semibold" : ""
          }`}
        >
          <Tag className="w-5 h-5" />
          <span>Category</span>
        </button>

        <button
          onClick={() => onChange("settings")}
          className={`flex items-center gap-3 text-left px-4 py-2 rounded hover:bg-blue-500 text-white ${
            active === "settings" ? "bg-blue-500 font-semibold" : ""
          }`}
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}
