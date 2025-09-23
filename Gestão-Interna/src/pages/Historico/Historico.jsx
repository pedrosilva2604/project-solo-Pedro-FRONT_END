import { _useState } from "react";
import React from "react";
import "./Historico.css";

function Historico() {
  const users = [
    {
      id: "123456789",
      nome: "Pedro",
      email: "pf17@hotmail.com",
      telefone: "21971252094",
      IDconta: "11234232562",
      Status: "Aprovado",
    },
    {
      id: "123424234",
      nome: "Renata",
      email: "renatta.almeida@gmail.com",
      telefone: "21923453234",
      IDconta: "112456457456",
      Status: "Reprovada",
    },
  ];

  const uniqueUsers = Array.from(new Map(users.map((user) => [user.id, user])).values())

  return (
    <div className="search-bar-container">
      <div className="search-filter">SearchBar</div>
      <div className="search-results">
        {/* só pra enxergar o bloco agora */}
        <div className="results-header">
          <span>Nome</span>
          <span>E-mail</span>
          <span>Telefone</span>
          <span>ID da conta</span>
          <span>Status</span>
        </div>
        {uniqueUsers.map((user) => (
        
          <div className="results-row">
            <p>{user.nome}</p>
            <p>{user.email}</p>
            <p>{user.telefone}</p>
            <p>{user.IDconta}</p>
            <p>{user.Status}</p>
          </div>
   
        ))}
      </div>
    </div>
  );
}

export default Historico;
