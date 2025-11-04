import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4b3429] text-[#d6e2b4] py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img src="/logo.png" alt="HomeWise" className="w-20 mb-4" />
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-start">
          <p className="text-sm font-medium">Kathmandu, Nepal</p>
          <p className="text-sm mt-1">0245367424</p>
          <p className="text-sm mt-1">info@homewise.com</p>
        </div>

        {/* About Section */}
        <div className="flex flex-col items-start md:w-1/3">
          <h3 className="text-lg mb-2 font-serif italic text-[#b7d470]">About HomeWise</h3>
          <p className="text-sm leading-relaxed italic">
            Discover your home's worth with HomeWise — the smart solution for
            home value predictions. Get accurate and up-to-date estimates with
            ease and confidence.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
