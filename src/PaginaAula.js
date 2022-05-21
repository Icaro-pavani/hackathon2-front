import styled from "styled-components";
import { useState, useContext } from "react";
import HackathonContext from "./context/HackathonContext";
import Header from "./components/Header";

export default function PaginaAula() {
  const [questao, setQuestao] = useState(0);
  const [alternativa, setAlternativa] = useState(0);
  const [checagem, setChecagem] = useState(false);

  const { materiaInfo } = useContext(HackathonContext);
  console.log(checagem);
  console.log(materiaInfo);

  return (
    <PaginaAulaContainer>
      <Header name={materiaInfo.name} />
      <iframe
        width="100%"
        height="300px"
        src={`${materiaInfo.video}`}
        frameBorder="0"
        allowFullScreen
        title="VideoAula"
      />
      <NavQuestoes num={questao}>
        {materiaInfo.exercicios ? (
          materiaInfo.exercicios.map((questao, index) => (
            <h3
              key={index}
              onClick={() => {
                setQuestao(index);
                setChecagem(false);
              }}
            >
              {index + 1}
            </h3>
          ))
        ) : (
          <></>
        )}
      </NavQuestoes>
      <ion-icon name="time-outline"></ion-icon>
      <Conteudo>
        <Titulo>{materiaInfo?.exercicios[questao]["questao"]}</Titulo>
        <Alternativas alternativa={alternativa} checagem={checagem}>
          {materiaInfo.exercicios ? (
            materiaInfo.exercicios[questao].alternativas.map(
              (alternativa, index) => {
                if (alternativa.correta === true) {
                  return (
                    <li
                      key={index}
                      className="correta"
                      onClick={() => setAlternativa(index + 1)}
                    >{`${index + 1}. ${alternativa.alternativa}`}</li>
                  );
                }
                return (
                  <li key={index} onClick={() => setAlternativa(index + 1)}>{`${
                    index + 1
                  }. ${alternativa.alternativa}`}</li>
                );
              }
            )
          ) : (
            <></>
          )}
        </Alternativas>
        <button onClick={() => setChecagem(true)}>Chequar Resposta</button>
      </Conteudo>
    </PaginaAulaContainer>
  );
}

const PaginaAulaContainer = styled.div`
  font-family: "Rubik", sans-serif;
  width: 100%;
  margin-top: 70px;

  button {
    height: 50px;
    width: 150px;
    color: var(--branco);
    background-color: var(--amarelo);
    border: none;
    border-radius: 10px;
    font-size: 18px;
    margin-top: 40px;
  }
`;

const NavQuestoes = styled.ul`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  font-size: 20px;
  color: #89838f;

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
    height: 52px;
    border: 2px solid var(--cinza);
    font-size: 20px;
    line-height: 28px;
    border-radius: 10px;
    margin-top: 20px;
    padding: 12px 16px;
  }

  li:nth-child(${(props) => props.alternativa}) {
    color: var(--roxo);
    background-color: var(--cinza);
  }

  .correta {
    border: ${(props) =>
      props.checagem === true ? "2px solid green" : "2px solid var(--cinza)"};
  }
`;

const Titulo = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 24px;
`;
