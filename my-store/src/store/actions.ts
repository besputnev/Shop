import { ActionTypes, Product } from "./types";

export const addToCart = (product: Product) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: { product },
});

export const removeFromCart = (productId: number) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: { productId },
});

export const checkout = () => ({
  type: ActionTypes.CHECKOUT,
});