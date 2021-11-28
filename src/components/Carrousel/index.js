import { useState, useEffect } from "react";

import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
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
    <img src="/assets/baby-yoda.svg" />,
    <img src="../assets/girl.svg" s />,
  ];

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
          style={{ cursor: "pointer", float: "right" }}
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
        <Icon
          disabled
          size="huge"
          style={{ cursor: "pointer" }}
          name="angle right"
        />
      </button>
    </div>
  );
};

export default Carrousel;
