import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/theme/GlobalStyle";

import HackathonContext from "./context/HackathonContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <HackathonContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Teste</h1>} />
          </Routes>
        </BrowserRouter>
      </HackathonContext.Provider>
    </>
  );
}
