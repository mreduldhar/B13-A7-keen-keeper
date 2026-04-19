import React from "react";
import { useParams } from "react-router";
import useFriends from "../components/hook/useFriends";
import Loader from "../components/common/Loader";
import StatusBadge from "../components/common/StatusBadge";
import { RiNotificationSnoozeLine, RiDeleteBin6Line } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { useTimeline } from "../context/TimelineContext";
import { toast } from "react-toastify";

const FriendDetailPage = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const { addEntry } = useTimeline();
  //   console.log("id", id);
  //   console.log("friends: ", friends);

  const matchFriend = friends.find((friend) => friend.id === Number(id));
  console.log("matched friend", matchFriend);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleCheckin = (type) => {
    addEntry(type, matchFriend.name);
    const labels = { call: "Call", text: "Text", video: "Video" };
    toast.success(`${labels[type]} with ${matchFriend.name}`);
  };

  return (
    <section className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {loading ? (
        <Loader />
      ) : (
        <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Side */}
            <div className="flex flex-col gap-4">
              {/* Profile Card */}
              <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-3 drop-shadow-md">
                <img
                  src={matchFriend.picture}
                  alt={matchFriend.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-xl text-[#1F2937]">
                    {matchFriend.name}
                  </h3>
                </div>
                <StatusBadge status={matchFriend.status} />
                <div className="flex flex-wrap justify-center gap-1">
                  {matchFriend.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-[#64748B] text-center space-y-1">
                  <h4 className="text-base font-medium leading-tight italic">
                    "{matchFriend.bio}"
                  </h4>
                  <p>{matchFriend.email}</p>
                </div>
              </div>
              <div className="space-y-2">
                <button className="w-full bg-white border border-[#e9e9e9] rounded-xl py-4 flex items-center justify-center gap-2 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <RiNotificationSnoozeLine /> Snooze 2 Weeks
                </button>
                <button className="w-full bg-white border border-[#e9e9e9] rounded-xl py-4 flex items-center justify-center gap-2 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  <FiArchive /> Archive
                </button>
                <button className="w-full bg-white border border-[#e9e9e9] rounded-xl py-4 flex items-center justify-center gap-2 text-base font-medium text-red-500 hover:bg-red-50 transition-colors">
                  <RiDeleteBin6Line /> Delete
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white flex flex-col items-center justify-center drop-shadow-sm rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-[#244D3F]">
                    {matchFriend.days_since_contact}
                  </div>
                  <div className="text-sm text-[#64748B] mt-1">
                    Days Since Contact
                  </div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center drop-shadow-sm rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-[#244D3F]">
                    {matchFriend.goal}
                  </div>
                  <div className="text-sm text-[#64748B] mt-1">Goal (Days)</div>
                </div>
                <div className="bg-white flex flex-col items-center justify-center drop-shadow-sm rounded-xl p-5 text-center">
                  <div className="text-xl font-bold text-[#244D3F]">
                    {formatDate(matchFriend.next_due_date)}
                  </div>
                  <div className="text-sm text-[#64748B] mt-1">Next Due</div>
                </div>
              </div>

              {/* Relationship Goal */}
              <div className="bg-white drop-shadow-sm rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-semibold text-[#244D3F]">
                    Relationship Goal
                  </h2>
                  <button className="text-sm border border-[#e9e9e9] px-3 py-1 rounded-sm hover:bg-gray-50 transition-colors">
                    Edit
                  </button>
                </div>
                <p className="text-[#64748B] text-sm">
                  Connect every{" "}
                  <strong className="text-[#1F2937]">
                    {matchFriend.goal} days
                  </strong>
                </p>
              </div>

              {/* Quick Check-In */}
              <div className="bg-white shadow rounded-xl p-5">
                <h2 className="font-semibold text-[#244D3F] mb-4">
                  Quick Check-In
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleCheckin("call")}
                    className="border border-[#e9e9e9] rounded-xl p-4 flex flex-col items-center gap-2 text-lg font-medium text-[#1F2937] hover:bg-gray-100 transition-all cursor-pointer"
                  >
                    <BiPhoneCall /> Call
                  </button>
                  <button
                    onClick={() => handleCheckin("text")}
                    className="border border-[#e9e9e9] rounded-xl p-4 flex flex-col items-center gap-2 text-lg font-medium text-[#1F2937] hover:bg-gray-100  transition-all cursor-pointer"
                  >
                    <MdOutlineTextsms /> Text
                  </button>
                  <button
                    onClick={() => handleCheckin("video")}
                    className="border border-[#e9e9e9] rounded-xl p-4 flex flex-col items-center gap-2 text-lg font-medium text-[#1F2937] hover:bg-gray-100  transition-all cursor-pointer"
                  >
                    <IoVideocamOutline /> Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </section>
  );
};

export default FriendDetailPage;
