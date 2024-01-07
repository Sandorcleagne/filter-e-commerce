import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/productData/productDataSlice";
export default configureStore({
  reducer: {
    product: ProductReducer,
  },
});
