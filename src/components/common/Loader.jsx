import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-14">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-[#244d3f] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 text-sm">Loading your data...</p>
      </div>
    </div>
  );
};

export default Loader;
