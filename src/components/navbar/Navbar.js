import './Navbar.css'
import { Link } from "react-router-dom";
import homeBlau from "../../assets/img/homeBlau.svg"
// import homeWhite from "../../assets/img/homeWhite"
// import lupeBlau from "../../assets/img/lupeBlau"
import lupeWhite from "../../assets/img/lupeWhite.svg"
import favsWhite from "../../assets/img/favsWhite.svg"
import profil from "../../assets/img/profilWhite.svg"

function Navbar() {
    return (
        <nav className="Navbar"> <div>
            <ul>
                <li>
                    <Link to="/">
                        <img src={homeBlau} className="homeWhiteNav" />
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                        <img src={lupeWhite} className="lupeWhite" />
                    </Link>
                </li>
                <li>
                    <Link to="/landing">
                        <img src={favsWhite} className="favs" />
                    </Link>
                </li>
                <li>
                    <Link to="/landing">
                        <img src={profil} className="profil" />
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;
