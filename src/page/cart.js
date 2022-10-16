import React from 'react';
import { Navbar, Footer, CartContentContainer } from '../components';

const Cart = function () {
  return (
    <>
      <Navbar />
      <main>
        <section className="shopping-cart">
          <div className="section-container">
            <h1 className="section-title">shopping cart</h1>
            <div className="carts-container">
              <CartContentContainer />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
