import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ to, children, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-base font-medium transition-colors ${
          isActive
            ? "bg-[#244D3F] text-white"
            : "text-[#64748B] hover:text-gray-900 hover:bg-gray-100"
        }`
      }
    >
      {icon} {children}
    </NavLink>
  );
};

export default NavLinks;
