export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }
  
  export interface CartState {
    items: CartItem[];
    total: number;
  }
  
  export interface RootState {
    cart: CartState;
  }
  
  export enum ActionTypes {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    CHECKOUT = "CHECKOUT",
  }