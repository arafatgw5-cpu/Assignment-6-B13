import React from 'react';
import BannerIcon from "../assets/products/Group 5.png"
import BannerImage from "../assets/products/banner.png"

const Banner = () => {
    return (
<div className="hero bg-base-200 min-h-screen py-10 lg:py-0">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20 px-6">
    

    <div className="w-full max-w-sm lg:max-w-md">
      <img
        src={BannerImage}
        className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-300"
        alt="Banner"
      />
    </div>

 
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl"> 
      

      <div className="flex items-center gap-3 bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-medium text-xs sm:text-sm animate-pulse">
        <img src={BannerIcon} alt="AI" className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>New: AI-Powered Tools Available</span>
      </div>


      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900">
        Supercharge Your <br className="hidden sm:block" /> <span className='text-[#8B2CF5]'>Digital Workflow</span>
      </h1>


      <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed">
        Access premium AI tools, design assets, templates, and productivity 
        software—all in one place. Start creating faster today.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">

        <button className="w-full sm:w-auto px-10 py-4 bg-[#8B2CF5] hover:bg-[#7319e6] text-white font-bold rounded-full shadow-lg shadow-purple-200 transition-all active:scale-95">
          Explore Products
        </button>


        <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 border-2 border-[#8B2CF5] text-[#8B2CF5] font-bold rounded-full hover:bg-[#8B2CF5] hover:text-white transition-all active:scale-95 group">
          <i className="fa-solid fa-play text-sm group-hover:scale-110"></i>
          Watch Demo
        </button>
      </div>

    </div>
  </div>
</div>
    );
};

export default Banner;