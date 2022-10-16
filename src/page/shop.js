import React from 'react';
import { Product, Navbar, Footer, ShopFilterContainer } from '../components';
import { useStateContext } from '../context/stateContext';
const Shop = () => {
  const { sneakerData, showFilterContainer } = useStateContext();
  return (
    <>
      <Navbar />
      <main>
        <section className="shop-section">
          <button
            onClick={showFilterContainer}
            className="ShowInMobile atc-btn wishlist-btn"
            style={{ marginLeft: 10, marginBottom: 20 }}
          >
            <p className="atc-p">filter</p>
          </button>
          <div className="section-container shop-section-container">
            <ShopFilterContainer />
            <div className="shop-product-container">
              {sneakerData.map(sneaker => (
                <Product key={sneaker.id} sneakerData={sneaker} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
