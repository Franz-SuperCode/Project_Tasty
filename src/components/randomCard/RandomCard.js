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
            <h2 className='randomTitle'>Meal of the Day</h2>
            <Link className='randomLink' to={`/details/${randomRecipe?.idMeal}`}>
                <article className='blueBox'>
                    <img alt={randomRecipe?.strMeal} src={`${randomRecipe?.strMealThumb}`} className="randomBild" />
                    <div className='randomDiv1'>
                        <h2 className='randomTitle'>{randomRecipe?.strMeal}</h2>
                        <p>{randomRecipe?.strCategory} - {randomRecipe?.strArea}</p>

                    </div>
                    {/* <div className='randomDiv2'>
                        <img alt={randomRecipe?.strMeal} src={`${randomRecipe?.strMealThumb}`} className="randomBild" />
                         <p>{randomRecipe?.strArea}</p> 
                </div>  */}

                </article>
            </Link>
        </div >
    );

}

export default RandomCard;
