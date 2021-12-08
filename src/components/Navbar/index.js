import "./index.css";

const Navbar = ({ className, onOpenCart, cartItems }) => {
  const countCartItems = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  const countCartPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
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
