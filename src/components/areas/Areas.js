import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Buttons from "../buttons/Buttons";
import CategoriesDetail from "../categories/CategoriesDetail";
import SeeAll from "../seeAll/SeeAll";

function Areas() {

    const params = useParams();
    const value = params.value;


    const [criteria, setCriteria] = useState("American");
    useEffect(() => {
        console.log("render criteria");
        if (value === "areas") {
            setCriteria("list");
        }
        else {
            setCriteria(value);
        }
    }, [value]);

    const [areasList, setAreasList] = useState();
    useEffect(() => {
        console.log("render fetch list")
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            .then(response => response.json())
            .then(areasAPI => {
                setAreasList(areasAPI.meals);
                // console.log(areasAPI)
            });
    }, []);

    const [chosenArea, setChosenArea] = useState();
    useEffect(() => {
        console.log("render fetch area")
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value !== "areas" ? value : "America"}`)
            .then(response => response.json())
            .then(singleArea => {
                setChosenArea(singleArea.meals);
                // console.log(singleArea)
            });
    }, [value]);



    console.log(areasList);
    console.log(chosenArea);
    console.log(criteria);

    const [see, setSee] = useState("detailsHidden");
    const [nameBtn, setNameBtn] = useState()
    //Alle Buttons anzeigen / verstecken
    // function showAll() {
    //     if (see === "detailsShown") {
    //         setSee("detailsHidden");
    //         setNameBtn("See All");
    //         return;
    //     } else {
    //         setSee("detailsShown");
    //         setNameBtn("See Less");
    //         return;
    //     }
    // }

    return (
        <div>
            {/* SeeAll Button */}
            <SeeAll functionBtn={() => {
                if (see === "detailsShown") {
                    setSee("detailsHidden");
                    setNameBtn("See All");
                } else {
                    setSee("detailsShown");
                    setNameBtn("See Less");
                }
            }} name={nameBtn} />
            <div className="buttonCloud">
                {/* List of Buttons */}
                {areasList?.map((singleArea, index) => {
                    return <Buttons key={index} buttonName={singleArea.strArea
                    } classBtn={index >= 2 ? see : " "} buttonLink={`/search/${singleArea.strArea}`} />
                })}
            </div>
            {/* Recipe overview */}
            <div className="recipeCloud">
                {chosenArea?.map((singleDish, index) => {
                    return <CategoriesDetail key={index} url={singleDish.strMealThumb
                    } name={singleDish.strMeal
                    } link={`/details/${singleDish.idMeal}`} />
                })}
            </div>
        </div>
    )

};

export default Areas;