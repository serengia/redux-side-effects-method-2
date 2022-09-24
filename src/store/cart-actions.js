import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const CART_API_ENDPOINT = "https://your-api-link/cart.json";

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const result = await fetch(CART_API_ENDPOINT);

      if (!result.ok) {
        throw new Error("Failed to fetch cart data.");
      }

      const data = await result.json();

      //   Replace cart data with the fetched data
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
          totalPrice: data.totalPrice,
        })
      );
      return data;
    } catch (error) {
      console.log(error);

      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Fetching request error",
          message: "There was an error in fetching cart data",
        })
      );
    }
  };
};

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

      const result = await fetch(CART_API_ENDPOINT, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
          totalPrice: cart.totalPrice,
        }),
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
