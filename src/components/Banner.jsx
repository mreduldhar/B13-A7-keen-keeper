import React from "react";
import { FaPlus } from "react-icons/fa6";
import SummaryCard from "./SummaryCard";

const Banner = () => {
  return (
    <section className="py-14 text-center px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-[#1F2937] mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-[#64748B] text-sm sm:text-base max-w-md mx-auto mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="inline-flex items-center gap-2 bg-[#244D3F] text-base text-white px-4 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors cursor-pointer">
        <FaPlus /> Add a Friend
      </button>

      {/* Summary Cards */}
      <SummaryCard />
    </section>
  );
};

export default Banner;
