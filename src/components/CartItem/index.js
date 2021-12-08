import "./index.css";

import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

const CartItem = ({ el, onAddCart, onRemoveCart }) => {
  return (
    <div className="cart-product">
      <p>{el.title}</p>
      <p>{el.price}</p>
      <p>{el.quantity}</p>
      <div>
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={() => onAddCart(el)}
        >
          <Icon disabled size="small" className="icon" name="plus" />
        </button>
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={() => onRemoveCart(el)}
        >
          <Icon disabled size="small" className="icon" name="minus" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
