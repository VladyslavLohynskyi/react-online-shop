import Header from "../Header";
import Section from "../Section";
import { useState } from "react";
import Cart from "../Cart";
import "./index.css";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);
  return (
    <div className="container">
      <Header onOpenCart={() => setShowCartModal(true)}></Header>
      <Section />
      <Cart
        showCartModal={showCartModal}
        onCloseCart={() => setShowCartModal(false)}
      />
    </div>
  );
}

export default App;
