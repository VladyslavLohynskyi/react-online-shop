import Header from "../Header";
import Section from "../Section";
import { useState, useEffect } from "react";
import Cart from "../Cart";

import "./index.css";
import Footer from "../Footer";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getLocalStorage();
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getLocalStorage = () => {
    if (localStorage.getItem("cartItems") === null) {
      localStorage.setItem("cartItems", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("cartItems"));
      setCartItems(todoLocal);
    }
  };

  return (
    <div className="container">
      <Header onOpenCart={() => setShowCartModal(true)}></Header>
      <Section id={"home"} />
      <Footer id={"contacts"} />
      <Cart
        showCartModal={showCartModal}
        onCloseCart={() => setShowCartModal(false)}
      />
    </div>
  );
}

export default App;
