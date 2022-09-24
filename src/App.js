import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sendCartData } from "./store/cart-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const show = useSelector((state) => state.ui.showCart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    // Prevent sending an empty cart on initialization which will override any existing one
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData(cart);
  }, [cart]);

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
