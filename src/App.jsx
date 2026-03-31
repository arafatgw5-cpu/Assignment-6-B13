import Navber from './components/Navber';
import Banner from './components/Banner';
import Rating from './components/Rating';
import Model from './components/Model';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import { useState } from 'react';
import Footer from './components/Footer';

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
      <Navber carts={carts} />
      <Banner />
      <Rating />

   
      <div className="tabs tabs-box justify-center bg-transparent py-5 gap-2 ">
  
        <input
          type="radio"
          name="tabs"
          className={`tab rounded-full w-40 font-medium transition-all ${
            activeTab === "model"
              ? "bg-violet-600 text-white hover:bg-violet-700 shadow-md"
              : "bg-white hover:bg-gray-100 text-gray-700"
          }`}
          aria-label="Products"
          checked={activeTab === "model"}
          onChange={() => setActiveTab("model")}
        />


        <input
          type="radio"
          name="tabs"
          className={`tab rounded-full w-40 font-medium transition-all ${
            activeTab === "cart"
              ? "bg-violet-600 text-white hover:bg-violet-700 shadow-md"
              : "bg-white hover:bg-gray-100 text-gray-700"
          }`}
          aria-label={`Cart (${carts.length})`}
          checked={activeTab === "cart"}
          onChange={() => setActiveTab("cart")}
        />
      </div>


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
      <Steps/>
      <Pricing/>
      <Footer/>
    </div>
  );
};

export default App;