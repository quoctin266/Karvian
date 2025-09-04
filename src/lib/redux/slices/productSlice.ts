import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<IProduct>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.products.find((product) => product.id === payload.id)) return;

      state.products = [...state.products, payload];
    },
    removeProduct: (state, { payload }: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
