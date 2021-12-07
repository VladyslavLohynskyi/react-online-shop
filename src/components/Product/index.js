import "./index.css";
import Modal from "../Modal";
import { useState, useEffect, useMemo } from "react";

const Product = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div key={product.id} className="product-card">
        <img src={process.env.PUBLIC_URL + product.image} alt={product.title} />
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="card-buttons">
            <button className="button-info" onClick={() => setShowModal(true)}>
              Info
            </button>
            <button className="button-buy">${product.price} - buy</button>
          </div>
        </div>
      </div>
      <Modal
        product={product}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Product;
