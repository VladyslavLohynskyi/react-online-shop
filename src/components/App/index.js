import Header from "../Header";
import Section from "../Section";
import { useState, useEffect } from "react";
import Cart from "../Cart";
import SuccessAlert from "../SuccessAlert";
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

  const onAddCart = (product) => {
    const exist = cartItems.find((el) => el.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((el) =>
          el.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : el
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemoveCart = (product) => {
    const exist = cartItems.find((el) => el.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((el) => el.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((el) =>
          el.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : el
        )
      );
    }
  };
  return (
    <div className="container">
      <Header
        onOpenCart={() => setShowCartModal(true)}
        cartItems={cartItems}
      ></Header>
      <Section id={"home"} onAddCart={onAddCart} />
      <Footer id={"contacts"} />
      <Cart
        showCartModal={showCartModal}
        onCloseCart={() => setShowCartModal(false)}
        cartItems={cartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
      <SuccessAlert />
    </div>
  );
}

export default App;
