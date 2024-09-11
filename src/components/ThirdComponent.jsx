import React from 'react'

const ThirdComponent = () => {
    const matérias =[
        {Nome: "Manutenção de Software e DevOps", CH: "60", Professor: "Regiano da Silva Alves"},
        {Nome: "Construção de FrontEnd", CH: "120", Professor:"Felipe Batista da Silva"},
        {Nome: "Business Intelligence e Data Warehousing", CH: "60", Professor:"Regiano da Silva Alves"},
        {Nome: "Projeto de Extensão na Educação Superior", CH: "90", Professor:"Márcia Amelia de Oliveira Bicalho"},
        {Nome: "Governança de TI", CH: "120", Professor:"Pablo Coelho Ferreira"},
        {Nome: "Direitos Humanos e Ambientais", CH: "60", Professor:"Daniella Goulart Rodrigues Silva"}
    ]
    matérias.sort((a, b) => a.Nome.localeCompare(b.Nome));
  return (
    <div className="materias-container">
        <h1>Listagem de matérias atuais</h1>
        <ol>{matérias.map( (materia)=>(
            <li>
                Nome: {materia.Nome} | CH: {materia.CH} | Professor(a): {materia.Professor}
            </li>
        )
    )}
    </ol>
    </div>
  )
}

export default ThirdComponent