import { Link } from "react-router-dom";


function CategoryButtons(props) {
    return (
        <Link to={props.link} className="catButton">
            <img src={props.url} alt={props.cat}></img>
            <h2>{props.cat}</h2>
        </Link>
    );
};

export default CategoryButtons;