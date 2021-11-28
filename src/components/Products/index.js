import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import useWindowSize from "../hooks/useWindowSize";

const Products = () => {
  const width = useWindowSize()[0];
  const [productList, setProductList] = useState([]);
  useEffect(
    () => async () => await showProductList(),
    [productList, setProductList]
  );
  const showProductList = () =>
    axios
      .get("./products.json")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      }, []);
  const currentGrid = () => {
    if (width <= 574) {
      return 1;
    }
    if (width > 574 && width <= 751) {
      return 2;
    }
    if (width > 751 && width <= 993) {
      return 3;
    }
    return 4;
  };

  return (
    <div>
      <h3>Products</h3>
      <div>
        <button>Filter1</button>
        <button>Filter2</button>
        <input type="text" />
      </div>
      <div className={`product-list${currentGrid()}`}>
        {productList.map((el) => (
          <div key={el.id} className="product-card">
            <img src={el.image} alt={el.title} />
            <div>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <div className="card-buttons">
                <button className="button-info">Info</button>
                <button className="button-buy">${el.price} - buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
