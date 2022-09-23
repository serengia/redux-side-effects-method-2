import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const show = useSelector((state) => state.ui.showCart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    const sendRequest = async () => {
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

    // Prevent sending an empty cart on initialization which will override any existing one
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendRequest();
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification?.status}
          title={notification?.title}
          message={notification?.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
