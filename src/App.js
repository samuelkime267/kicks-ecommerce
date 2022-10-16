import React from 'react';
import { Home, ProductPage, Cart, Shop, NoPage } from './page/';
import { StateContext } from './context/stateContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <StateContext>
      <BrowserRouter>
        <Routes path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="product-page/:id" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </StateContext>
  );
}

export default App;
