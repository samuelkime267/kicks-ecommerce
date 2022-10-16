import React from 'react';
import { useStateContext } from '../context/stateContext';

const ShopFilterContainer = function () {
  const { showFilterContainer, isFilterContainer } = useStateContext();
  return (
    <div
      className={`filter-container-main ${
        isFilterContainer ? '' : 'hiddenMobile'
      }`}
    >
      <div className="filter-container">
        <h1 className="filter-container-title">categories</h1>
        <button
          className="bgLess close-btn ShowInMobile"
          onClick={showFilterContainer}
        >
          <i className="fa-solid fa-close close-btn-i"></i>
        </button>
        <div className="filter-container-content">
          <button className="category-btn bgLess active-filter">
            <p>lifestyle(20)</p>
          </button>
          <button className="category-btn bgLess">
            <p>football(20)</p>
          </button>
          <button className="category-btn bgLess">
            <p>basketball(20)</p>
          </button>
          <button className="category-btn bgLess">
            <p>golf(20)</p>
          </button>
        </div>
      </div>
      <div className="filter-container">
        <h1 className="filter-container-title">size</h1>
        <div className="filter-container-content color-container">
          <button className="size-btn">30</button>
          <button className="size-btn">31</button>
          <button className="size-btn">32</button>
          <button className="size-btn">33</button>
          <button className="size-btn">34</button>
          <button className="size-btn">35</button>
          <button className="size-btn">36</button>
          <button className="size-btn">37</button>
          <button className="size-btn">38</button>
          <button className="size-btn">39</button>
          <button className="size-btn">40</button>
        </div>
      </div>
      <div className="filter-container">
        <h1 className="filter-container-title">color</h1>
        <div className="filter-container-content color-container">
          <button
            className="color-selector"
            style={{ backgroundColor: 'red' }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: 'blue' }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: 'green' }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: 'black' }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: 'gray' }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: 'peru' }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: 'white' }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: 'purple' }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: 'yellow' }}
          ></button>
          <button
            className="color-selector"
            style={{ backgroundColor: 'rgb(1,80,90)' }}
          ></button>
        </div>
      </div>
    </div>
  );
};
export default ShopFilterContainer;
