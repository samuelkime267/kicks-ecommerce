import React from 'react';
import Button from './button';

const Galley = function () {
  return (
    <>
      <section className="show-case">
        <div className="section-container">
          <h1 className="section-title">We've got something for everyone</h1>
          <div className="showcase-container">
            <div className="showcase-holder">
              <div className="showcase-img-container">
                <img src="./images/sneaker and basketball.jpg" alt="" />
              </div>
              <div className="show-case-text">
                <p className="showcase-p">let's get sporty</p>
                <Button type={'regular'} content={'shop'} />
              </div>
            </div>
            <div className="showcase-holder">
              <div className="showcase-img-container">
                <img src="./images/shoe on wood.jpg" alt="" />
              </div>
              <div className="show-case-text">
                <p className="showcase-p">get the best look</p>
                <Button type={'regular'} content={'shop'} />
              </div>
            </div>
            <div className="showcase-holder">
              <div className="showcase-img-container">
                <img src="./images/shoe on snow.jpg" alt="" />
              </div>
              <div className="show-case-text">
                <p className="showcase-p">winter is not a problem</p>
                <button className="atc-btn">
                  <p className="atc-p">shop</p>
                </button>
              </div>
            </div>
            <div className="showcase-holder">
              <div className="showcase-img-container">
                <img src="./images/shoe with reflection.jpg" alt="" />
              </div>
              <div className="show-case-text">
                <p className="showcase-p">we the flyest</p>
                <Button type={'regular'} content={'shop'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Galley;
