import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utility/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-teal-800 p-4 text-sm text-white sm:px-6 md:text-base">
      <p className="space-x-3 font-semibold text-white sm:space-x-5">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>

      <Link to="/cart" className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
