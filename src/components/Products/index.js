import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const Products = () => {
  const [productList, setProductList] = useState([]);
  useEffect(async () => await showProductList(), [productList, setProductList]);
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

  return (
    <div>
      <h3>Products</h3>
      <div>
        <button>Filter1</button>
        <button>Filter2</button>
        <input type="text" />
      </div>
      <div className="product-list">
        {productList.map((el) => (
          <div key={el.id} className="product-card">
            <img src={el.image} alt={el.title} />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <button>Info</button>
            <button>{el.price}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
