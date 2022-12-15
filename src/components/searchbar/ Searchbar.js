import { useState, useEffect } from "react";
import KeyCard from "../keyCard/KeyCard";
import "./Searchbar.css";

function Searchbar(props) {

    const [inputValue, setInputValue] = useState();

    const [inputArray, setInputArray] = useState([]);

    const [searchId, setSearchId] = useState();
    const [searchName, setSearchName] = useState();
    const [searchArea, setSearchArea] = useState();
    const [searchCat, setSearchCat] = useState();


    useEffect(() => {
        // console.log("render fetch area search")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue ? inputValue : ""}`)
            .then(response => response.json())
            .then(singleArea => {
                setSearchName(singleArea.meals);
                // console.log(singleArea);
                if (singleArea !== undefined && searchId === undefined) {
                    setInputArray(searchName);
                }
            });
    }, [inputValue]);


    useEffect(() => {
        // console.log("render fetch area search")
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${inputValue ? inputValue : ""}`)
            .then(response => response.json())
            .then(singleArea => {
                setSearchId(singleArea.meals);
                // console.log(singleArea)
                if (singleArea !== undefined) {
                    setInputArray(searchId)
                }
            });
    }, [inputValue]);


    useEffect(() => {
        // console.log("render fetch area search")
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputValue ? inputValue : ""}`)
            .then(response => response.json())
            .then(singleArea => {
                setSearchArea(singleArea.meals);
                if (singleArea !== undefined) {
                    setInputArray(searchArea);
                }
                // console.log(singleArea)
            });
    }, [inputValue]);


    useEffect(() => {
        // console.log("render fetch cat search")
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputValue ? inputValue : ""}`)
            .then(response => response.json())
            .then(singleCat => {
                setSearchCat(singleCat.meals);
                if (singleCat !== undefined) {
                    setInputArray(searchCat);
                }
                // console.log(singleArea)
            });
    }, [inputValue]);

    const [see, setSee] = useState("detailsHidden");


    // console.log("searchArea: " + searchArea);
    // console.log(searchCat);
    // console.log(searchName);
    // console.log(searchId);

    // console.log(inputArray)

    return (
        <div className="Searchbar">
            <input type="text" className="suche" id={props.searchId} onChange={e => setInputValue(e.target.value)} />
            <div className={see} >
                {inputArray?.map((singleValue) => {
                    return <KeyCard url={singleValue.strMealThumb
                    } name={singleValue.strMeal} cat={singleValue.strCategory
                    } link={`/details/${singleValue.idMeal}`} />
                })}
            </div>
        </div>
    );
}

export default Searchbar;
