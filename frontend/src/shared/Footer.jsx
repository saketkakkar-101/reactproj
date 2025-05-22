import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0E104B] text-white px-6 py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Xpecto<sup>®</sup> IT Solutions Pvt Ltd
        </h2>
        <p className="text-blue-400">A Reference Based Company</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-300 text-left max-w-6xl mx-auto">
        {/* Expertise */}
        <div>
          <h1 className="font-bold text-white mb-2 border-b-4 hover:border-cyan-400 text-3xl inline-block">
            Expertise
          </h1>
          <ul className="space-y-1 mt-3 text-xl font-semibold text-slate-200">
            <li className="relative group w-max cursor-pointer">
              <span className="group-hover:text-blue-400 transition-colors duration-300 font-semibold">
                Website Development
              </span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group w-max cursor-pointer">
              <span className="group-hover:text-blue-400 transition-colors duration-300">
                Web Applications
              </span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group w-max cursor-pointer">
              <span className="group-hover:text-blue-400 transition-colors duration-300">
                Custom Applications
              </span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group w-max cursor-pointer">
              <span className="group-hover:text-blue-400 transition-colors duration-300">
                Mobile Development
              </span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group w-max cursor-pointer">
              <span className="group-hover:text-blue-400 transition-colors duration-300">
                Digital Marketing
              </span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group w-max cursor-pointer">
              <span className="group-hover:text-blue-400 transition-colors duration-300">
                Cloud/Hosting
              </span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group w-max cursor-pointer">
              <span className="group-hover:text-blue-400 transition-colors duration-300">
                Email Solutions
              </span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group w-max cursor-pointer">
              <span className="group-hover:text-blue-400 transition-colors duration-300">
                Web / Mobile Maintenance
              </span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </li>
          </ul>
        </div>

        {/* Consulting */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b-2 border-cyan-400 inline-block">
            Consulting
          </h3>
          <ul className="space-y-1 mt-2">
            <li>Blockchain</li>
            <li>Artificial Intelligence</li>
            <li>Information of Technology (IOT)</li>
            <li>NFT</li>
            <li>Digital Transformation</li>
            <li>ChatBot</li>
            <li>Web 3.0</li>
          </ul>
        </div>

        {/* Hire */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b-2 border-cyan-400 inline-block">
            Hire
          </h3>
          <ul className="space-y-1 mt-2">
            <li>Full Stack Developers</li>
            <li>Web Developers</li>
            <li>MERN Stack Developers</li>
            <li>UI/UX Designers</li>
            <li>Others</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold text-white mb-2 border-b-2 border-cyan-400 inline-block">
            Informations
          </h3>
          <ul className="space-y-1 mt-2">
            <li>Who We Are</li>
            <li>Clients</li>
            <li>We Work In</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
