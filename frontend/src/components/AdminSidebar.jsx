import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";  // Added useNavigate
import { X, LayoutDashboard, Users, Settings, LogOut, PenSquare, Brain, CalendarCheck, Mail } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { to: "/admin/volunteers", label: "Volunteer Application", icon: Users },
  { to: "/admin/outreach", label: "Outreach Post", icon: PenSquare },
  { to: "/admin/training", label: "Training Application", icon: Brain },
  { to: "/admin/event", label: "Events", icon: CalendarCheck },
  { to: "/admin/messages", label: "Contact Messages", icon: Mail },
];

export default function AdminSidebar({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate(); 
  const handleLogout = () => {
    // Clear all auth data from localStorage
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER");

    onClose();

    // Redirect to login page
    navigate("/admin/login");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/50 transition-opacity md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transition-transform md:relative md:translate-x-0 md:shadow-lg",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between border-b border-gray-200 p-4 h-16">
            <h1 className="text-2xl font-bold text-sky-600">BGI Admin</h1>
            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={clsx(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                    isActive
                      ? "bg-sky-50 text-sky-700 shadow-sm ring-1 ring-sky-200"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-gray-200 p-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}