import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';
import Favorite from './components/Favorite/Favorite';

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
      <Favorite />
    </Provider>
  );
}

export default App;
