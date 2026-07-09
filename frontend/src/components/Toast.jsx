import React, { useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-emerald-600" />,
    error: <AlertCircle className="h-5 w-5 text-red-600" />,
    info: <Info className="h-5 w-5 text-brand-600" />,
  };

  const bg = {
    success: "bg-emerald-50 border-emerald-200",
    error: "bg-red-50 border-red-200",
    info: "bg-brand-50 border-brand-200",
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl border shadow-lift ${bg[type]} animate-fade-in-down`}
    >
      {icons[type]}
      <p className="text-sm font-medium text-slate-800">{message}</p>
      <button
        onClick={onClose}
        className="ml-auto text-slate-400 hover:text-slate-600 transition"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Toast;