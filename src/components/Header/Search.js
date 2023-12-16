import React from "react";
import { FaSearch } from "react-icons/fa";


const Search = () => {
  return (
    <>
      <div className="input-holder bg-slate-100 flex items-center p-2 rounded-lg">
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent"
        />
        <FaSearch size={16} className="text-primary" />
      </div>
    </>
  );
};

export default Search;
