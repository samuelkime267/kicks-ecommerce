import React from 'react';
import Button from './button';

const Hero = function () {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="pagination-socials">
            <div className="pagination-icons"></div>
            <ul className="social-icons">
              <li className="scroll-text">
                scroll down{' '}
                <i className="fa-solid fa-arrow-right arrow-down-i"></i>
              </li>
            </ul>
          </div>
          <div className="shoes-container swiper">
            <div className="shoes-container-wrapper swiper-wrapper">
              <div className="hero-shoe-display swiper-slide">
                <div className="hero-text-container">
                  <h1 className="hero-title">dunk high retro</h1>
                  <p className="hero-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates aperiam neque ipsam magni quod sapiente
                    laudantium?
                  </p>
                  <h2 className="product-price">
                    $<span className="price">149.99</span>
                  </h2>
                  <Button type="atc" />
                </div>
                <div className="hero-img-container">
                  <img src="./images/shoes4.png" alt="" className="hero-img" />
                </div>
                <div
                  className="hero-img-bg-color"
                  data-color="rgb(180, 238, 255)"
                ></div>
              </div>
            </div>
          </div>
          <div className="direction-icons">
            <button className="bgLess swiper-button-next"></button>
            <button className="bgLess swiper-button-prev"></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
