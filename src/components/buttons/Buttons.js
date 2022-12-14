import "./Buttons.css";
import { Link } from "react-router-dom";

function Buttons(props) {
    return (<div className="divAreaButtons">
        <Link className={`areaButtons ${props.classBtn}`} to={props.buttonLink}>{props.buttonName}</Link>
    </div>
    );
};

export default Buttons;
