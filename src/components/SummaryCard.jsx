import React from "react";

const SummaryCard = () => {
  const summaryCards = [
    { label: "Total Friends", value: 10 },
    { label: "On Track", value: 3 },
    { label: "Need Attention", value: 6 },
    { label: "Interactions This Month", value: 12 },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
      {summaryCards.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-none drop-shadow-sm rounded-lg p-8 text-center"
        >
          <div className="text-2xl sm:text-3xl text-[#244D3F] font-semibold">
            {card.value}
          </div>
          <div className="text-sm text-[#64748B] mt-2">{card.label}</div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
