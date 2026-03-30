import React, { use } from 'react';
import ModalCard from './ModalCard';

const Model = ({ modelPromise }) => {
  const models = use(modelPromise); // 


  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header - Fully responsive */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
          Premium Digital Tools
        </h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
          Choose from our curated collection of premium digital products.
        </p>
      </div>

      {/* Model Cards - 100% Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {models.map((model) => (
         <ModalCard model={model}/>
        ))}
      </div>
    </div>
  );
};

export default Model;