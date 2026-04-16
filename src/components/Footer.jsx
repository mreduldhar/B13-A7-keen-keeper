import React from "react";
import footerLogo from "../assets/images/footer-logo.svg";
import facebook from "../assets/images/Facebook.svg";
import instagram from "../assets/images/Instagram.svg";
import twitter from "../assets/images/twitter.svg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center">
          <img src={footerLogo} alt="Footer Logo" />
        </div>
        <p className="text-[#c2bebe] text-base my-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="text-white text-xl font-medium mb-4">Social Links</p>
        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-10">
          <Link
            to="/"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <img src={instagram} alt="Instagram icon" />
          </Link>

          <Link
            to="/"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <img src={facebook} alt="Facebook Icon" />
          </Link>

          <Link
            to="/"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <img src={twitter} alt="Twitter Icon" />
          </Link>
        </div>

        <div className="border-t border-[#1A8862]/30 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-base text-[#6a897e]">
          <span>&copy; 2026 KeenKeeper. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
