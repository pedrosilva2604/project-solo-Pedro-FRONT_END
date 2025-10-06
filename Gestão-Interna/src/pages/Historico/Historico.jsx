import { useState } from "react";
import React from "react";
import "./Historico.css";
import SearchFilter from "../../components/SearchFilter/SearchFilter";

const usuariosVerificados = [
  {
    id: 1,
    nome: "Pedro",
    Email: "pf17@hotmail.com",
    Telefone: "219712152094",
    contaId: 123456789,
    Status: "Aprovado",
  },
  {
    id: 2,
    nome: "Nilton",
    Email: "nsilvafilho1@gmail.com",
    Telefone: "21973382788",
    contaId: 12802489,
    Status: "Aprovado",
  },
  {
    id: 3,
    nome: "João",
    Email: "joao@gmail.com",
    Telefone: "21999823045",
    contaId: 80923850,
    Status: "Reprovado",
  },
  {
    id: 4,
    nome: "Renata",
    Email: "renata21@gmail.com",
    Telefone: "21971037696",
    contaId: 8250283095,
    Status: "Aprovado",
  },
];

function Historico() {
  const [data] = useState(usuariosVerificados);
  const [filteredData, setFilteredData] = useState(usuariosVerificados);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredData(data);
      return;
    }

    const results = data.filter((item) =>
      item.nome.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredData(results);
  };

  return (
    <div className="search-bar-container">
      <div className="search-filter">
        <SearchFilter onSearch={handleSearch} />
      </div>
      <div className="search-results">
        {/* só pra enxergar o bloco agora */}
        <div className="results-header">
          <span>Nome</span>
          <span>E-mail</span>
          <span>Telefone</span>
          <span>ID da conta</span>
          <span>Status</span>
        </div>

        { filteredData.map((usuarios) => (
          <div className="results-row" key={usuarios.id}>
            <p>{usuarios.nome ?? "-"}</p>
            <p>{usuarios.Email ?? "-"}</p>
            <p>{usuarios.Telefone ?? "-"}</p>
            <p>{usuarios.contaId ?? "-"}</p>
            <p>{usuarios.Status ?? "-"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Historico;
