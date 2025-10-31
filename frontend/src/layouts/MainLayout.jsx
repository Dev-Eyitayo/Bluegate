import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
