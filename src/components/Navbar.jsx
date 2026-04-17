import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { IoIosStats } from "react-icons/io";
import NavLinks from "./common/NavLinks";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      icon: <RiHome2Line />,
      children: "Home",
    },
    {
      path: "/timeline",
      icon: <RiTimeLine />,
      children: "Timeline",
    },
    {
      path: "/stats",
      icon: <IoIosStats />,
      children: "Stats",
    },
  ];
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
            {navItems.map((item, index) => (
              <NavLinks key={index} to={item.path} icon={item.icon}>
                {item.children}
              </NavLinks>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
