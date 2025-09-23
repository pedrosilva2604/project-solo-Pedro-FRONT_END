import FileInput from "../../components/FileInput/FileInput";
import "./Verificacao.css";
import React from "react";

function Verificacao() {

  return (
    <div className="container">
      <form>
        <h1>Verificação de Aprovação de Contas</h1>
        <input placeholder="Nome" name="nome" type="text"/>
        <input placeholder="E-mail" name="e-mail" type="email"/>
        <input placeholder="Telefone" name="telefone" type="tel"/>
        <input type="text" name="id-conta" placeholder="ID da Conta"  />
        <FileInput />

        <button type='button'> Enviar Dados Para Análise </button>
      </form>

     
     
    </div>
  );
}

export default Verificacao;
