import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./RandomCard.css"
import Detail from "../../pages/detail/Detail"


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
            <Link className='randomLink' to={`/details/${randomRecipe?.idMeal}`}>
                <article>
                    <div className='randomDiv1'>
                        <h2>{randomRecipe?.strMeal}</h2>
                        <p>{randomRecipe?.strCategory}</p>
                    </div>
                    <div className='randomDiv2'>
                        <img alt={randomRecipe?.strMeal} src={`${randomRecipe?.strMealThumb}`} />
                        <p>{randomRecipe?.strArea}</p>
                    </div>

                </article>
            </Link>
        </div>
    );

}

export default RandomCard;
