import {useState, useEffect} from "react";
import { getCharacters } from "../services/characters.js";
import Character from "../components/Character.jsx";
import "./characters.css"

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
    <div className="charactersContainer">
      <h2>Help expand the library of the Star Wars lore</h2>
      <div className="container">
        {
          characters.map((character) => (
            <Character className="characters" character={character} key={character._id} />
          ))
        }
      </div>
    </div>
  )
}

export default Characters