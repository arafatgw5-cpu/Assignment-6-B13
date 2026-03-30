import React from 'react';

const Cart = ({carts}) => {
 
    return (
<div className='shadow-2xl bg-white rounded-3xl p-6'>
  {/* Header - Exact same as photo */}
  <h1 className='text-2xl font-bold mb-6 text-gray-900'>Your Cart</h1>

  {/* Cart Items - Exact photo layout */}
  <div className="space-y-3">
    {carts.map((item) => (
      <div
        key={item.id}
        className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl hover:bg-gray-100 transition-all"
      >
        {/* Icon - Exact size & position as photo */}
        <div className="text-4xl flex-shrink-0 mt-1">
          {item.icon}
        </div>

        {/* Name + Price - Stacked exactly like screenshot */}
        <div className="flex-1">
          <div className="font-semibold text-lg text-gray-900">
            {item.name}
          </div>
          <div className="text-xl font-bold text-gray-700 mt-1">
            ${item.price}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    );
};

export default Cart;