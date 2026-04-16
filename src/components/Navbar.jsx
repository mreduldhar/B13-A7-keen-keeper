import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { IoIosStats } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-[#E9E9E9] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>

          {/* Nav links */}
          <div className="flex items-center gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-base font-medium transition-colors ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "text-[#64748B] hover:text-gray-900 hover:bg-gray-100"
                }`
              }
            >
              <RiHome2Line /> Home
            </NavLink>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-base font-medium transition-colors ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "text-[#64748B] hover:text-gray-900 hover:bg-gray-100"
                }`
              }
            >
              <RiTimeLine /> Timeline
            </NavLink>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-base font-medium transition-colors ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "text-[#64748B] hover:text-gray-900 hover:bg-gray-100"
                }`
              }
            >
              <IoIosStats /> Stats
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
