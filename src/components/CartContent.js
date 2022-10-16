import React from 'react';
import Button from './button';
import { useStateContext } from '../context/stateContext';
import { sneakerData } from '../data/sneakerData';

const CartContentContainer = function () {
  const { totalCartQuantity } = useStateContext();
  return (
    <>
      {totalCartQuantity === 0 ? (
        <NoItemInCart />
      ) : (
        <CartContentMainContainer />
      )}
    </>
  );
};
const NoItemInCart = function () {
  return (
    <>
      <div className="noItemContainer">
        <i className="fa-solid fa-shopping-cart noItem-i"></i>
        <h1 className="section-title">no item in cart</h1>
        <button className="atc-btn">
          <p className="atc-p">go shopping</p>
        </button>
      </div>
    </>
  );
};
const CartContentMainContainer = function () {
  const { cartItems, totalPrice } = useStateContext();
  return (
    <div className="cart-contents-container">
      <div className="cartHeader">
        <h1 className="cart-header">product</h1>
        <h1 className="cart-header doNotShowInMobile"> </h1>
        <h1 className="cart-header">price</h1>
        <h1 className="cart-header">quantity</h1>
      </div>

      {cartItems.map(item => (
        <CartContent key={item.id} {...item} />
      ))}

      <div className="cart-back-btn-container">
        <Button type={'regularDark'} content={'go shopping'} />
        <Button type={'regular'} content={'checkout'} />
      </div>
      <div className="cart-content-summary">
        <h1 className="cart-title">Cart Summary</h1>
        <div className="cart-summary-container">
          <div className="summary">
            <h1 className="cart-subheader">sub total</h1>
            <h1 className="cart-subheader">${totalPrice}</h1>
          </div>
          <div className="summary">
            <h1 className="cart-subheader">grand total</h1>
            <h1 className="cart-subheader">${totalPrice}</h1>
          </div>
        </div>
        <Button type={'regular'} content={'proceed to checkout'} />
      </div>
    </div>
  );
};
const CartContent = function ({ id, shoeSize, activeImage, quantity }) {
  const { name, images, price } = sneakerData.find(
    sneaker => sneaker.id === id
  );
  const { incDecQuantity, removeFromCart } = useStateContext();
  return (
    <>
      <div className="cart-content">
        <div className="product-img-container">
          <img src={images[activeImage].img} alt="" />
        </div>
        <div className="product-detail doNotShowInMobile">
          <h1 className="product-name">{name}</h1>
        </div>
        <div className="product-detail">
          <h1 className="product-price">${price}</h1>
        </div>
        <div className="product-detail amount-container">
          <button
            className="bgLess"
            onClick={() => incDecQuantity(id, 'increase')}
          >
            <i className="fa-solid fa-plus cart-i"></i>
          </button>
          <p className="product-quantity-count">{quantity}</p>
          <button
            className="bgLess"
            onClick={() => incDecQuantity(id, 'decrease')}
          >
            <i className="fa-solid fa-minus cart-i"></i>
          </button>
        </div>
        <div className="product-detail">
          <button
            className="bgLess"
            onClick={() => removeFromCart(id, quantity, price)}
          >
            <i className="fa-solid fa-close cart-i"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default CartContentContainer;
