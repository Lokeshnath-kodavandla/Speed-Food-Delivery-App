import React, { useState, useEffect } from "react";
import { API_URL } from "./api";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Ft";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { firmId, firmName } = useParams();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductData = await response.json();
      setProducts(newProductData.products);
    } catch (error) {
      console.error("Product fetch failed", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="mb-4 text-center fw-bold text-danger">{firmName}</h2>
        <div className="row g-4">
          {products.map((item) => (
            <div className="col-md-6 col-lg-4" key={item._id}>
              <div className="card shadow-sm h-100 border-2 border-black">
                <img
                  src={`${API_URL}/uploads/${item.image}`}
                  className="card-img-top"
                  alt={item.productName}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-semibold">{item.productName}</h5>
                  <p className="card-text text-muted mb-2">{item.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="text-success fw-bold">₹{item.price}</span>
                    <button className="btn btn-outline-danger btn-sm">ADD</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductMenu;
