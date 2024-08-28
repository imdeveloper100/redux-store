  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

  const initialState = {
    data: [],
    status: 'idle', // to track the status of the async operation
    error: null,
  };

  // Thunk to fetch products
  export const getProducts = createAsyncThunk("products/get", async () => {
    const data = await fetch("https://fakestoreapi.in/api/products");
    const result = await data.json();
    // / You might need to check the format of `result` and return the correct data.
    return result.products; // Assuming the result has a 'products' array
  }) 
  
  const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      // fetchProducts(state, action) {
      //   state.data = action.payload;
      // },
    },
    extraReducers: (builder) => {
      builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // The fetched products are stored in the state
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    }
  });

  export const { fetchProducts } = productSlice.actions;
  export default productSlice.reducer;



  // export function getProducts() {
  //   return async function getProductsThunk(dispatch, getState) {
  //     const data = await fetch("https://fakestoreapi.in/api/products");
  //     const result = await data.json();

  //     // Access the 'products' array from the result
  //     if (result.status === "SUCCESS" && Array.isArray(result.products)) {
  //       dispatch(fetchProducts(result.products));
  //     } else {
  //       console.error("Unexpected API response format");
  //     }
  //   };
  // }
