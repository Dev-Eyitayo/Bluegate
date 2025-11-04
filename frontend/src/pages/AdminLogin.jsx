// // src/pages/AdminLogin.jsx
// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import SectionHeader from "../components/SectionHeader";
// import { useAuth } from "../contexts/AuthContext";

// export default function AdminLogin() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const auth = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/admin";

//   const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       await auth.login({ email: form.email, password: form.password });
//       navigate(from, { replace: true });
//     } catch (err) {
//       setError(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-sky-200/10">
//       <section className="w-full max-w-md p-8 bg-white rounded-2xl border border-slate-200">
//         <SectionHeader title="Admin Sign In" />
//         <form onSubmit={handleSubmit} className="space-y-4 mt-6">
//           {error && <div className="text-red-600 text-sm">{error}</div>}
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//           />
//           <button
//             type="submit"
//             className={`w-full py-2 rounded-md text-white bg-sky-700 ${loading ? "opacity-60" : "hover:bg-sky-800"}`}
//             disabled={loading}
//           >
//             {loading ? "Signing in..." : "Sign In"}
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }


import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Mail, Lock, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await auth.login({ email: form.email, password: form.password });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 p-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Admin Portal</h1>
            <p className="mt-2 text-sm text-white/80">Sign in to manage volunteers</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="rounded-lg bg-red-500/20 border border-red-400/50 p-3 text-sm text-red-100">
                {error}
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-white/60" />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg bg-white/20 border border-white/30 pl-11 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-white/60" />
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full rounded-lg bg-white/20 border border-white/30 pl-11 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-white py-3 font-medium text-indigo-600 hover:bg-white/90 transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}