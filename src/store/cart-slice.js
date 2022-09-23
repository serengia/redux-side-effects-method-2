import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.itemTotalPrice += action.payload.price;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          itemTotalPrice: action.payload.price,
          quantity: 1,
        });
      }

      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },

    removeItemFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      // By the fact that we can remove an item, means it exist
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
        existingItem.itemTotalPrice -= existingItem.price;
      }

      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
