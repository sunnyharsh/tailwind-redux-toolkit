import { createSlice } from "@reduxjs/toolkit";

interface AddToCartState {
  products: any;
}
const initialState: AddToCartState = {
  products: [],
};
export const addToCartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      state.products = action.payload;
    },
  },
});

export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
