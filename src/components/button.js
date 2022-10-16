import React from 'react';

const Button = function ({ type, content }) {
  if (type === 'atc')
    return (
      <button className="atc-btn" type="button">
        <i className="fa-solid fa-shopping-cart atc-i"></i>
        <p className="atc-p">add to cart</p>
      </button>
    );
  if (type === 'regular')
    return (
      <button className="atc-btn" type="button">
        <p className="atc-p">{content}</p>
      </button>
    );
  if (type === 'regularDark')
    return (
      <button className="atc-btn wishlist-btn" type="button">
        <p className="atc-p">{content}</p>
      </button>
    );
};

export default Button;
