import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./assets/theme/GlobalStyle";

import HackathonContext from "./context/HackathonContext";
import PaginaMateria from "./PaginaMateria";
import PaginaAula from "./PaginaAula";

export default function App() {
  const [materiaInfo, setMateriaInfo] = useState({});

  return (
    <>
      <GlobalStyle />
      <HackathonContext.Provider value={{ materiaInfo, setMateriaInfo }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaMateria />} />
            <Route path="/aula" element={<PaginaAula />} />
          </Routes>
        </BrowserRouter>
      </HackathonContext.Provider>
    </>
  );
}
