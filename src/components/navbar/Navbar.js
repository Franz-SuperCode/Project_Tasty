import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="Navbar"> <div>
            <ul>
                <li>
                    <Link to="/home">
                        <img src={props.homeBlau} className="homeWhiteNav" />
                    </Link>
                </li>
                <li>
                    <Link to="/search/category&Beef">
                        <img src={props.lupeWhite} className="lupeWhite" />
                    </Link>
                </li>
                <li>
                    <Link to="/favorites">
                        <img src={props.favs} className="favs" />
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <img src={props.profil} className="profil" />
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;
