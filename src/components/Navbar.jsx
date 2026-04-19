import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { RiHome2Line, RiMenuLine, RiTimeLine } from "react-icons/ri";
import { IoIosStats } from "react-icons/io";
import NavLinks from "./common/NavLinks";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <div className="hidden sm:flex items-center gap-1">
            {navItems.map((item, index) => (
              <NavLinks key={index} to={item.path} icon={item.icon}>
                {item.children}
              </NavLinks>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose /> : <RiMenuLine />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col gap-2 pb-4">
            {navItems.map((item, index) => (
              <NavLinks key={index} to={item.path} icon={item.icon}>
                {item.children}
              </NavLinks>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
