import React, { useState } from 'react';

const ModalCard = ({model}) => {
   const [isBuyNow,setIsAddToCart]=useState(false)
   const handleBuyBtn= ()=>{
    setIsAddToCart(true)
   }
  return (
    <div>
                <div
            key={model.id}
            className="relative border border-gray-200 rounded-3xl bg-white p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
          >
            
            {model.tag && (
              <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-yellow-300 text-yellow-800 text-xs font-semibold px-4 sm:px-5 py-1 rounded-3xl shadow-sm">
                {model.tag}
              </span>
            )}

          
            <div className="mb-4 sm:mb-5 flex justify-start">
              <div className="text-4xl sm:text-5xl">{model.icon}</div>
            </div>

       
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {model.name}
            </h2>

         
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-tight flex-1">
              {model.description}
            </p>

           
            <p className="font-bold text-2xl sm:text-3xl text-gray-900 mb-6">
              ${model.price}/
              <span className="text-base sm:text-lg font-medium text-gray-500">
                {model.period}
              </span>
            </p>

        
            <div className="space-y-3 sm:space-y-4 mb-8">
              {model.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500 text-2xl leading-none">✓</span>
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

           
            <button onClick={handleBuyBtn}
              className="mt-auto w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 sm:py-4 rounded-3xl text-base sm:text-lg transition-all active:scale-95"
            >
              {isBuyNow ? "Add to cart":"Buy Now"}
            </button>
          </div>
    </div>
  );
};

export default ModalCard;