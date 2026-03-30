import Navber from './components/Navber';
import Banner from './components/Banner';
import Rating from './components/Rating';
import Model from './components/Model';
import Cart from './components/Cart';
import { useState } from 'react';

const getModels = async ()=> {
  const res =await fetch("/models.json")
  return res.json()
}
const modelPromise=getModels()


const App = () => {
  const [activeTab,setactiveTab]=useState("model")
  const[carts,setCarts]=useState([])
  console.log(carts)
   
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navber/>
      <Banner/>
      <Rating/>

<div className="tabs tabs-box justify-center bg-transparent ">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked  onClick={()=>setactiveTab("model")} />

  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" onClick={()=>setactiveTab("Cart")} /> 

</div>

    {activeTab== "model" &&<Model modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}
    {activeTab==="Cart"&&  <Cart carts={carts}/>}
    </div>
  );
};

export default App;