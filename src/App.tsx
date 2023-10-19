import Header from './components/header/Header';
import MainServices from './components/mainServices/MainServices';
import Footer from './components/footer/Footer';
import Products from './components/pruducts/Products';
import CartDetail from './components/cartDetail/CartDetail';
import Cart from './components/cart/Cart';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <div>
          <Header/>
        </div>
        <div className='main'>
          <Products/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
