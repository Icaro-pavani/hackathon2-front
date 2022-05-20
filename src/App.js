import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/theme/GlobalStyle";

import HackathonContext from "./context/HackathonContext";
import PaginaMateria from "./PaginaMateria";
import PaginaInicial from "./PaginaInicial";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <HackathonContext.Provider value={{}}>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<PaginaInicial/>} />
            <Route path="/materia" element={<PaginaMateria />} />
          </Routes>
        </BrowserRouter>
      </HackathonContext.Provider>
    </>
  );
}
