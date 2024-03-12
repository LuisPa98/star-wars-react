import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCharacter } from "../services/characters.js";
import "./characterAdd.css"

function CharacterAdd() {
const [character, setCharacter] = useState({
    name: "",
    gender: "",
    hair_color: "",
    eye_color: "",
    homeworld: ""
})

let navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault()

    await addCharacter(character)
    navigate("/character")
}

const handleChange = (e) => {
    const {name, value} = e.target 

    setCharacter((prevCharacter) => ({
        ...prevCharacter,
        [name]: value
    }))
}

return (
    <div className="charAddContainer">
        <h3>Expand this Library by adding your own entries!</h3>
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
            <button type="submit">Add to the database</button>
        </form>
    </div>
  )
}

export default CharacterAdd