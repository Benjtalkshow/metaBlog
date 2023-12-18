import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { db } from "../../firebase/firebase";

const Search = () => {
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = async (e, searchTerm) => {
    e.preventDefault();
    setSearchTerm(searchTerm);
    const collection_ref = collection(db, 'posts')
    const q = query(collection_ref, where("title", ">=", `${searchTerm}`))
    const doc_refs = await getDocs(q)
    const res = []
    doc_refs.forEach(country => {
      res.push({
          id: country.id, 
          ...country.data()
      })
    })
  
    setResult(res)
    console.log(result);
  };
  return (
    <>
      <div className="input-holder bg-slate-100 flex items-center p-2 rounded-lg">
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch size={16} className="text-primary" />
      </div>
    </>
  );
};

export default Search;
