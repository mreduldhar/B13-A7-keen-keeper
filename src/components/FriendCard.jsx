import React from "react";
import StatusBadge from "./common/StatusBadge";

const FriendCard = ({ friend }) => {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-3 cursor-pointer drop-shadow-md hover:shadow-md transition-shadow">
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="text-center">
        <h3 className="font-semibold text-xl text-[#1F2937]">{friend.name}</h3>
        <p className="text-xs text-[#64748B] mt-1">
          {friend.days_since_contact}d ago
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-1">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
      <StatusBadge status={friend.status} />
    </div>
  );
};

export default FriendCard;
