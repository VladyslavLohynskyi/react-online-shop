import "./index.css";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = ({ className, onOpenCart, cartItems }) => {
  const countCartItems = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  const countCartPrice = cartItems
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
          cartItems.length === 0 ? "display-none cart-button" : "cart-button"
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

export default Navbar;
