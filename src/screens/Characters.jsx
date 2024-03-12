import {useState, useEffect} from "react";
import { getCharacters } from "../services/characters.js";
import Character from "../components/Character.jsx";

function Characters() {
const [characters, setCharacters] = useState([])

async function fetchCharacters() {
  const allCharacters = await getCharacters()
  setCharacters(allCharacters)
}

useEffect(() => {
  fetchCharacters()
}, [])

  return (
    <div>
      <h1>Help expand the library of the Star Wars lore</h1>
      <div className="container">
        {
          characters.map((character) => (
            <Character character={character} key={character._id} />
          ))
        }
      </div>
    </div>
  )
}

export default Characters