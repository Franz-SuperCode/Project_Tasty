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
            <img alt={randomRecipe?.strMeal} src={`${randomRecipe?.strMealThumb}`} />
        </div>
    );

}

export default RandomCard;
