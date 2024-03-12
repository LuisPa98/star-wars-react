import {Link} from "react-router-dom"

function Character({character}) {
  return (
    <div>
        <Link to={`/characters/${character._id}`}>
            <p className="characters-Name">{character.name}</p>
        </Link>
    </div>
  )
}

export default Character