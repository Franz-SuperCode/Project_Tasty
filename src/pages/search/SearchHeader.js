import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/img/ArrowLeft.png"
import "./Search.css"

function SearchHeader() {
    return (
        <div className="searchHeader">
            <Link to="/home"><img src={ArrowLeft} alt="Arrow left" ></img></Link>
            <h2 className="searchHeaderTitle">Search</h2>
        </div>
    );
};

export default SearchHeader;