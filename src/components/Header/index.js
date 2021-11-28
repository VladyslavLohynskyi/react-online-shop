import "./index.css";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Navbar from "../Navbar";

const Header = () => {
  const [click, setClick] = useState(false);
  const width = useWindowSize()[0];
  const handleClickBurger = () => {
    click ? setClick(false) : setClick(true);
  };
  return (
    <div className="header-burger-nav">
      <div class="header">
        <h1>Stickerz</h1>
        <nav>
          {width > 720 ? <Navbar className="navbar-standart" /> : null}
          <div className="box" onClick={handleClickBurger}>
            <div className="burger"></div>
          </div>
        </nav>
      </div>
      {width <= 720 && click ? <Navbar className="navbar-burger" /> : null}
    </div>
  );
};

export default Header;
