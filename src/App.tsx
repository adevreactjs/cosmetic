import React from 'react';
import Header from './components/header/Header';
import MainServices from './components/mainServices/MainServices';
import Footer from './components/footer/Footer';
import Products from './components/pruducts/Products';
import CartDetail from './components/cartDetail/CartDetail';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <MainServices/> */}
      {/* <Products/> */}
      <CartDetail/>
      <Footer/>
    </div>
  );
}

export default App;
