import { combineReducers } from "redux";

function cartReducer(state = [], action) {
  const { product } = action;
  switch (action.type) {
    case "ADD_ITEM": {
      const exist = state.find((el) => el.id === product.id);
      if (exist) {
        return state.map((el) =>
          el.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : el
        );
      } else {
        return state.concat({ ...product, quantity: 1 });
      }
    }
    case "REMOVE_ITEM": {
      const exist = state.find((el) => el.id === product.id);
      if (exist.quantity === 1) {
        return state.filter((el) => el.id !== product.id);
      } else {
        return state.map((el) =>
          el.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : el
        );
      }
    }
    default:
      return state;
  }
}

export default combineReducers({
  cart: cartReducer,
});
