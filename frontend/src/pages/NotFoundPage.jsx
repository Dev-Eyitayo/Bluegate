import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import MainLayout from "../layouts/MainLayout";

export default function NotFoundPage() {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Big 404 */}
          <div className="mb-8">
            <h1 className="font-display text-9xl font-bold text-brand-600 tracking-tighter">
              404
            </h1>
            <span className="mt-4 inline-block h-1 w-12 rounded-full bg-brand-500" aria-hidden="true" />
          </div>

          {/* Message */}
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Don't worry — let's get you back on track!
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-600 px-8 py-3.5 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brand-700 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-brand-200 bg-white px-8 py-3.5 font-semibold text-brand-700 transition-colors duration-300 hover:bg-brand-50 hover:border-brand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Fun little footer */}
          <div className="mt-16 text-sm text-slate-500">
            <p>Blue Gate Public Health Initiative &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
