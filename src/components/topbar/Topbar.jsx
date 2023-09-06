import "./topbar.scss"
import { Person, Mail } from "@mui/icons-material"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            jack.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+62 882 9354 7354</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ihsanzack@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}