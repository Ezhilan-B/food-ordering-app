import { Fragment } from "react";
import classes from "./Header.module.css";
import MealsImg from "../../assets/meals.jpg"
import CartButton from "./CartButton";

function Header(props) {
    return(
        <Fragment>
            <header className={classes.header} >
                <h1>Food Ordering App</h1>
                <CartButton onClick={props.onCartClick} />
            </header>
            <div className={classes["main-image"]}>
                <img src={MealsImg} alt="delicious food in table" />
            </div>
        </Fragment>
    )
}

export default Header;