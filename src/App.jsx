import Navber from './components/Navber';
import Banner from './components/Banner';
import Rating from './components/Rating';
import Model from './components/Model';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navber/>
      <Banner/>
      <Rating/>
      <Model/>
    </div>
  );
};

export default App;