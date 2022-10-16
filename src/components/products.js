import React from 'react';
import Stars from './stars';
import { Link } from 'react-router-dom';

const Product = function ({
  sneakerData: { id, name, description, price, rating, images },
}) {
  const descTextLength = description.substring(0, 90);
  return (
    <>
      <Link to={`/product-page/${id}`}>
        <div className="product-main-holder">
          <div className="product">
            <div className="product-img-container">
              <img src={images[0].img} alt={name} className="product-img" />
            </div>
            <div className="product-details">
              <h1 className="product-title">{name}</h1>
              <p className="product-description">{descTextLength}</p>
              <Stars />
              <div className="price-container">
                <h1 className="price-h1">${price}</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
