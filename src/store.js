import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const initialStore = {
  cart: [],
  showCart: false,
};
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const storeCart = createStore(persistedReducer, initialStore);

export const persistor = persistStore(storeCart);

export default storeCart;
