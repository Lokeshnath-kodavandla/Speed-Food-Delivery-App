import React, { useState, useEffect } from "react";
import { API_URL } from "./api";
import { Link } from "react-router-dom";

const FirmCollections = () => {
  const [firmData, setFirmData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [activeCategory, setActiveCategory] = useState('all');

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(newFirmData.vendors);
    } catch (error) {
      alert("firm data not fetched");
      console.error("firm data not fetched", error);
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActiveCategory(category);
  };

  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">Restaurants with online food delivery in Hyderabad</h3>
      
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <button onClick={() => filterHandler("All", 'all')} className={`btn btn-outline-primary ${activeCategory === 'all' ? 'active' : ''}`}>All</button>
        <button onClick={() => filterHandler("South-Indian", 'south-indian')} className={`btn btn-outline-primary ${activeCategory === 'south-indian' ? 'active' : ''}`}>South-Indian</button>
        <button onClick={() => filterHandler("North-Indian", 'north-indian')} className={`btn btn-outline-primary ${activeCategory === 'north-indian' ? 'active' : ''}`}>North-Indian</button>
        <button onClick={() => filterHandler("Chinese", 'chinese')} className={`btn btn-outline-primary ${activeCategory === 'chinese' ? 'active' : ''}`}>Chinese</button>
        <button onClick={() => filterHandler("Bakery", 'bakery')} className={`btn btn-outline-primary ${activeCategory === 'bakery' ? 'active' : ''}`}>Bakery</button>
      </div>

      <div className="row g-4">
        {firmData.map((apple) => {
          return apple.firm.map((item) => {
            if (
              selectedRegion === "All" ||
              item.region.includes(selectedRegion.toLocaleLowerCase())
            ) {
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item._id}>
                  <Link to={`/products/${item._id}/${item.firmName}`} className="text-decoration-none text-dark">
                    <div className="card h-100 shadow-sm">
                      <div className="position-relative">
                        <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} className="card-img-top" />
                        <span className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 small">{item.offer}</span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{item.firmName}</h5>
                        <p className="card-text">
                          {item.region.join(", ")}<br />
                          {item.area}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
            return null;
          });
        })}
      </div>
    </div>
  );
};

export default FirmCollections;
