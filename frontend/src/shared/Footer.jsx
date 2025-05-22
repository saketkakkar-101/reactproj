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
          <h1 className="text-[22px] font-extrabold text-white mb-3 border-b-4 hover:border-cyan-400 inline-block font-sans-serif tracking-wide">
            Expertise
          </h1>
          <ul className="space-y-2 mt-4 text-[18px] font-medium text-slate-100 font-sans-serif">
            {[
              "Website Development",
              "Web Applications",
              "Custom Applications",
              "Mobile Development",
              "Digital Marketing",
              "Cloud/Hosting",
              "Email Solutions",
              "Web / Mobile Maintenance",
            ].map((item, i) => (
              <li key={i} className="relative group w-max cursor-pointer mt-3">
                <span className="group-hover:text-cyan-400 transition-colors duration-300 font-semibold tracking-wide">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Consulting */}
        <div>
          <h1 className="text-[22px] font-extrabold text-white mb-3 border-b-4 hover:border-cyan-400 inline-block font-sans-serif tracking-wide">
            Consulting
          </h1>
          <ul className="space-y-2 mt-4 text-[18px] font-medium text-slate-100 font-sans-serif">
            {[
              "Blockchain",
              "Artificial Intelligence",
              "Information of Technology (IOT)",
              "NFT",
              "Digital Transformation",
              "ChatBot",
              "Web 3.0",
              
            ].map((item, i) => (
              <li key={i} className="relative group w-max cursor-pointer mt-3">
                <span className="group-hover:text-cyan-400 transition-colors duration-300 font-semibold tracking-wide">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hire */}
        <div className="ml-4">
          <h1 className="text-[22px] font-extrabold text-white mb-3 border-b-4 hover:border-cyan-400 inline-block font-sans-serif tracking-wide">
            Hire
          </h1>
          <ul className="space-y-2 mt-4 text-[18px] font-medium text-slate-100 font-sans-serif">
            {[
              "Full Stack Developers",
              "web Developers",
              "Mern Stack Developers",
              "UI/UX Designers",
              "Others",
                
            ].map((item, i) => (
              <li key={i} className="relative group w-max cursor-pointer mt-3">
                <span className="group-hover:text-cyan-400 transition-colors duration-300 font-semibold tracking-wide">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="ml-4">
          <h1 className="text-[22px] font-extrabold text-white mb-3 border-b-4 hover:border-cyan-400 inline-block font-sans-serif tracking-wide">
            Informations
          </h1>
          <ul className="space-y-2 mt-4 text-[18px] font-medium text-slate-100 font-sans-serif">
            {[
              "Who We Are",
              "Clients",
              "We Work In",
              "Contact Us"
              
                
            ].map((item, i) => (
              <li key={i} className="relative group w-max cursor-pointer mt-3">
                <span className="group-hover:text-cyan-400 transition-colors duration-300 font-semibold tracking-wide">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
