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
    info: <Info className="h-5 w-5 text-sky-600" />,
  };

  const bg = {
    success: "bg-emerald-50 border-emerald-200",
    error: "bg-red-50 border-red-200",
    info: "bg-sky-50 border-sky-200",
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl border shadow-lg ${bg[type]} animate-in slide-in-from-top duration-300`}
    >
      {icons[type]}
      <p className="text-sm font-medium text-gray-800">{message}</p>
      <button
        onClick={onClose}
        className="ml-auto text-gray-400 hover:text-gray-600 transition"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Toast;