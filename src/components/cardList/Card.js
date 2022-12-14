import { Link } from "react-router-dom";

function Card(props) {
    return (
        <Link to={props.link} className="recipeCard">
            <img src={props.url} alt={props.name} />
            <p>{props.name}</p>
        </Link>
    );
}

export default Card;