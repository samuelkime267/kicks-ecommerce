import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Navbar, Footer } from '../components/';
import { Product, Stars, Modal } from '../components/';
import { useStateContext } from '../context/stateContext';
import { Link } from 'react-router-dom';

const ProductPage = function () {
  const { sneakerData } = useStateContext();
  const id = Number(useParams().id);
  const { name, description, images, size, price } = sneakerData.filter(
    sneaker => sneaker.id === id
  )[0];

  let maxImages = images.length - 1;
  const [activeImage, setActiveImage] = useState(0);
  if (activeImage > maxImages) setActiveImage(0);
  const [shoeSize, SetShoeSize] = useState(0);

  const { addToCart, isModalActive, modalText } = useStateContext();

  return (
    <>
      <Navbar />
      {isModalActive && <Modal text={modalText} />}
      <main>
        <section className="product-page-container">
          <div className="section-container">
            <div className="product-page-container-main">
              <div className="product-details-main-container">
                <div className="product-text-details">
                  <div className="text-main">
                    <h1 className="product-title">{name}</h1>
                    <p className="description">{description}</p>
                  </div>
                  <div className="product-other-images">
                    {images.map((image, i) => {
                      return (
                        <button
                          onClick={() => setActiveImage(i)}
                          key={i}
                          className={`bgLess swiper-pagination-btn ${
                            activeImage === i ? 'active' : ''
                          }`}
                        >
                          <img
                            src={`../${image.img}`}
                            alt={`${name}-${image.color}`}
                            className="product-img"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="product-img-container-section">
                  <div className="product-images-nav-btns-container ShowInMobile">
                    <button
                      className="bgLess"
                      onClick={() =>
                        setActiveImage(i => {
                          if (i === 0) return maxImages;
                          return i - 1;
                        })
                      }
                    >
                      <i className="fa-solid fa-chevron-left product-nav-i"></i>
                    </button>
                    <button
                      className="bgLess"
                      onClick={() =>
                        setActiveImage(i => {
                          if (i === maxImages) return 0;
                          return i + 1;
                        })
                      }
                    >
                      <i className="fa-solid fa-chevron-right product-nav-i"></i>
                    </button>
                  </div>
                  <div className="product-images-holder">
                    {images.map((image, i) => (
                      <div
                        key={i}
                        className={`product-img-container ${
                          i === activeImage ? '' : 'displayNone'
                        }`}
                      >
                        <img
                          src={`../${image.img}`}
                          alt={`${name}-${image.color}`}
                          className="product-img"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="product-details-container-section">
                <h1 className="sub-title-product">size</h1>
                <div className="size-container">
                  {size.map((number, i) => {
                    return (
                      <button
                        onClick={() => SetShoeSize(number)}
                        key={i}
                        className={`size-btn ${
                          number === shoeSize ? 'active-size' : ''
                        }`}
                      >
                        {number}
                      </button>
                    );
                  })}
                </div>
                <div className="short-content-holder">
                  <h1 className="sub-title-product">reviews</h1>
                  <Stars />
                </div>
                <div className="short-content-holder">
                  <h1 className="sub-title-product">price</h1>
                  <h1 className="price-h1">${price}</h1>
                </div>
                <div className="short-content-holder">
                  <h1 className="sub-title-product">colors</h1>
                  <div className="color-btn-container">
                    {images.map((image, i) => (
                      <button
                        onClick={() => setActiveImage(i)}
                        key={i}
                        className={`bgLess color-selector ${
                          i === activeImage ? 'active-color' : ''
                        }`}
                        style={{ backgroundColor: image.color }}
                      ></button>
                    ))}
                  </div>
                </div>
                <div className="control-add-to-cart-section">
                  <div className="cart-wishlist-btn-container">
                    <button
                      className="atc-btn"
                      type="button"
                      onClick={() =>
                        addToCart(id, shoeSize, activeImage, price)
                      }
                    >
                      <i className="fa-solid fa-shopping-cart atc-i"></i>
                      <p className="atc-p">add to cart</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-complete-details">
          <div className="section-container">
            <h1 className="section-title">product details</h1>
            <div className="description-container">
              <p className="description">{description}</p>
            </div>
          </div>
        </section>
        <section className="related-product">
          <div className="section-container">
            <h1 className="section-title">related products</h1>
            <div className="products-container-holder">
              <div className="product-container">
                {sneakerData
                  .filter((_, i) => {
                    return i <= 3;
                  })
                  .map(sneaker => (
                    <Link key={sneaker.id} to={`/product-page/${sneaker.id}`}>
                      <div className="product-main-holder">
                        <div className="product">
                          <div className="product-img-container">
                            <img
                              src={`../${sneaker.images[0].img}`}
                              alt={sneaker.name}
                              className="product-img"
                            />
                          </div>
                          <div className="product-details">
                            <h1 className="product-title">{sneaker.name}</h1>
                            <p className="product-description">
                              {sneaker.descTextLength}
                            </p>
                            <Stars />
                            <div className="price-container">
                              <h1 className="price-h1">${sneaker.price}</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default ProductPage;
