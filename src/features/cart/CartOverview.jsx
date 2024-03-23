import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-teal-800 text-white">
      <p className="font-semibold text-white">
        <span>23 pizzas </span>
        <span>$23.45</span>
      </p>

      <Link to="/cart" className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
