import React, { useState } from 'react';
import { itemData } from '../components/data';
import './Displayitems.css';

const Displayitems = () => {
  const [displayItem] = useState(itemData);

  return (
    <div className="container-fluid py-5 zomato-bg">
      <h2 className="text-center mb-5 text-white fw-bold display-5">Trending Picks</h2>
      <div className="row g-4 justify-content-center">
        {displayItem.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="card h-100 border-0 zomato-card shadow-lg">
              <img
                src={item.item_img}
                alt={`item-${index}`}
                className="card-img-top rounded-top"
                style={{ height: '245px', objectFit: 'cover' }}
              />
              <div className="card-body text-center bg-light rounded-bottom">
                <h5 className="card-title text-danger-emphasis fw-semibold">Delicious!</h5>
                <button className="btn btn-danger btn-sm mt-2">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Displayitems;


