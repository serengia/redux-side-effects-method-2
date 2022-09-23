import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              itemTotalPrice: item.itemTotalPrice,
            }}
          />
        ))}
        <li className={classes.total}>
          <div>Aggregate Quantity: {totalQuantity}</div>
          <div>Aggregate Price: {totalPrice.toFixed(2)}</div>
        </li>
      </ul>
    </Card>
  );
};

export default Cart;
