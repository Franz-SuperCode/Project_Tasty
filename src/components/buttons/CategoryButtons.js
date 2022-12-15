import { Link } from "react-router-dom";
import "./CategoryButtons.css"

function CategoryButtons(props) {
    return (
        <div className="catCard">
            <Link to={props.link} className="catButton">
                <img className="catImg" src={props.url} alt={props.cat}></img>
                <h2 >{props.cat}</h2>
            </Link></div>
    );
};

export default CategoryButtons;