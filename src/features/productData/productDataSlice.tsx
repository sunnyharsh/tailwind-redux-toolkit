import { createSlice } from "@reduxjs/toolkit";

interface ProductDataState {
  productsData: any;
}
const initialState: ProductDataState = {
  productsData: [],
};
export const productDataSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    productAdd: (state: any, action: any) => {
      state.productsData = action.payload;
    },
  },
});

export const { productAdd } = productDataSlice.actions;
export default productDataSlice.reducer;
