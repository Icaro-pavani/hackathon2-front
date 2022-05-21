import styled from "styled-components";
import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";

import HackathonContext from "./context/HackathonContext";
import { useNavigate } from "react-router-dom";

export default function MateriaLink({ name, submateria }) {
  const { setMateriaInfo } = useContext(HackathonContext);

  const navigate = useNavigate();

  return (
    <MateriaLinkContainer
      onClick={() => {
        setMateriaInfo({ ...submateria });
        navigate("/aula");
      }}
    >
      <h2>{name}</h2>
      <IoIosArrowForward className="materia-icon" />
    </MateriaLinkContainer>
  );
}

const MateriaLinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 10%;

  h2 {
    font-weight: bold;
    font-size: 18px;
  }

  .materia-icon {
    font-size: 20px;
  }
`;
