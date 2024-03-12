import CharacterEdit from "./screens/CharacterEdit.jsx";
import Home from "./screens/Home.jsx"
import CharacterDetail from "./screens/CharacterDetail.jsx";
import CharacterAdd from "./screens/CharacterAdd.jsx";
import Nav from "./components/Nav.jsx";
import Characters from "./screens/Characters.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} /> 
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/add-character" element={<CharacterAdd />} />
        <Route path="/characters/:id/edit" element={<CharacterEdit />} />
      </Routes>
    </div>
  );
}

export default App;
