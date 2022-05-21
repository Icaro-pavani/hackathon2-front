import styled from "styled-components";

export default function Header({ name }) {
  return (
    <Top>
      <h1>{name}</h1>
    </Top>
  );
}

const Top = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background-color: var(--roxo);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 2;
  h1 {
    font-family: "Rubik", sans-serif;
    font-size: 40px;
    color: #fff;
  }
`;
