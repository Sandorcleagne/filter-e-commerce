import { createSlice } from "@reduxjs/toolkit";
export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    value: [],
  },
  reducers: {
    product: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { product } = ProductSlice.actions;

export default ProductSlice.reducer;
