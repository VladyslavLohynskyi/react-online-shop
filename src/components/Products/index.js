import { useState, useEffect, useMemo } from "react";
import Product from "../Product";

import "./index.css";
import useWindowSize from "../hooks/useWindowSize";
import data from "../../products.json";
import debounce from "lodash.debounce";

const Products = ({ onAddCart }) => {
  const width = useWindowSize()[0];
  const [inputValue, setInputValue] = useState("");
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
      setSortedProductList(
        productList.filter((el) => {
          return el.title.toLowerCase().includes(inputValue.toLowerCase());
        })
      );
    }
  }, [inputValue, productList]);

  const changeHandler = (event) => {
    if (event.target.value.length > 2) {
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
  }, [debouncedChangeHandler]);

  const sortAscendingButton = () => {
    setSortedProductList(
      productList.concat().sort((a, b) => a.price - b.price)
    );
  };

  const sortDescendingButton = () => {
    setSortedProductList(
      productList.concat().sort((a, b) => b.price - a.price)
    );
  };

  const outputProducts = () => {
    if (sortedProductList.length > 0) {
      return sortedProductList;
    }
    return productList;
  };

  return (
    <div id={"products"}>
      <h3>Products</h3>
      <div>
        <button onClick={sortAscendingButton}>Ascending button</button>
        <button onClick={sortDescendingButton}>Descending button</button>
        <input type="text" onChange={debouncedChangeHandler} />
      </div>
      <div className={`product-list${currentGrid()}`}>
        {outputProducts().map((product) => (
          <Product onAddCart={onAddCart} key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
