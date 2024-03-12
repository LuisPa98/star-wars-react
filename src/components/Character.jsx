import {Link} from "react-router-dom"
import "./character.css"

function Character({character}) {
  return (
    <div>
        <Link className="charactersName" to={`/characters/${character._id}`}>
            <p>{character.name}</p>
        </Link>
    </div>
  )
}

export default Character