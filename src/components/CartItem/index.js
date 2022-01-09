import "./index.css";
import { addCart, removeCart } from "../../actions";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

const mapDispatch = (dispatch) => {
  return {
    addCart: (product) => dispatch(addCart(product)),
    removeCart: (product) => dispatch(removeCart(product)),
  };
};

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

const CartItem = ({ el, addCart, removeCart }) => {
  return (
    <div className="cart-product">
      <p>{el.title}</p>
      <p>{el.price}</p>
      <p>{el.quantity}</p>
      <div>
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={() => addCart(el)}
        >
          <Icon disabled size="small" className="icon" name="plus" />
        </button>
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={() => removeCart(el)}
        >
          <Icon disabled size="small" className="icon" name="minus" />
        </button>
      </div>
    </div>
  );
};

export default connect(mapState, mapDispatch)(CartItem);
