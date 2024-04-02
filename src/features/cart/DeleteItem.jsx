import React from "react";
import Buttons from "../../ui/Buttons";
import { useDispatch } from "react-redux";
import { deleteToCart } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Buttons onClick={() => dispatch(deleteToCart(pizzaId))} type="small">
      Delete
    </Buttons>
  );
}

export default DeleteItem;
