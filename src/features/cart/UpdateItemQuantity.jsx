import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../../ui/Buttons";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2">
      <Buttons
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Buttons>
      <p>{currentQuantity}</p>
      <Buttons
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Buttons>
    </div>
  );
}

export default UpdateItemQuantity;
