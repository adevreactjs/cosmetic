import React from 'react';
import Header from './components/header/Header';
import MainServices from './components/mainServices/MainServices';
import Footer from './components/footer/Footer';
import Products from './components/pruducts/Products';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <MainServices/> */}
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
