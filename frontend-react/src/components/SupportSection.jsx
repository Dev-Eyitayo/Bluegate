import React from "react";
import { HeartHandshake } from "lucide-react";

const SupportSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-4 text-center">
        
        <h2 className="text-xl font-bold text-sky-800">Please Support Us</h2>
      </div>
      <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
        <p className="text-slate-700 mb-4 leading-relaxed">
          Donate to Blue Gate Initiative. Our programs supporting children’s education,
          vulnerable families, and healthcare access rely on your generous support.
          All contributions will be gratefully acknowledged.
        </p>
        <div className="mt-6 p-4 border-t border-slate-200 bg-white rounded-b-lg text-slate-700 text-sm">
          <p className="font-bold text-slate-800 mb-2">Our Financial Details:</p>
          <p>
            Bank: <span className="font-medium">Wema Bank PLC</span>
          </p>
          <p>
            Account Name:{" "}
            <span className="font-medium">
              Blue Gate Public Health Promotion Initiative
            </span>
          </p>
          <p>
            Account Number: <span className="font-medium">0122653054</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;