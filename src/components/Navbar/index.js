import "./index.css";

const Navbar = ({ className, onOpenCart }) => {
  return (
    <ul className={className}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">contacts</a>
      </li>
      <li className="cart-button" onClick={() => onOpenCart()}>
        Cart
      </li>
    </ul>
  );
};

export default Navbar;
