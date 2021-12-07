import { useState, useEffect, useMemo } from "react";

import "./index.css";
import useWindowSize from "../hooks/useWindowSize";
import data from "../../products.json";
import debounce from "lodash.debounce";

const Products = () => {
  const width = useWindowSize()[0];
  const [buttonValue, setButtonValue] = useState({
    ascending: false,
    descending: false,
    input: false,
  });
  const [inputValue, setInputValue] = useState("");
  const [searchInputs, setSearchInputs] = useState([]);
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

  useEffect(() => {
    if (inputValue !== "") {
      setSearchInputs(
        productList.filter((el) => {
          return el.title.toLowerCase().includes(inputValue.toLowerCase());
        })
      );
    }
  }, [inputValue]);

  const changeHandler = (event) => {
    if (event.target.value.length > 2) {
      setButtonValue({
        ascending: false,
        descending: false,
        input: true,
      });
      setInputValue(event.target.value);
    }
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 1000),
    []
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

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
    setButtonValue({ ascending: true, descending: false, input: false });
    setSortedProductList(
      productList.concat().sort((a, b) => a.price - b.price)
    );
  };

  const sortDescendingButton = () => {
    setButtonValue({ ascending: false, descending: true, input: false });
    setSortedProductList(
      productList.concat().sort((a, b) => b.price - a.price)
    );
  };

  const outputProducts = () => {
    if (
      buttonValue.ascending &&
      !buttonValue.descending &&
      !buttonValue.input
    ) {
      return sortedProductList.map((product) => defaultProduct(product));
    }
    if (
      !buttonValue.ascending &&
      buttonValue.descending &&
      !buttonValue.input
    ) {
      return sortedProductList.map((product) => defaultProduct(product));
    }
    if (
      !buttonValue.ascending &&
      !buttonValue.descending &&
      buttonValue.input
    ) {
      return searchInputs.map((product) => defaultProduct(product));
    }
    return productList.map((product) => defaultProduct(product));
  };

  return (
    <div>
      <h3>Products</h3>
      <div>
        <button onClick={sortAscendingButton}>Ascending button</button>
        <button onClick={sortDescendingButton}>Descending button</button>
        <input type="text" onChange={debouncedChangeHandler} />
      </div>
      <div className={`product-list${currentGrid()}`}>{outputProducts()}</div>
    </div>
  );
};

export default Products;
