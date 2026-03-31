import React from 'react';

const Pricing = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 max-w-md mx-auto mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* Starter Card */}
          <div className="bg-base-100 border border-base-300 rounded-3xl p-8 flex flex-col shadow-sm">
            <div>
              <h2 className="text-3xl font-semibold text-base-content">Starter</h2>
              <p className="text-base-content/70 mt-2">Perfect for getting started</p>
            </div>

            <div className="mt-10">
              <span className="text-6xl font-bold text-base-content">$0</span>
              <span className="text-2xl text-base-content/70 ml-3">/Month</span>
            </div>

            <ul className="mt-10 space-y-5 flex-1 text-base">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-500"></i>
                <span>Access to 10 free tools</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-500"></i>
                <span>Basic templates</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-500"></i>
                <span>Community support</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-500"></i>
                <span>1 project per month</span>
              </li>
            </ul>

            <button className="mt-[60px] btn bg-violet-600 hover:bg-violet-700 border-none text-white w-full text-lg font-semibold rounded-3xl py-4">
              Get Started Free
            </button>
          </div>

          {/* Pro Card */}
          <div className="bg-violet-600 text-white rounded-3xl p-8 flex flex-col shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-sm font-bold px-7 py-1.5 rounded-3xl shadow-md">
              Most Popular
            </div>

            <div>
              <h2 className="text-3xl font-semibold">Pro</h2>
              <p className="mt-2 opacity-90">Best for professionals</p>
            </div>

            <div className="mt-10">
              <span className="text-6xl font-bold">$29</span>
              <span className="text-2xl opacity-80 ml-3">/Month</span>
            </div>

            <ul className="mt-10 space-y-5 flex-1 text-base">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-300"></i>
                <span>Access to all premium tools</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-300"></i>
                <span>Unlimited templates</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-300"></i>
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-300"></i>
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-300"></i>
                <span>Cloud sync</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-300"></i>
                <span>Advanced analytics</span>
              </li>
            </ul>

            <button className="mt-10 btn bg-white hover:bg-gray-100 text-violet-700 border-none w-full text-lg font-semibold rounded-3xl py-4">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Card */}
          <div className="bg-base-100 border border-base-300 rounded-3xl p-8 flex flex-col shadow-sm">
            <div>
              <h2 className="text-3xl font-semibold text-base-content">Enterprise</h2>
              <p className="text-base-content/70 mt-2">For teams and businesses</p>
            </div>

            <div className="mt-10">
              <span className="text-6xl font-bold text-base-content">$99</span>
              <span className="text-2xl text-base-content/70 ml-3">/Month</span>
            </div>

            <ul className="mt-10 space-y-5 flex-1 text-base">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-500"></i>
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-500"></i>
                <span>Team collaboration</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-500"></i>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-500"></i>
                <span>Dedicated support</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-500"></i>
                <span>SLA guarantee</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-emerald-500"></i>
                <span>Custom branding</span>
              </li>
            </ul>

            <button className="mt-auto btn bg-violet-600 hover:bg-violet-700 border-none text-white w-full text-lg font-semibold rounded-3xl py-4">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;