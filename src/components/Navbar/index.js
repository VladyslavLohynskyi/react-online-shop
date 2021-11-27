import useWindowSize from "../hooks/useWindowSize";
import "./index.css";

const Navbar = ({ className }) => {
  const [width, hieght] = useWindowSize();
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
      <li>Cart</li>
    </ul>
  );
};

export default Navbar;
