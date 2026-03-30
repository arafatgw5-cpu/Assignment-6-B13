import React from 'react';

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    setCarts(carts.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-3xl shadow-xl">

      <h1 className="text-3xl font-bold text-center mb-6">
        Your Cart
      </h1>

      {carts.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl"
              >
                <div className="text-3xl">{item.icon}</div>

                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>${item.price}</p>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6 p-4 bg-amber-100 rounded-xl font-bold text-lg">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;