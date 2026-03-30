import Navber from './components/Navber';
import Banner from './components/Banner';
import Rating from './components/Rating';
import Model from './components/Model';
import Cart from './components/Cart';

const getModels = async ()=> {
  const res =await fetch("/models.json")
  return res.json()
}
const modelPromise=getModels()


const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navber/>
      <Banner/>
      <Rating/>

<div className="tabs tabs-box justify-center ">
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Products" defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Cart"  /> 
</div>

      <Model modelPromise={modelPromise}/>
      <Cart/>
    </div>
  );
};

export default App;