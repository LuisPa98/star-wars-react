import { useState, useEffect } from "react";
import { getCharacter, deleteCharacter } from "../services/characters.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./characterDetail.css"

function CharacterDetail() {
const [character, setCharacter] = useState({})

let {id} = useParams()
let navigate = useNavigate()

const fetchCharacter = async () => {
  const oneCharacter = await getCharacter(id)
  setCharacter(oneCharacter)
}

useEffect(() => {
    fetchCharacter()
}, [])

const handleDelete = async () => {
  await deleteCharacter(id)
  navigate("/characters")
}

return (
  <div className="charDetailContainer">
      <p className="charInfo">Character Name: {character.name}</p>
      <p className="charInfo">Character Gender: {character.gender}</p>
      <p className="charInfo">Character Hair Color: {character.hair_color}</p>
      <p className="charInfo">Character Eye Color: {character.eye_color}</p>
      <div className="detailButtons">
        <Link to={`/characters/${id}/edit`}>
          <button className="edit">Edit</button>
        </Link>
        <button className="delete"onClick={handleDelete}>Delete</button>  
      </div>
  </div>
)
}

export default CharacterDetail