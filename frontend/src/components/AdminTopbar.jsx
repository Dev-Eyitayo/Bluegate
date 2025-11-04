import React from "react";
import { Menu } from "lucide-react";

export default function AdminTopbar({ onMenuClick }) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 h-16 md:px-6">
        {/* Left: Menu Button */}
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Right: Admin Info */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-semibold">
            A
          </div>
          <span className="hidden text-sm font-medium md:block">Admin</span>
        </div>
      </div>
    </header>
  );
}
