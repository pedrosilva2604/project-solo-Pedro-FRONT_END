import { useEffect, useState } from "react";
import React from "react";
import "./Historico.css";
import SearchFilter from "../../components/SearchFilter/SearchFilter";

const fakeDB = [ {
    id: 5,
    nome: "Nina",
    Email: "nina70@gmail.com",
    Telefone: "21973382788",
    contaId: 123463636,
    Status: "Aprovado",
  },
  {
    id: 6,
    nome: "Nunes",
    Email: "antonionuneshotmail.com",
    Telefone: "21973457477",
    contaId: 1232526,
    Status: "Reprovado",
  },

]

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
    nome: "Lopes",
    Email: "lopes@gmail.com",
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

  const defaultName = "-"

  const [search, setSearch] = useState("");

  const [filteredDataLocal, setFilteredDataLocal] = useState(usuariosVerificados);

useEffect(() => {

  const query = search.toLowerCase();

  if(!query) {
    setFilteredDataLocal(usuariosVerificados);
    return
  }

  const tenLastUsersVerified = usuariosVerificados.filter(usuarios => {
    return (
      usuarios.nome.toLowerCase().includes(query) ||
      usuarios.Email.toLowerCase().includes(query)
    );
  })

  setFilteredDataLocal(tenLastUsersVerified)

}, [search])



const handleSearchClickOrEnter = () => {


  const query = search.toLowerCase();

  if(!query) {
    setFilteredDataLocal(usuariosVerificados);
    return
  }


  const deepSearch = fakeDB.filter(usuarios => {
    return (
      usuarios.nome.toLowerCase().includes(query) ||
      usuarios.Email.toLowerCase().includes(query)
    );
  })


  if(deepSearch.length > 0) {
    setFilteredDataLocal(deepSearch);
  } else if(!query) {
    setFilteredDataLocal([]);
  } else {
    setFilteredDataLocal(filteredDataLocal)
  }

}

  return (
    <div className="search-bar-container">
      <div className="search-filter">
        <SearchFilter value={search} setValue={setSearch} onSearch={handleSearchClickOrEnter} />
      </div>
      <div>
         <h2 id="tenLast">Últimos Dez Clientes Verificados</h2>
      </div>

      <div className="search-results">
        <div className="results-header">
          <span>Nome</span>
          <span>E-mail</span>
          <span>Telefone</span>
          <span>ID da conta</span>
          <span>Status</span>
        </div>

        {filteredDataLocal.map((usuarios) => (
          <div className="results-row" key={usuarios.id}>
            <p>{usuarios.nome == null || usuarios.nome == "" ? defaultName : usuarios.nome}</p>
            <p>{usuarios.Email == null || usuarios.Email == "" ? defaultName : usuarios.Email}</p>
            <p>{usuarios.Telefone == null || usuarios.Telefone == "" ? defaultName : usuarios.Telefone}</p>
            <p>{usuarios.contaId == null || usuarios.contaId == "" ? defaultName : usuarios.contaId}</p>
            <p>{usuarios.Status == null ||  usuarios.Status == "" ? defaultName : usuarios.Status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Historico;
