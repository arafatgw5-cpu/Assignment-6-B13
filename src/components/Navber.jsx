import React from 'react';

const Navber = () => {
    return (
<div className="navbar bg-base-100 shadow-sm px-4 lg:px-8 py-4">

  <div className="navbar-start">

    <div className="dropdown lg:hidden">
      <ul  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="text-2xl lg:text-3xl font-bold text-violet-600 ml-2 lg:ml-0 cursor-pointer">DigiTools</a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <div className="flex items-center gap-x-8 text-base font-medium">
      <a href="#" className="hover:text-violet-600 transition-colors">Products</a>
      <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
      <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
      <a href="#" className="hover:text-violet-600 transition-colors">Testimonials</a>
      <a href="#" className="hover:text-violet-600 transition-colors">FAQ</a>
    </div>
  </div>

  <div className="navbar-end flex items-center gap-x-2 sm:gap-x-4">

    <button className="btn btn-ghost btn-circle">
      <i className="fa-solid fa-cart-shopping text-lg"></i>
    </button>
    

    <a href="#" className="hidden sm:flex btn btn-ghost text-base font-medium hover:bg-base-200 px-4">
      Login
    </a>
    

    <a 
      href="#" 
      className="btn bg-violet-600 hover:bg-violet-700 border-none text-white text-sm sm:text-base font-semibold rounded-full px-4 sm:px-8 shadow-md"
    >
      Get Started
    </a>
  </div>
</div>
    );
};

export default Navber;