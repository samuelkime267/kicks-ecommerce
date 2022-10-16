import React from 'react';
import logo from '../assets/images/logo white.svg';
import facebook from '../assets/images/social-icons/icons8-facebook-100.png';
import twitter from '../assets/images/social-icons/icons8-twitter-100.png';
import instagram from '../assets/images/social-icons/instagram.svg';

const Footer = function () {
  return (
    <>
      <footer>
        <section className="footer">
          <div className="section-container">
            <div className="footer-links-container-holder">
              <div className="footer-links-container">
                <div className="company-details">
                  <a href="#">
                    <img src={logo} alt="" className="logo" />
                  </a>
                  <p className="company-info-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente eius cumque fuga debitis rem! Minima?
                  </p>
                </div>
              </div>
              <div className="footer-links-container">
                <h1 className="links-title">get help</h1>
                <div className="links-container">
                  <a href="#" className="link">
                    FAQ
                  </a>
                  <a href="#" className="link">
                    Shipping
                  </a>
                  <a href="#" className="link">
                    Payment methods
                  </a>
                  <a href="#" className="link">
                    contact us
                  </a>
                </div>
              </div>
              <div className="footer-links-container">
                <h1 className="links-title">about kicks</h1>
                <div className="links-container">
                  <a href="#" className="link">
                    about us
                  </a>
                  <a href="#" className="link">
                    careers
                  </a>
                  <a href="#" className="link">
                    investors
                  </a>
                  <a href="#" className="link">
                    purpose
                  </a>
                </div>
              </div>
              <div className="footer-links-container">
                <div className="links-container-socials">
                  <a href="#" className="link">
                    <img src={facebook} alt="" className="social-img" />
                  </a>
                  <a href="#" className="link">
                    <img src={twitter} alt="" className="social-img" />
                  </a>
                  <a href="#" className="link">
                    <img src={instagram} alt="" className="social-img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
