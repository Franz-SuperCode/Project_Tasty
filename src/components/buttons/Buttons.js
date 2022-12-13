import "./Buttons.css";
import { Link } from "react-router-dom";

function Buttons(props) {
    return (<div>
        <Link className="areaButtons" to={props.buttonLink}>{props.buttonName}</Link>
    </div>
    );
};

export default Buttons;
