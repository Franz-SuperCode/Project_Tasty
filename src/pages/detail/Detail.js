import { useEffect, useState } from "react";
import "./Detail.css"

function Details() {

    // Fetch data from API

    const [detailData, setDetailData] = useState();

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
            .then(response => response.json())
            .then(detailData => {
                setDetailData(detailData.meals[0]);
                console.log(detailData.meals[0]);
            });
    }, []);

    console.log(detailData);

    // Create Array of ingredients
    // const ingredientArray = [];

    // for (let i = 1; i <= 20; i++) {
    //     if ()
    // }


    // Switch between ingredients and instructions
    const [detailsIngredients, setDetailsIngredients] = useState("detailsShown");
    const [detailsInstructions, setDetailsInstructions] = useState("detailsHidden");


    return (
        <div className="detailsWrapper">
            <section className="detailsBgPic">
                <img alt={detailData?.strMeal
                } src={detailData?.strMealThumb
                } />
            </section>
            <section className="detailsHeader">
                <h2 className="detailsTitle">{detailData?.strMeal}</h2>
                <p className="detailsMedium">{detailData?.strCategory}</p>
                <p className="detailsLight">{detailData?.strArea}</p>
            </section>
            <section className="detailsSwitch">
                <button type="button" onClick={() => {
                    setDetailsIngredients("detailsShown");
                    setDetailsInstructions("detailsHidden");
                }}>Ingredients</button>
                <button type="button" onClick={() => {
                    setDetailsIngredients("detailsHidden");
                    setDetailsInstructions("detailsShown");
                }}>Instructions</button>
            </section>
            <section className={detailsIngredients}>
                <h3 className="detailsMainSec">Ingredients</h3>
                { }

            </section>
            <section className={detailsInstructions}>
                <h3 className="detailsMainSec">Instructions</h3>
                <article>
                    <p>{detailData?.strInstructions
                    }</p>
                    <a href={detailData?.strYoutube
                    } target="_blank" rel="noreferrer">VIDEO</a>
                </article>
            </section>
        </div>
    );
};

export default Details;