import React, { useState } from "react";
import Banner from "../components/Banner";
import Friends from "../components/Friends";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <main className="flex-1">
        {/* Banner */}
        <Banner />

        {/* Friends Section */}
        <Friends loading={loading} setLoading={setLoading} />
      </main>
    </div>
  );
};

export default HomePage;
