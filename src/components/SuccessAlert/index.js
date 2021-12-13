import "./index.css";

const SuccessAlert = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modalAlert">
      <div className="modal-contentAlert" onClick={(e) => e.stopPropagation()}>
        <h3>Product added to cart</h3>
        <button>Close</button>
      </div>
    </div>
  );
};

export default SuccessAlert;
