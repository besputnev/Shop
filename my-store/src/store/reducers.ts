import { ActionTypes, CartState } from "./types";

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const newItem = {
        product: action.payload.product,
        quantity: 1,
      };

      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.product.id === existingItem.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.product.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + action.payload.product.price,
        };
      }

    case ActionTypes.REMOVE_FROM_CART:
      const removedItem = state.items.find(
        (item) => item.product.id === action.payload.productId
      );

      if (removedItem) {
        if (removedItem.quantity > 1) {
          const updatedItems = state.items.map((item) =>
            item.product.id === removedItem.product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );

          return {
            ...state,
            items: updatedItems,
            total: state.total - removedItem.product.price,
          };
        } else {
          const updatedItems = state.items.filter(
            (item) => item.product.id !== removedItem.product.id
          );

          return {
            ...state,
            items: updatedItems,
            total: state.total - removedItem.product.price,
          };
        }
      }

      return state;

    case ActionTypes.CHECKOUT:
      return initialState;

    default:
      return state;
  }
};