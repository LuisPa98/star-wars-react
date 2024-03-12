import { useState, useEffect } from "react";
import { getCat, deleteCat } from "../services/characters.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function CharacterDetail() {
  return (
    <div>
        <p>{character.name}</p>
    </div>
  )
}

export default CharacterDetail