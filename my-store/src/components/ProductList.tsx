import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions";
import { Product } from "../store/types";

const ProductList: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;