import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
    const {data: products} = useSelector(state => state.products) // the products is coming from the store {products: productSlice,}
  useEffect(() => {
    // Dispatch an action for fetchProducts
    dispatch(getProducts());
    // API
    // fetch("https://fakestoreapi.in/api/products")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     // Access the 'products' array from the result
    //     if (result.status === "SUCCESS" && Array.isArray(result.products)) {
    //       setProducts(result.products);
    //     } else {
    //       console.error("Unexpected API response format");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data: " + error);
    //   });
  }, []);

  const addToCart = (product) => {
    // dispatch an ADD action
    console.log("Adding product to cart:", product); // Debugging
    dispatch(add(product));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          onClick={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default Product;
