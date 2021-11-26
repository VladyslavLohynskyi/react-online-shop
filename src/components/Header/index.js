import "./index.css";

const Header = () => {
  return (
    <div class="header">
      <h1>Stickerz</h1>
      <nav>
        <ul className="navbar">
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
        <div>
          <div class="burger"></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
