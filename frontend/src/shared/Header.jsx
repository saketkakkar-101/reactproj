import React, { useState } from "react";
import { FaEnvelope, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <header className="text-white font-sans">
      {/* Top bar */}
      <div className="bg-[#0c1124] text-sm px-4 py-2 flex flex-wrap justify-between items-center mx-auto">
        <div className="flex flex-wrap items-center gap-4 p-4 ml-10 text-[16px] font-semibold justify-evenly">
          <span>
            {" "}
            <img
              src="https://flagcdn.com/in.svg"
              alt="India Flag"
              className="w-5 h-4 inline mr-1"
            />
            Sales: +91 997-139-2828
          </span>
          <span>
            {" "}
            <img
              src="https://flagcdn.com/in.svg"
              alt="India Flag"
              className="w-5 h-4 inline mr-1"
            />{" "}
            Sales: +91 997-139-2828
          </span>
          <span>
            <img
              src="https://flagcdn.com/mx.svg"
              alt="Mexico Flag"
              className="w-5 h-4 inline mr-1"
            />
            +52-984-278-8753
          </span>
        </div>
        <div className="flex items-center gap-4 p-4 mr-6 font-semibold justify-evenly text-[16px]">
          <span className="flex items-center gap-1">
            <FaEnvelope /> Internship
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope /> Support
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope /> Client Login
          </span>
        </div>
      </div>

      <hr />

      {/* Main Nav */}
      <nav className="bg-[#0b0f2a] px-4 py-3 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-4 p-3 ml-6">
          <img src="https://www.xpectoitsolutions.com/assets/img/logo/logo.png" alt="Logo" className="w-[114px]" />
        </div>
        <ul className="flex flex-wrap gap-6 text-white text-md text-[16px] font-semibold justify-evenly p-6 mr-10">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="relative list-none">
        <div
          onClick={() => setAboutOpen(!aboutOpen)}
          className="cursor-pointer flex items-center gap-1 hover:text-blue-400"
        >
          About Us <FaChevronDown size={12} />
        </div>
        {aboutOpen && (
          <div className="absolute mt-2 left-0 bg-white text-black border px-4 py-3 rounded shadow w-64 text-base">
            My name is Saket Kakkar
          </div>
        )}
      </li>

      {/* Services Dropdown */}
      <li className="relative list-none">
        <div
          onClick={() => setServicesOpen(!servicesOpen)}
          className="cursor-pointer flex items-center gap-1 hover:text-blue-400"
        >
          Services <FaChevronDown size={12} />
        </div>
        {servicesOpen && (
          <div className="absolute mt-2 left-0 bg-white text-black border px-4 py-3 rounded shadow w-64 text-base">
            We provide our best services
          </div>
        )}
      </li>
      <li className="relative list-none">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center gap-1 hover:text-blue-400"
      >
        Technology <FaChevronDown size={12} />
      </div>

      {open && (
        <div className="absolute mt-2 left-0 bg-white text-black border px-4 py-3 rounded shadow w-64 text-base z-50">
          <ul className="space-y-1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Tailwind</li>
            <li>MongoDB</li>
            <li>Node.js</li>
          </ul>
        </div>
      )}
    </li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-1">
            Industry <FaChevronDown size={12} />
          </li>
          <li className="hover:text-blue-400 cursor-pointer">Career</li>
          <li className="hover:text-blue-400 cursor-pointer">Blogs</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
