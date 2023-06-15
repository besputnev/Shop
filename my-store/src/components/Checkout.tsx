import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../store/actions";
import { RootState } from "../store/types";

const Checkout: React.FC = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector((state: RootState) => state.cart.total);

  const handleCheckout = () => {
    dispatch(checkout());
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Thank you for your order!</p>
      <p>Total: ${cartTotal}</p>
      <button onClick={handleCheckout}>Finish</button>
    </div>
  );
};

export default Checkout;
