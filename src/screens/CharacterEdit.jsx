import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacter, editCharacter } from "../services/characters.js";
import "./characterEdit.css"


function CharacterEdit() {
const [character, setCharacter] = useState({
  name: "",
  gender: "",
  hair_color: "",
  eye_color: "",
  homeworld: "" 
})

let {id} = useParams()
let navigate = useNavigate()

async function fetchCharacter() {
  const oneCharacter = await getCharacter(id)
  setCharacter(oneCharacter)
}

useEffect(() => {
  fetchCharacter()
}, [])

const handleSubmit = async (e) => {
  e.preventDefault()

  await editCharacter(id, character)
  navigate(`/characters/${id}`)
}

const handleChange = async (e) => {
  const {name, value} = e.target 

  setCharacter((prevCharacter) => ({
    ...prevCharacter,
    [name]: value
  }))
}

return (
  <div className="charEditContainer">
    <h1>Edit the Star Wars Database</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter character name"
        name="name"
        value={character.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter character gender"
        name="gender"
        value={character.gender}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter character eye color"
        name="eye_color"
        value={character.eye_color}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter character hair color"
        name="hair_color"
        value={character.hair_color}
        onChange={handleChange}
      />
      <div className="buttonContainer">
        <button type="submit">Submit your edit</button>
      </div>
      </form>
  </div>
)
}

export default CharacterEdit