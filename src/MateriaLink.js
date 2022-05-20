import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export default function MateriaLink({ name }) {
  return (
    <MateriaLinkContainer>
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
