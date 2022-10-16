import React, { useState, useRef, useEffect } from 'react';
import { useStateContext } from '../context/stateContext';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/images/kicks logo.svg';

const Navbar = function () {
  const { totalCartQuantity } = useStateContext();
  const [isLink, setIsLink] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const navSearchForm = useRef(null);
  useEffect(() => {
    if (isSearch) {
      navSearchForm.current.focus();
    }
  });
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <ul className={`nav-links ${isLink ? 'active-links' : ''}`}>
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="nav-link">
              <Link to="/">About us</Link>
            </li>
            <li className="nav-link">
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <ul className="nav-icons">
            <li className="nav-icon">
              <button
                className="icon-container bgLess"
                onClick={() => setIsSearch(prevState => !prevState)}
              >
                <i className="fa-solid fa-magnifying-glass nav-icon-i"></i>
              </button>
            </li>
            <li className="nav-icon">
              <Link className="icon-container" to="/">
                <i className="fa-solid fa-user nav-icon-i"></i>
              </Link>
            </li>
            <li className="nav-icon">
              <Link className="icon-container" to="/cart">
                <div className="cart-container">
                  <i className="fa-solid fa-shopping-cart nav-icon-i"></i>
                  {totalCartQuantity > 0 ? (
                    <div className="item-count">
                      <p className="count-p">{totalCartQuantity}</p>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </Link>
            </li>
            <li className="nav-icon desktopNone">
              <button
                className="icon-container bgLess"
                id="nav-menu-btn"
                onClick={() => setIsLink(prevState => !prevState)}
              >
                <i className="fa-solid fa-bars nav-icon-i"></i>
              </button>
            </li>
          </ul>
          <div className={`search-container ${isSearch ? '' : 'displayNone'}`}>
            <button
              className="bgLess"
              onClick={() => setIsSearch(prevState => !prevState)}
            >
              <i className="fa-solid fa-arrow-left close-search"></i>
            </button>
            <form>
              <input
                ref={navSearchForm}
                className="nav-search-form"
                type="search"
                name="item"
                id="item-search"
                placeholder="Search Kicks"
              />
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
