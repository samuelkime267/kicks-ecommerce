import React from 'react';
const SubscribeToNewsLetter = function () {
  return (
    <>
      <section className="newsLetter">
        <div className="section-container">
          <h1 className="section-title">subscribe to our newsletter</h1>
          <p className="section-p">
            Join now to get the latest news and updates
          </p>
          <form className="subscribe-to-letter">
            <input
              type="email"
              placeholder="enter your email"
              className="sub-input"
            />
            <button className="atc-btn">
              <p className="atc-p">subscribe</p>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default SubscribeToNewsLetter;
