import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />

      {/* React Toastify */}
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
