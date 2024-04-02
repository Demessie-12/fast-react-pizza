import { useDispatch, useSelector } from "react-redux";
import Buttons from "../../ui/Buttons";
import { formatCurrency } from "../../utility/helpers";
import { addToCart, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addToCart(newItem));
  }
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;
  // console.log(pizza);

  return (
    <li className="flex  gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity=70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-red-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex gap-3 sm:gap-5">
              <UpdateItemQuantity pizzaId={id} quantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Buttons onClick={handleAddToCart} type="small">
              Add to cart
            </Buttons>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
