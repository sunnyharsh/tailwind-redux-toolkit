import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./../features/counter/counterSlice";
import addToCartReducer from "./../features/addToCart//addCartSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    // counter: counterReducer,
    addToCart: addToCartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
