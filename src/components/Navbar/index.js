import "./index.css";
import { HashLink as Link } from "react-router-hash-link";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

const Navbar = ({ className, onOpenCart, cart }) => {
  const countCartItems = cart.reduce((acc, cur) => acc + cur.quantity, 0);

  const countCartPrice = cart
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return (
    <ul className={className}>
      <li>
        <Link to="/#home">Home</Link>
      </li>
      <li>
        <Link to="/#products">Products</Link>
      </li>
      <li>
        <Link to="/#contacts">Contacts</Link>
      </li>
      <li
        className={
          cart.length === 0 ? "display-none cart-button" : "cart-button"
        }
        onClick={() => onOpenCart()}
      >
        Cart{" "}
        <div className="cart-badget">
          {countCartItems + "   $" + countCartPrice}
        </div>
      </li>
    </ul>
  );
};

export default connect(mapState)(Navbar);
