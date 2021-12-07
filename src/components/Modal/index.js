import "./index.css";
import Carrousel from "../Carrousel";
const Modal = ({ product, show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Product info</h4>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="modal-body">
          {" "}
          <Carrousel main={false} product={product} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
