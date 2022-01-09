import "./index.css";
import CartItem from "../CartItem";
import { addCart, removeCart } from "../../actions";
import { connect } from "react-redux";
const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addCart: (product) => dispatch(addCart(product)),
    removeCart: (product) => dispatch(removeCart(product)),
  };
};

const Cart = ({ showCartModal, onCloseCart, cart }) => {
  const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  return (
    <div
      className={!showCartModal ? "display-none modal" : "modal"}
      onClick={onCloseCart}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Cart</h4>
          <button onClick={onCloseCart}>Close</button>
        </div>
        <div className="cart-body">
          <div className="cart-products">
            <div className="title-cart">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p />
            </div>
            <div className="cart-product-list">
              {cart.map((el) => (
                <CartItem key={el.id} el={el} />
              ))}
            </div>
            <div className="total">Total ${total.toFixed(2)}</div>
          </div>
          <form className="cart-form">
            <label htmlFor="name">Your name:</label>
            <input type="text" id="name" />
            <label htmlFor="email">Your email:</label>
            <input type="text" id="email" />
          </form>
        </div>
        <div className="cart-footer">
          <button onClick={onCloseCart}>Close</button>
          <button onClick={onCloseCart}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapState, mapDispatch)(Cart);
