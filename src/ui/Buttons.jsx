import React from "react";
import { Link } from "react-router-dom";

function Buttons({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-teal-800 text-sm font-semibold uppercase tracking-wide text-white hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-800 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const style = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 text-xs md:px-5 md:py-2.5",
    round: base + " px-2.5 py-1 sm:px-3 sm:py-2",
    secondary:
      "inline-block rounded-full bg-transparent border-2 border-stone-300 text-sm font-semibold uppercase tracking-wider text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 ",
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={style[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Buttons;
