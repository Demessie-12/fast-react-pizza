import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-44 rounded-full bg-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 placeholder:font-semibold placeholder:text-white focus:outline-none focus:ring focus:ring-teal-600 focus:ring-opacity-50 focus:ring-offset-2 sm:focus:w-52"
      />
    </form>
  );
}

export default SearchOrder;
