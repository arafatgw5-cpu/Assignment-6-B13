import React, {useEffect,  useState } from 'react';
import ModalCard from './ModalCard';

const Model = ({ modelPromise, carts, setCarts }) => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    modelPromise.then(data => setModels(data));
  }, [modelPromise]);

  return (
    <div className="max-w-7xl mx-auto">
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Premium Digital Tools
        </h1>
        <p className="text-gray-500 max-w-md mx-auto mt-2">
          Choose from our curated collection of premium digital products.
        </p>
      </div>

      {models.length === 0 ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <ModalCard
              key={model.id}
              model={model}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Model;