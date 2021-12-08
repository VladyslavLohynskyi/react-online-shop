import Header from "../Header";
import Section from "../Section";
import { useState } from "react";
import Cart from "../Cart";
import "./index.css";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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
      <Section onAddCart={onAddCart} />
      <Cart
        showCartModal={showCartModal}
        onCloseCart={() => setShowCartModal(false)}
        cartItems={cartItems}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
    </div>
  );
}

export default App;
