import "./index.css";

const SuccessAlert = ({ show, onCloseSuccess }) => {
  if (!show) {
    return null;
  }

  const timer = setTimeout(() => onCloseSuccess(), 3000);
  function startTimer() {
    if (show) {
      return timer;
    }
  }
  startTimer();

  return (
    <div className="modalAlert" onClick={() => onCloseSuccess()}>
      <div
        className="modal-contentAlert"
        onClick={(e) => {
          e.stopPropagation();
          clearTimeout(timer);
        }}
      >
        <h3>Product added to cart</h3>
        <button onClick={() => onCloseSuccess()}>Close</button>
      </div>
    </div>
  );
};

export default SuccessAlert;
