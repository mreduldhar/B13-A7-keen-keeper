import React from "react";
import Banner from "../components/Banner";
import Friends from "../components/Friends";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <main className="flex-1">
        {/* Banner */}
        <Banner />

        {/* Friends Section */}
        <Friends />
      </main>
    </div>
  );
};

export default HomePage;
