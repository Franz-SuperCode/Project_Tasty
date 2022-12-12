import React, { useEffect, useState } from 'react';
import "./RandomCard.css"


function RandomCard() {
    const [randomRecipe, setRandomRecipe] = useState();
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => response.json())
            .then(randomAPI => {
                setRandomRecipe(randomAPI.meals[0]);
                console.log(randomAPI.meals[0]);
            });
    }, []);

    // Bild mit Text in einen Container der einen Hintergrund hat
    return (
        <div className="RandomCard">
            <h2>Meal of the Day</h2>
            <article>
                <img alt={randomRecipe?.strMeal} src={`${randomRecipe?.strMealThumb}`} />
                <h2>{randomRecipe?.strMeal}</h2>
                <div>
                    <p>{randomRecipe?.strArea}</p>
                    <p>{randomRecipe?.strCategory}</p>
                </div>

            </article>

        </div>
    );

}

export default RandomCard;
