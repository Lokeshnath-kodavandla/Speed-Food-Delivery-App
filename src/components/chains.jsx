import React, { useState, useEffect } from 'react';
import { API_URL } from './api';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [loading, setLoading] = useState(true);

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors?order=desc`);
      const newData = await response.json();
      setVendorData(newData);
      console.log("API Data:", newData);
      setLoading(false);
    } catch (error) {
      alert("Failed to fetch data");
      console.error("Fetch error:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;
    gallery.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="container py-5">
      {loading ? (
        <div className="text-center">
          <p className="h5 mb-3">Your 🥣 is Loading...</p>
          <ClipLoader color="#e15b64" loading={loading} size={50} />
        </div>
      ) : (
        <>
          <h3 className="text-center mb-4">Top restaurant chains in Hyderabad</h3>

          <div className="d-flex justify-content-end mb-3">
            <button onClick={() => handleScroll("left")} className="btn btn-outline-secondary me-2">
              <FaRegArrowAltCircleLeft size={24} />
            </button>
            <button onClick={() => handleScroll("right")} className="btn btn-outline-secondary">
              <FaRegArrowAltCircleRight size={24} />
            </button>
          </div>

          <div id="chainGallery" className="d-flex overflow-auto gap-3 pb-2">
            {vendorData.vendors && vendorData.vendors.map((vendor, index) => (
              <div key={index} className="d-flex gap-3">
                {vendor.firm.map((item) => (
                  <Link to={`/products/${item._id}/${item.firmName}`} key={item._id} className="text-decoration-none text-dark">
                    <div className="card" style={{ minWidth: '16rem' }}>
                      <img
                        src={`${API_URL}/uploads/${item.image}`}
                        alt={item.firmName}
                        className="card-img-top"
                        style={{ height: '180px', objectFit: 'cover' }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title mb-1">{item.firmName}</h5>
                        <p className="card-text text-muted">Explore Dishes</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Chains;
