import React from "react";

const StatusBadge = ({ status }) => {
  const styles = {
    overdue: "bg-[#EF4444] text-white",
    "almost due": "bg-[#EFAD44] text-white",
    "on-track": "bg-[#244d3f] text-white",
  };
  const labels = {
    overdue: "Overdue",
    "almost due": "Almost Due",
    "on-track": "On-Track",
  };
  return (
    <span
      className={`text-xs font-medium px-2.5 py-1 rounded-full ${styles[status] || "bg-gray-200"}`}
    >
      {labels[status] || status}
    </span>
  );
};

export default StatusBadge;
