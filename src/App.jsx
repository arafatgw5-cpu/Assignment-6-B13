import React from 'react';
import Navber from './components/Navber';
import Banner from './components/Banner';
import Rating from './components/Rating';
import Model from './Model';
const getModels = async ()=>{
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()


const App = () => {
  return (
    <div>
      <Navber/>
      <Banner/>
      <Rating/>
      <Model modelPromise={modelPromise}/>
    </div>
  );
};

export default App;