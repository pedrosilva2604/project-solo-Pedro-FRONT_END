import FileInput from "../../../components/FileInput";
import "./style.css";
import React from "react";

function Home() {

  const users = [{
    id: '1223141451',
    name: 'Pedro',
    email: 'pf17@hotmail.com',
    celphone: '21973382788',
    id_conta: '7000898778',
    result: 'Aprovado'
  },
{
  id: '12315415134',
  name: 'Maria',
  email: 'maria@hotmail.com',
  celphone: '12315235252525',
  id_conta: '7000234224',
  result: 'Reprovado'
}]


  return (
    <div className="container">
      <form>
        <h1>Verificação de Aprovação de Contas</h1>
        <input placeholder="Nome" name="nome" type="text"/>
        <input placeholder="E-mail" name="e-mail" type="email"/>
        <input placeholder="Telefone" name="telefone" type="tel"/>
        <input type="text" name="id-conta" placeholder="ID da Conta"  />
        <FileInput />

        <button type='button'> Enviar Dados </button>
      </form>

      {users.map( user => (
        <div key={user.id} className="card">
        <div>
          <p>Name: {user.name} </p>
          <p>E-Mail: {user.email} </p>
          <p>Telefone: {user.celphone}</p>
          <p>ID da conta: {user.id_conta}</p>
          <p>Resultado: {user.result}</p>
        </div>
      </div>
      ) )}
     
    </div>
  );
}

export default Home;
