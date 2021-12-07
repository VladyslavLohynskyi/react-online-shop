import { useState, useEffect } from "react";

import "./index.css";
import useWindowSize from "../hooks/useWindowSize";
import data from "../../products.json";

const Products = () => {
  const width = useWindowSize()[0];
  const [buttonValue, setButtonValue] = useState({
    ascending: false,
    descending: false,
  });
  const [productList, setProductList] = useState([]);
  const [sortedProductList, setSortedProductList] = useState([]);
  useEffect(() => setProductList([...data]), []);

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
  const defaultProduct = (product) => (
    <div key={product.id} className="product-card">
      <img src={process.env.PUBLIC_URL + product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="card-buttons">
          <button className="button-info">Info</button>
          <button className="button-buy">${product.price} - buy</button>
        </div>
      </div>
    </div>
  );
  const sortAscendingButton = () => {
    setButtonValue({ ascending: true, descending: false });
    setSortedProductList(
      productList.concat().sort((a, b) => a.price - b.price)
    );
  };

  const sortDescendingButton = () => {
    setButtonValue({ ascending: false, descending: true });
    setSortedProductList(
      productList.concat().sort((a, b) => b.price - a.price)
    );
  };

  const outputProducts = () => {
    if (buttonValue.ascending === true && buttonValue.descending === false) {
      return sortedProductList.map((product) => defaultProduct(product));
    }
    if (buttonValue.ascending === false && buttonValue.descending === true) {
      return sortedProductList.map((product) => defaultProduct(product));
    }
    return productList.map((product) => defaultProduct(product));
  };

  return (
    <div>
      <h3>Products</h3>
      <div>
        <button onClick={sortAscendingButton}>Ascending button</button>
        <button onClick={sortDescendingButton}>Descending button</button>
        <input type="text" />
      </div>
      <div className={`product-list${currentGrid()}`}>{outputProducts()}</div>
    </div>
  );
};

export default Products;
