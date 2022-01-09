import "./index.css";
import Modal from "../Modal";
import SuccessAlert from "../SuccessAlert";
import { useState } from "react";
import { addCart } from "../../actions";
import { connect } from "react-redux";

const mapDispatch = (dispatch) => {
  return {
    addCart: (product) => dispatch(addCart(product)),
  };
};

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

const Product = ({ product, addCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  return (
    <div>
      <div className="product-card">
        <img src={process.env.PUBLIC_URL + product.image} alt={product.title} />
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className="card-buttons">
            <button className="button-info" onClick={() => setShowModal(true)}>
              Info
            </button>
            <button
              className="button-buy"
              onClick={() => {
                addCart(product);
                setShowSuccessModal(true);
              }}
            >
              ${product.price} - buy
            </button>
          </div>
        </div>
      </div>
      <Modal
        product={product}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
      <SuccessAlert
        show={showSuccessModal}
        onCloseSuccess={() => setShowSuccessModal(false)}
      />
    </div>
  );
};

export default connect(mapState, mapDispatch)(Product);
