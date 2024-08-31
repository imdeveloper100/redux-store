import { createSlice } from "@reduxjs/toolkit";

// Function to load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error("Could not load cart from localStorage", error);
    return [];
  }
};

// Function to save cart to localStorage
const saveCartToLocalStorage = (state) => {
  try {
    const serializedCart = JSON.stringify(state);
    localStorage.setItem('cart', serializedCart);
  } catch (error) {
    console.error("Could not save cart to localStorage", error);
  }
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
      saveCartToLocalStorage(state); // Save updated state to localStorage
    },
    remove(state, action) {
      const updatedCart = state.filter(product => product.id !== action.payload);
      saveCartToLocalStorage(updatedCart); // Save updated state to localStorage
      return updatedCart;
    },
    clearCart(state) {
      localStorage.removeItem('cart'); // Clear cart from localStorage
      return []; // Reset Redux state to an empty cart
    }
    
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
