import { Link } from "react-router-dom";
import Punkt from "../../assets/img/blueDot.svg"
import Arrow from "../../assets/img/ArrowRightSmall.png"
import "./KeyCard.css"

function KeyCard(props) {
    return (
        <div className="keyCardWrapper">
            <img src={props.url} alt={props.name} className="resImg" />
            <div className="keyCardText">
                <h2>{props.name}</h2>
                <div className="resCat">
                    <img src={Punkt} alt="Blue dot" className="blueDot" />
                    <h4>{props.cat}</h4>
                </div>
            </div>
            <Link to={props.link} className="keyCardArrow"><img src={Arrow} alt="arrow to the right" /></Link>
        </div>
    );
}

export default KeyCard;