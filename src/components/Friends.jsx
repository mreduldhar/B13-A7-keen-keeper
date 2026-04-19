import React from "react";
import FriendCard from "./FriendCard";
import useFriends from "./hook/useFriends";

const Friends = () => {
  const { friends, loading } = useFriends();

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-0 pb-16 border-t border-[#e9e9e9] pt-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#1F2937] mb-4">
        Your Friends
      </h2>

      {loading ? (
        <div className="flex justify-center items-center py-14">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-[#244d3f] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 text-sm">Loading your friends...</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Friends;
