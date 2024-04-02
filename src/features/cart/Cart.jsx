import LinkButton from "../../ui/LinkButton";
import Buttons from "../../ui/Buttons";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCart } from "./cartSlice";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-6 text-xl font-semibold">Your cart, {username}</h2>
      <ul className=" my-2 divide-y divide-stone-300 border-b border-stone-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Buttons type="primary" to="/order/new">
          Order pizzas
        </Buttons>
        <Buttons onClick={() => dispatch(clearItem())} type="secondary">
          Clear cart
        </Buttons>
      </div>
    </div>
  );
}

export default Cart;
