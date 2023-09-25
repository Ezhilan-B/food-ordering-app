import { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.OnAddToCart(enteredAmountNumber);

    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "amount" + props.id,
                    type: "number",
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button type="submit">+ Add</button>
            {!amountIsValid && <p>Please enter valid amount</p>}
        </form>
    )
}

export default MealForm;