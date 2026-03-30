import React from 'react';

const Rating = () => {
    return (
<div className="bg-[#8B2CF5] py-16 px-6 mx-auto w-full">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
    

    <div className="text-center w-full md:flex-1 relative">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">50K+</h2>
      <p className="text-white/80 text-sm md:text-base font-medium tracking-wide">Active Users</p>
  
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/20"></div>
    </div>


    <div className="text-center w-full md:flex-1 relative">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">200+</h2>
      <p className="text-white/80 text-sm md:text-base font-medium tracking-wide">Premium Tools</p>
    
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/20"></div>
    </div>


    <div className="text-center w-full md:flex-1">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">4.9</h2>
      <p className="text-white/80 text-sm md:text-base font-medium tracking-wide">Rating</p>
    </div>

  </div>
</div>
    );
};

export default Rating;