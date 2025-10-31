import React from "react";

const SectionHeader = ({ icon: Icon, title }) => {
  return (
    <div className="flex flex-col items-center mb-6 text-center">
      {Icon && (
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 mb-3">
          <Icon className="w-7 h-7 text-sky-700" />
        </div>
      )}
      <h2 className="text-xl font-bold text-sky-800">{title}</h2>
    </div>
  );
};


export default SectionHeader;
