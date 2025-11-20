import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertCircle, ArrowLeft } from "lucide-react";
import MainLayout from "../layouts/MainLayout";

export default function NotFoundPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Big 404 */}
          <div className="mb-8">
            <h1 className="text-9xl font-black text-sky-600 tracking-tighter">
              404
            </h1>
            <div className="flex justify-center mt-4">
              <AlertCircle className="h-16 w-16 text-sky-500" />
            </div>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry — let's get you back on track!
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 transition shadow-lg"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-sky-600 text-sky-600 font-semibold rounded-xl hover:bg-sky-50 transition"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Fun little footer */}
          <div className="mt-16 text-sm text-gray-500">
            <p>Blue Gate Public Health Initiative &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}