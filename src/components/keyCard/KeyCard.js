import { Link } from "react-router-dom";
import Punkt from "../../assets/img/blueDot.svg"
import Arrow from "../../assets/img/ArrowRightSmall.png"
import "./KeyCard.css"

function KeyCard(props) {
    return (
        <div className="keyCardWrapper">
            <img src={props.url} alt={props.name} />
            <div className="keyCardText">
                <p>{props.name}</p>
                <article>
                    <img src={Punkt} />
                    <p>{props.cat}</p>
                </article>
            </div>
            <Link to={props.link} className="keyCardArrow"><img src={Arrow} alt="arrow to the right" /></Link>
        </div>
    );
}

export default KeyCard;