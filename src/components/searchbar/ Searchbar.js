import { useState, useEffect } from "react";
import KeyCard from "../keyCard/KeyCard";
import "./Searchbar.css";
import Lupe from "../../assets/img/lupeWhite.svg"

function Searchbar(props) {

    const [inputValue, setInputValue] = useState();

    const [inputArray, setInputArray] = useState();

    // const [searchId, setSearchId] = useState();
    // const [searchName, setSearchName] = useState();
    // const [searchArea, setSearchArea] = useState();
    // const [searchCat, setSearchCat] = useState();


    // useEffect(() => {
    //     const arrayCat3 = inputArray;
    //     console.log("render fetch cat search")
    //     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputValue ? inputValue : ""}`)
    //         .then(response => response.json())
    //         .then(singleCat => {
    //             // setSearchCat(singleCat.meals);
    //             if (singleCat !== null || undefined && !inputArray) {
    //                 setInputArray(singleCat.meals);
    //             } else if (singleCat !== null || undefined && inputArray !== null || undefined) {
    //                 const push3 = arrayCat3.push(singleCat.meals);
    //                 setInputArray(arrayCat3)
    //             }
    //             // console.log(singleArea)
    //         });
    // }, [inputValue]);

    useEffect(() => {
        const arrayCat2 = inputArray;
        console.log("render fetch area search")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue ? inputValue : "undefined"}`)
            .then(response => response.json())
            .then(singleArea => {
                // if (singleArea.meal !== null || undefined && searchId === undefined || null && !inputArray) {
                // setSearchName(singleArea.meals);
                // console.log(singleArea);}
                if (singleArea.meal !== null || undefined && !inputArray) {
                    setInputArray(singleArea.meals);
                }
                else if (singleArea !== null || undefined && inputArray !== null || undefined) {
                    const push2 = arrayCat2.push(singleArea.meals);
                    setInputArray(arrayCat2)
                }
            });
    }, [inputValue]);


    // useEffect(() => {
    //     console.log("render fetch id search")
    //     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${inputValue ? inputValue : ""}`)
    //         .then(response => response.json())
    //         .then(singleArea => {
    //             // setSearchId(singleArea.meals);
    //             // console.log(singleArea)
    //             if (singleArea.meals !== null || undefined && !inputArray) {
    //                 // setSearchId(singleArea.meals);
    //                 setInputArray(singleArea.meals)
    //             }
    //         });
    // }, [inputValue]);


    useEffect(() => {
        const arrayCat = inputArray;
        console.log("render fetch area search")
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputValue ? inputValue : ""}`)
            .then(response => response.json())
            .then(singleArea => {
                // setSearchArea(singleArea.meals);
                if (singleArea.meals !== null || undefined && !inputArray) {
                    setInputArray(singleArea.meals);
                } else if (singleArea.meals !== null || undefined && inputArray !== null || undefined) {
                    const push = arrayCat.push(singleArea.meals);
                    setInputArray(arrayCat)
                }
                // console.log(singleArea)
            });
    }, [inputValue]);




    const [see, setSee] = useState("detailsShown");


    // console.log(searchArea);
    // console.log(searchCat);
    // console.log(searchName);
    // console.log(searchId + 2);

    console.log(inputArray)

    return (
        <div className="Searchbar">
            <div>
                <img src={Lupe} alt="Lupe" />
                <input type="text" className="suche" id={props.searchId} onChange={e => setInputValue(e.target.value)} placeholder="Search" />
            </div>
            <div className={see} >
                <p>Test</p>
                {inputArray?.map((singleValue, index) => {
                    console.log("Test Map Array")
                    return <KeyCard key={index} url={singleValue.strMealThumb
                    } name={singleValue.strMeal} cat={singleValue.strCategory
                    } link={`/details/${singleValue.idMeal}`} />
                })}
            </div>
        </div>
    );
}

export default Searchbar;
