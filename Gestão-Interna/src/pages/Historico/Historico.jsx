import { _useState } from "react";
import React from "react";
import "./Historico.css";
import SearchFilter from "../../components/SearchFilter/SearchFilter";

function Historico() {

  return (
    <div className="search-bar-container">
      <div className="search-filter"><SearchFilter /></div>
      <div className="search-results">
        {/* só pra enxergar o bloco agora */}
        <div className="results-header">
          <span>Nome</span>
          <span>E-mail</span>
          <span>Telefone</span>
          <span>ID da conta</span>
          <span>Status</span>
        </div>
        
          <div className="results-row">
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
          </div>

      </div>
    </div>
  );
}

export default Historico;
