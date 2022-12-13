import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function SeeAll(props) {
    console.log(props.type)
    // console.log(props[0])



    const [see, setSee] = useState("detailsShown");
    //Alle Buttons anzeigen / verstecken
    function showAll() {
        see === "detailsShown" ? setSee("detailsHidden") : setSee("detailsShown");
    }

    return (
        <div className="seeAll">
            <Link to={props.allLink} onClick={props.function} className="seeAllButton">SeeAll</Link>

        </div>
    );
}


export default SeeAll;
