import { createStore } from "redux";
import rootReducer from "./rootReducer";

const initialCartState = {
  сart: [],
};

const storeCart = createStore(rootReducer, initialCartState);

export default storeCart;
