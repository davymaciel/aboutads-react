import React from 'react'
import { Link } from 'react-router-dom'

const FirstComponent = () => {
  const nome = "Davy";
  const sobrenome = "Maciel de Souza";
  const matrícula = 2324290025;
  const curso = "Análise e Desenvolvimento de Sistemas";


  return (
    <div className="container">
      <h1>Olá, Seja bem-vindo!</h1>
      <b><p>Meu nome é {nome} {sobrenome}, sou estudante do curso de {curso} e minha matrícula é {matrícula}.</p></b>
      <div className="links-container">
        <button><Link to={"/SecondComponent"}>Sobre o curso</Link></button>
        <button><Link to={"/ThirdComponent"}>Matérias e professores</Link></button>      
        <button><Link to={"/FourthComponent"}>Importações</Link></button>
      </div>
      <p>Construção de FrontEnd - Felipe Batista da Silva</p>
    </div>
  )
}


export default FirstComponent