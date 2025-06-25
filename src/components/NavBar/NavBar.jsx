import "./navbar.css"
import logo from "../../assets/logo.svg"

const NavBar = () => {


  return (
    <nav className="navbar">
        <div>
            <img src={logo} alt="" className="logo" />
        </div>
        <div>

        </div>
        <div>
            <p className="button">Contacto</p>
        </div>
    </nav>
  )
}

export default NavBar
