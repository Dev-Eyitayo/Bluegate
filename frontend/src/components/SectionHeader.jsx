import React from "react";

const SectionHeader = ({ icon: Icon, title }) => {
  return (
    <div className="flex flex-col items-center mb-6 text-center">
      {Icon && (
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 ring-1 ring-inset ring-brand-100 mb-3">
          <Icon className="w-6 h-6 text-brand-600" />
        </div>
      )}
      <h2 className="font-display text-xl font-bold text-slate-900">{title}</h2>
      <span className="mt-2.5 h-1 w-10 rounded-full bg-brand-500" aria-hidden="true" />
    </div>
  );
};

export default SectionHeader;
