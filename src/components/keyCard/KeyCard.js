import { Link } from "react-router-dom";

function KeyCard(props) {
    return (
        <div className="keyCardWrapper">
            <img src={props.url} alt={props.name} />
            <p>{props.name}</p>
            <p>{props.cat}</p>
            <Link to={props.link} className="keyCardArrow"></Link>
        </div>
    );
}

export default KeyCard;