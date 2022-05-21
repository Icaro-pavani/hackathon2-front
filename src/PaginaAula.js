import styled from "styled-components";
import { useState } from "react";

const questoes = {
  name: "Reconhecendo os números",
  questoes: [
    {
      questão: "Podemos dizer que o número a seguir indica: 32ºC",
      alternativas: [
        {
          alternativa: "Medida",
          correta: true,
        },
        {
          alternativa: "Código de Identificação",
          correta: false,
        },
      ],
    },
    {
      questão: "Podemos dizer que os números a seguir indicam: 40% 10%",
      alternativas: [
        {
          alternativa: "Quantidades",
          correta: true,
        },
        {
          alternativa: "Códigos de Identificação",
          correta: false,
        },
      ],
    },
    {
      questão:
        "Podemos dizer que os números a seguir indicam: CPF: 124.325.456-55",
      alternativas: [
        {
          alternativa: "Quantidades",
          correta: false,
        },
        {
          alternativa: "Códigos de Identificação",
          correta: true,
        },
      ],
    },
  ],
};
export default function PaginaAula() {
  const [questao, setQuestao,setAlternativa] = useState(0);
  return (
    <PaginaAulaContainer>
      <iframe
        width="100%"
        height="300px"
        src="https://www.youtube.com/embed/0P5sRUHbueE"
        frameBorder="0"
        allowFullScreen
        title="VideoAula"
      />
      <NavQuestoes num={questao}>
        {questoes.questoes.map((questao, index) => (
          <h3 key={index} onClick={() => setQuestao(index)}>
            {index + 1}
          </h3>
        ))}
      </NavQuestoes>
      <Conteudo>
        <p>{questoes.questoes[questao].questão}</p>
        <Alternativas>
          {questoes.questoes[questao].alternativas.map((alternativa, index) => (
            <li key={index} onClick={() => setAlternativa(index)}>{`${index + 1}. ${alternativa.alternativa}`}</li>
          ))}
        </Alternativas>
      </Conteudo>
    </PaginaAulaContainer>
  );
}

const PaginaAulaContainer = styled.div`
  width: 100%;
`;

const NavQuestoes = styled.ul`
  width: 100%;
  overflow-x: hidden;
  display: flex;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-size: 24px;
    border-radius: 50%;
    border: 1px solid;
    margin: 10px 10px;
  }

  h3:nth-child(${(props) => props.num + 1}) {
    color: var(--branco);
    background-color: var(--roxo);
  }
`;
const Conteudo = styled.div`
  width: 100%;
  background-color: var(--roxo);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 404px;
  left: 24px;
  top: 180px;
  color: var(--cinza);
`;

const Alternativas = styled.ul`
  width: 100%;
  padding: 0 10%;

  li {
    width: 100%;
    border: 2px solid var(--cinza);
    font-size: 20px;
    line-height: 28px;
    border-radius: 10px;
    margin-top: 20px;
  }
`;
