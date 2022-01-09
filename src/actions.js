export function addCart(product) {
  return { type: "ADD_ITEM", product };
}

export function removeCart(product) {
  return { type: "REMOVE_ITEM", product };
}

export function openCart() {
  return { type: "OPEN_CART" };
}

export function closeCart() {
  return { type: "CLOSE_CART" };
}
