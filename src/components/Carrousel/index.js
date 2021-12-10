import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import "./index.css";
const Carrousel = ({ main, product }) => {
  const [current, setCurrent] = useState(0);

  let slides = [
    <div>
      <h2>
        Welcome to <br /> Stickerz
      </h2>
      <h3>Best sticker in world</h3>
      <hr />
      <p>Buy with discount today</p>
      <button>
        <Link to="/#products">Start shopping</Link>
      </button>
    </div>,
    <img
      src={process.env.PUBLIC_URL + "/assets/baby-yoda.svg"}
      alt="Baby Yoda"
    />,
    <img src={process.env.PUBLIC_URL + "/assets/girl.svg"} alt="Girl" />,
  ];
  if (!main) {
    slides = product.additionalImages.map((el) => <img src={el} alt="Cats" />);
  }

  const nextSlider = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const prevSlider = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      current === slides.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    }, 5000);
    return () => clearInterval(timer);
  });

  return (
    <div className="containerCarrousel">
      <button
        style={{ border: "none", backgroundColor: "transparent" }}
        onClick={prevSlider}
      >
        <Icon
          disabled
          size="huge"
          style={{ float: "right" }}
          className="icon"
          name="angle left"
        />
      </button>
      {slides.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && slide}
        </div>
      ))}
      <button
        style={{ border: "none", backgroundColor: "transparent" }}
        onClick={nextSlider}
      >
        <Icon disabled size="huge" className="icon" name="angle right" />
      </button>
    </div>
  );
};

export default Carrousel;
