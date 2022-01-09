import Header from "../Header";
import Section from "../Section";
import Cart from "../Cart";

import "./index.css";
import Footer from "../Footer";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Section id={"home"} />
      <Footer id={"contacts"} />
      <Cart />
    </div>
  );
}

export default App;
