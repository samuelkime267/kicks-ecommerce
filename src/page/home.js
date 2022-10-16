import React from 'react';
import {
  Navbar,
  Hero,
  Gallery,
  Product,
  SubscribeToNewsLetter,
  Footer,
} from '../components/';
import { useStateContext } from '../context/stateContext';

const Home = function () {
  const { sneakerData } = useStateContext();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <section className="trending">
          <div className="section-container">
            <h1 className="section-title">trending</h1>
            <div className="products-container-holder">
              <div className="product-container">
                {sneakerData.map((sneaker, i) => {
                  if (i + 1 > 8) return;
                  return <Product key={sneaker.id} sneakerData={sneaker} />;
                })}
              </div>
            </div>
          </div>
        </section>
        <SubscribeToNewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
