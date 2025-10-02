import React, {useState, useEffect, useCallback} from "react";
import "./SearchFilter.css";
import {debounce} from "lodash";
import Lupa from "../../Assets/Lupa.svg"


function SearchFilter() {

    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState('');

    
    const debouncedSet = useCallback(
        debounce((text) => setSearchResult(text), 500),
        []
    );

    useEffect(() => {
        return () => debouncedSet.cancel();
    }, [debouncedSet]);
    

    function handleOnChange(event) {
        setQuery(event.target.value);
        debouncedSet(event.target.value.trim());
    };

    
    return (
        <div className="Search">
            <input type="text"
             id="Text-Search" 
             value={query}
             onChange={handleOnChange} 
             placeholder="Search"/>

            <button type="submit" aria-label="Buscar">
                <img src={Lupa} alt="Pesquisar" />
            </button>

        </div>
    );
}

export default SearchFilter;