import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, name, price, quantity, itemTotalPrice } = props.item;

  const dispatch = useDispatch();

  const incrementItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };
  const decrementItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${itemTotalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementItemHandler}>-</button>
          <button onClick={incrementItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
