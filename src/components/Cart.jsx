import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice"; // Import the remove action
import Card from "./Card";


const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    // Dispatch REMOVE action
    dispatch(remove(id));
  };
  return (
    <>
      <h2 className="text-3xl sm:text-4xl mx-auto justify-center text-center mb-4 bg-orange-200 px-8 py-4 flex font-bold">Shopping Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            removeClick={() => removeFromCart(product.id)} // Pass removeClick handler
          />
        ))}
      </div>
    </>
  );
};
export default Cart