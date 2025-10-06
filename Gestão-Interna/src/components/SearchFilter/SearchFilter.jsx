import React, { useState } from "react";
import "./SearchFilter.css";
import Lupa from "../../Assets/Lupa.svg";

function SearchFilter({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    onSearch(event.target.value);
  };
  
  return (
    <div className="Search">
      <input
        type="text"
        id="Text-Search"
        value={search}
        onChange={handleInputChange}
        placeholder="Search"
      />

      <button type="submit" aria-label="Buscar">
        <img src={Lupa} alt="Pesquisar" />
      </button>
    </div>
  );
}

export default SearchFilter;
