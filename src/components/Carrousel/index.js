import { useState } from "react";

import babyYoda from "../assets/baby-yoda.svg";
import girl from "../assets/girl.svg";

import "./index.css";
const Carrousel = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    <div>
      <h2>
        Welcome to <br /> Stickerz
      </h2>
      <h3>Best sticker in world</h3>
      <hr />
      <p>Buy with discount today</p>
      <button>Start shopping</button>
    </div>,
    <img src={babyYoda} />,
    <img src={girl} />,
  ];

  setTimeout(() => {
    if (current === slides.length - 1) {
      return setCurrent(0);
    }
    return setCurrent(current + 1);
  }, 5000);
  return (
    <div className="containerCarrousel">
      {slides.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && slide}
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
