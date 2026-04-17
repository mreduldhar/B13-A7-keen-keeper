import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-[#244D3F] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 text-lg mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#244D3F] text-xl text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors cursor-pointer"
      >
        Back To Home
      </button>
    </div>
  );
};

export default NotFound;
