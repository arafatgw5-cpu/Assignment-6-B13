import Navber from './components/Navber';
import Banner from './components/Banner';
import Rating from './components/Rating';
import Model from './components/Model';
import Cart from './components/Cart';
import { useState } from 'react';

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

const App = () => {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navber />
      <Banner />
      <Rating />

      {/* Tabs */}
      <div className="tabs tabs-box justify-center bg-transparent py-5">
        <input
          type="radio"
          name="tabs"
          className="tab rounded-full w-40"
          aria-label="Products"
          checked={activeTab === "model"}
          onChange={() => setActiveTab("model")}
        />

        <input
          type="radio"
          name="tabs"
          className="tab rounded-full w-40"
          aria-label="Cart"
          checked={activeTab === "cart"}
          onChange={() => setActiveTab("cart")}
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-10">
        {activeTab === "model" && (
          <Model
            modelPromise={modelPromise}
            carts={carts}
            setCarts={setCarts}
          />
        )}

        {activeTab === "cart" && (
          <Cart carts={carts} setCarts={setCarts} />
        )}
      </div>
    </div>
  );
};

export default App;