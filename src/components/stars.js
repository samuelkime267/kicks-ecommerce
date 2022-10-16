import React from 'react';
const Stars = function () {
  return (
    <div className="stars-holder">
      <button className="bgLess" data-stared-rating="1">
        <i className="fa-solid fa-star star-i"></i>
      </button>
      <button className="bgLess" data-stared-rating="2">
        <i className="fa-solid fa-star star-i"></i>
      </button>
      <button className="bgLess" data-stared-rating="3">
        <i className="fa-solid fa-star star-i"></i>
      </button>
      <button className="bgLess" data-stared-rating="4">
        <i className="fa-solid fa-star star-i"></i>
      </button>
      <button className="bgLess" data-stared-rating="5">
        <i className="fa-regular fa-star star-i not-stared"></i>
      </button>
    </div>
  );
};
export default Stars;
