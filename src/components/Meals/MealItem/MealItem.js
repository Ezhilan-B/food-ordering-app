import { useContext } from "react";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

function MealItem(props) {

    const cartCtx = useContext(CartContext);

    const onAddToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        });
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>Rs. {props.price}</div>
            </div>
            <div>
                <MealForm OnAddToCart={onAddToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;