import React from "react";
import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const typeConfig = {
  call: { icon: <BiPhoneCall />, label: "Call", color: "bg-gray-100" },
  text: { icon: <MdOutlineTextsms />, label: "Text", color: "bg-gray-100" },
  video: { icon: <IoVideocamOutline />, label: "Video", color: "bg-gray-100" },
};

const TimelinePage = () => {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? timeline : timeline.filter((t) => t.type === filter);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1F2937] mb-6">
          Timeline
        </h1>

        {/* Filter Dropdown */}
        <div className="relative flex items-center justify-center mb-6 w-48">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full appearance-none border border-[#e9e9e9] bg-white rounded-lg px-4 py-2.5 text-lg shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary pr-8"
          >
            <option value="all">all</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-4">
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="flex flex-col gap-2">
          {filtered.length === 0 ? (
            <p className="text-gray-400 text-center py-12">No data found!</p>
          ) : (
            filtered.map((entry) => {
              const config = typeConfig[entry.type] || typeConfig.call;
              return (
                <div
                  key={entry.id}
                  className="bg-white border border-[#e9e9e9] shadow rounded-xl px-5 py-4 flex items-center gap-4"
                >
                  <div className="text-3xl">{config.icon}</div>
                  <div>
                    <p className="text-lg">
                      <span className="font-medium text-[#244D3F]">
                        {config.label}
                      </span>
                      <span className="text-[#64748B]">
                        {" "}
                        with {entry.friendName}
                      </span>
                    </p>
                    <p className="text-sm font-medium text-[#64748B] mt-0.5">
                      {formatDate(entry.date)}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default TimelinePage;
