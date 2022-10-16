import React, { useState, useContext, createContext } from 'react';
import { sneakerData } from '../data/sneakerData';

const Context = createContext();

const StateContext = function ({ children }) {
  const [cartItems, SetCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalText, setModalText] = useState('');
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);
  const [isFilterContainer, setIsFilterContainer] = useState(false);

  const modalPopUp = function (modalText) {
    setModalText(modalText);
    setIsModalActive(true);
    setTimeout(function () {
      setIsModalActive(false);
    }, 1500);
  };
  const incDecQuantity = function (id, incDec) {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      SetCartItems(item =>
        item.map(item => {
          if (item.id === existingItem.id) {
            if (incDec === 'increase') {
              const currentQty = item.quantity + 1;
              const newPrice = totalPrice + item.price;
              setTotalPrice(newPrice);
              return {
                ...item,
                quantity: currentQty,
              };
            }
            if (incDec === 'decrease') {
              const currentQty = item.quantity - 1;
              if (currentQty > 0) {
                const newPrice = totalPrice - item.price;
                setTotalPrice(newPrice);
              }
              return {
                ...item,
                quantity: currentQty <= 0 ? 1 : currentQty,
              };
            }
          }
          return item;
        })
      );
    }
  };
  const addToCart = function (id, shoeSize, activeImage, price) {
    const existingItem = cartItems.find(item => item.id === id);
    if (shoeSize === 0) {
      modalPopUp('select size');
      return;
    }
    if (existingItem) {
      SetCartItems(item =>
        item.map(item => {
          if (item.id === existingItem.id) {
            const currentQty = item.quantity + 1;
            const newPrice = totalPrice + price;
            setTotalPrice(newPrice);
            return { ...item, quantity: currentQty };
          }
          return item;
        })
      );
    } else {
      SetCartItems([
        ...cartItems,
        { id, shoeSize, activeImage, quantity: 1, price },
      ]);
      setTotalPrice(prevPrice => prevPrice + price);
      setTotalCartQuantity(prevQuantity => prevQuantity + 1);
    }
    modalPopUp(`item added to cart`);
  };
  const removeFromCart = function (id, quantity, price) {
    SetCartItems(prevItem => {
      return prevItem.filter(item => item.id !== id);
    });
    setTotalCartQuantity(prevQty => prevQty - 1);
    const newPrice = totalPrice - price * quantity;
    setTotalPrice(newPrice);
  };
  const showFilterContainer = function () {
    setIsFilterContainer(prevState => !prevState);
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        isModalActive,
        addToCart,
        totalCartQuantity,
        modalText,
        incDecQuantity,
        removeFromCart,
        totalPrice,
        sneakerData,
        isFilterContainer,
        showFilterContainer,
      }}
    >
      {children}
    </Context.Provider>
  );
};
const useStateContext = () => useContext(Context);
export { StateContext, useStateContext };
