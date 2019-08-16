import React from "react";
import Aux from "../../../higherOrderComponent/Auxilary";
import Button from "../../UI/Button/Button";
const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredient</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price to be paid:${props.price.toFixed(2)}</strong>
      </p>
      <p>Contiue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};
export default orderSummary;
