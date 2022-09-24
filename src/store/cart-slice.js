import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    try {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending request request",
          message: "Request being sent to the server...",
        })
      );

      const result = await fetch("https://your-api-endpoint.com/oders.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!result.ok) {
        throw new Error("ERROR SENDING REQUEST🔥🔥🔥");
      }

      // When there is no error
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Send request successfully",
          message: "The request was sent successfully",
        })
      );
    } catch (error) {
      console.log(error);

      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error sending request",
          message: "There was an error in sending a request",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
