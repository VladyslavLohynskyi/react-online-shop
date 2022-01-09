import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storeCart from "./store";

import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={storeCart}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
