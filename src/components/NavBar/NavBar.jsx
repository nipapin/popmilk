import logo from "./logo512.png";
import "./NavBar.css";

function NavBar({ login }) {
    return (
        <div className="navbar">
            <button className="navbar__logo-button">
                <img src={logo} alt="popmilk logo" className="navbar__logo"></img>
            </button>
            <p className="user-login">{login}</p>
        </div>
    );
}

export default NavBar;
