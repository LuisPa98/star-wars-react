import {NavLink} from "react-router-dom";
import "./nav.css"

function Nav() {
  return (
    <nav>
        <NavLink className="links" to="/">Home</NavLink>
        <NavLink className="links" to="/characters">Characters</NavLink>
        <NavLink className="links" to="/add-character">Add Characters</NavLink>
    </nav>
  )
}

export default Nav;