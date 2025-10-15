import React from "react";
import "./SearchFilter.css";
import Lupa from "../../Assets/Lupa.svg";

function SearchFilter({ onSearch, value, setValue }) {

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  
  const handleSubmitSearch = () => {
    onSearch(value);
  }

  const handleKeyPressSearch = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      handleSubmitSearch();
    }
  };

  return (
    <div className="Search">
      <input
        type="text"
        id="Text-Search"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyPressSearch}
        placeholder="Search"
      />

      <button type="submit" aria-label="Buscar" onClick={handleSubmitSearch}>
        <img src={Lupa} alt="Pesquisar" />
      </button>
    </div>
  );
}

export default SearchFilter;
