import React from 'react';
import StepsImage from "../assets/products/user.png"
import StepsImage2 from "../assets/products/package.png"
import StepsImage3 from "../assets/products/rocket.png"

const Steps = () => {
    return (
     <div>

  <div className="text-center mb-8">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
      Get Started in 3 Steps
    </h1>
    <p className="text-gray-500 max-w-md mx-auto mt-2 text-sm sm:text-base">
      Start using premium digital tools in minutes, not hours.
    </p>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-8">
    

    <div className="card bg-white w-full shadow-sm rounded-3xl p-6 sm:p-8 relative flex flex-col">
      
      <div className="absolute top-6 right-6 bg-purple-600 text-white text-sm font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
        01
      </div>


      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
          <img src={StepsImage} alt="Step 1" className="w-12 h-12 object-contain" />
        </div>
      </div>


      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Create Account
      </h2>

  
      <p className="text-center text-gray-500 text-sm sm:text-base leading-tight flex-1">
        Sign up for free in seconds. No credit card required to get started.
      </p>
    </div>

  
    <div className="card bg-white w-full shadow-sm rounded-3xl p-6 sm:p-8 relative flex flex-col">
  
      <div className="absolute top-6 right-6 bg-purple-600 text-white text-sm font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
        02
      </div>

  
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
          <img src={StepsImage2} alt="Step 2" className="w-12 h-12 object-contain" />
        </div>
      </div>

      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Choose Products
      </h2>

 
      <p className="text-center text-gray-500 text-sm sm:text-base leading-tight flex-1">
        Browse our catalog and select the tools that fit your needs.
      </p>
    </div>

    <div className="card bg-white w-full shadow-sm rounded-3xl p-6 sm:p-8 relative flex flex-col">
     
      <div className="absolute top-6 right-6 bg-purple-600 text-white text-sm font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
        03
      </div>

     
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
          <img src={StepsImage3} alt="Step 3" className="w-12 h-12 object-contain" />
        </div>
      </div>


      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Start Creating
      </h2>

     
      <p className="text-center text-gray-500 text-sm sm:text-base leading-tight flex-1">
        Download and start using your premium tools immediately.
      </p>
    </div>
  </div>
</div>
    );
};

export default Steps;