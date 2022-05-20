import { IoMdHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import MateriaLink from "./MateriaLink";

const materias = ["Algebra", "Geometria", "Grandezas", "Probabilidade"];
const subMaterias = [
  { name: "Percebendo padrões", id: "jksdfnj" },
  { name: "Reconhecendo padrões", id: "ausha" },
];

export default function PaginaMateria() {
  const navigate = useNavigate();

  const [num, setNum] = useState(0);

  return (
    <>
      <MateriaHeader>
        <Titulo>
          <h1>Matemática EF</h1>
          <IoMdHome className="menu-icon" onClick={() => navigate("/")} />
        </Titulo>
        <NavBar num={num}>
          {materias.map((materia, index) => (
            <p key={index} onClick={() => setNum(index)}>
              {materia}
            </p>
          ))}
        </NavBar>
      </MateriaHeader>
      <SubMaterias>
        {subMaterias.map((submateria, index) => (
          <MateriaLink name={submateria.name} key={index} />
        ))}
      </SubMaterias>
    </>
  );
}

const MateriaHeader = styled.header`
  width: 100%;

  background-color: var(--roxo-escuro);
  padding: 0 10% 10px;
`;

const Titulo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  h1 {
    color: var(--branco);
    font-size: 28px;
  }

  .menu-icon {
    color: var(--branco);
    font-size: 24px;
  }
`;

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  margin-top: 40px;

  p {
    color: var(--cinza);
    margin: 0 20px;
    opacity: 0.8;
  }

  p:nth-child(${(props) => props.num + 1}) {
    color: var(--branco);
    opacity: 1;
  }
`;

const SubMaterias = styled.ul`
  width: 100%;
`;
