import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, checkout } from "../store/actions";
import { RootState, CartItem } from "../store/types";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.items);
  const total: number = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
            {cartItems.map((item) => (
              <div key={item.product.id}>
                {item.product.name} - ${item.product.price} x {item.quantity}
                <button onClick={() => handleRemoveFromCart(item.product.id)}>Remove</button>
              </div>
            ))}
          <p>Total: ${total}</p>
          <Link to="/checkout">Checkout</Link>
        </>
      )}
    </div>
  );
};

export default Cart;