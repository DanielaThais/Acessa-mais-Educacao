import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Aula from "./pages/Aula";
import Perfil from "./pages/Perfil";
import Metas from "./pages/Metas";
import Conquistas from "./pages/Conquistas";
import Comunidade from "./pages/Comunidade";
import Acessibilidade from "./pages/Acessibilidade";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/aula" element={<Aula />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/metas" element={<Metas />} />
      <Route path="/conquistas" element={<Conquistas />} />
      <Route path="/comunidade" element={<Comunidade />} />
      <Route
        path="/acessibilidade"
        element={<Acessibilidade />}
      />
    </Routes>
  );
}

export default App;