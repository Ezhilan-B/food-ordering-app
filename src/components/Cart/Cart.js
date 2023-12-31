import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `Rs.${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {

    }

    const cartItemRemoveHandler = (item) => {

    }


    const CartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) =>
                <CartItem
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />)}
        </ul>
    )

    return (
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions} >
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button} >Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;