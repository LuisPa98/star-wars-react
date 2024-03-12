import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCharacter } from "../services/characters.js";

function CharacterAdd() {
const [character, setCharacter] = useState({
    name: "",
    haircolor:"" ,
    eyecolor: "",
    gender: "",
    hair_color: "",
    eye_color: "",
    homeworld: "", 
    films: "",
    species: "", 
    vehicles: "",
    starships: ""
})

let navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault()

    await addCharacter(character)
    navigate("/cats")
}

const handleChange = (e) => {
    const {name, value} = e.target 

    setCharacter((prevCharacter) => ({
        ...prevCharacter,
        [name]: value
    }))
}

return (
    <div>
        <h3>Expand this Library by adding your own entries!</h3>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter characters name"
                name="name"
                value={character.name}
                onChange={handleChange}
            />
        </form>
    </div>
  )
}

export default CharacterAdd