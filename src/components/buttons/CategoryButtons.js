import { Link } from "react-router-dom";
import "./CategoryButtons.css"

function CategoryButtons(props) {
    return (
        <div>
            <Link to={props.link} className={props.classBtn}>
                <article>
                    <img src={props.url} alt={props.cat}></img>
                    <h2>{props.cat}</h2>
                </article>
            </Link>
        </div>
    );
};

export default CategoryButtons;