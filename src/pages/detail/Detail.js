import { useEffect, useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import homeWhite from "../../assets/img/homeWhite.svg"
import lupeBlau from "../../assets/img/lupeBlau.svg"
import favsWhite from "../../assets/img/favsWhite.svg"
import profil from "../../assets/img/profilWhite.svg"

function Detail() {

    // Get params from url

    const params = useParams();
    const id = params.id

    // console.log(id);

    // Fetch data from API

    const [detailData, setDetailData] = useState();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(detailData => {
                setDetailData(detailData.meals[0]);
            });
    }, []);

    // console.log(detailData);
    // console.log(detailData.search("Ingredient"));

    // Create Array of ingredients
    const ingredientArray = [];

    ingredientArray.push(detailData?.strMeasure1 + " " + detailData?.strIngredient1);
    ingredientArray.push(detailData?.strMeasure2 + " " + detailData?.strIngredient2);
    ingredientArray.push(detailData?.strMeasure3 + " " + detailData?.strIngredient3);
    ingredientArray.push(detailData?.strMeasure4 + " " + detailData?.strIngredient4);
    ingredientArray.push(detailData?.strMeasure5 + " " + detailData?.strIngredient5);
    ingredientArray.push(detailData?.strMeasure6 + " " + detailData?.strIngredient6);
    ingredientArray.push(detailData?.strMeasure7 + " " + detailData?.strIngredient7);
    ingredientArray.push(detailData?.strMeasure8 + " " + detailData?.strIngredient8);
    ingredientArray.push(detailData?.strMeasure9 + " " + detailData?.strIngredient9);
    ingredientArray.push(detailData?.strMeasure10 + " " + detailData?.strIngredient10);
    ingredientArray.push(detailData?.strMeasure11 + " " + detailData?.strIngredient11);
    ingredientArray.push(detailData?.strMeasure12 + " " + detailData?.strIngredient12);
    ingredientArray.push(detailData?.strMeasure13 + " " + detailData?.strIngredient13);
    ingredientArray.push(detailData?.strMeasure14 + " " + detailData?.strIngredient14);
    ingredientArray.push(detailData?.strMeasure15 + " " + detailData?.strIngredient15);
    ingredientArray.push(detailData?.strMeasure16 + " " + detailData?.strIngredient16);
    ingredientArray.push(detailData?.strMeasure17 + " " + detailData?.strIngredient17);
    ingredientArray.push(detailData?.strMeasure18 + " " + detailData?.strIngredient18);
    ingredientArray.push(detailData?.strMeasure19 + " " + detailData?.strIngredient19);
    ingredientArray.push(detailData?.strMeasure20 + " " + detailData?.strIngredient20);


    // console.log(detailData?.strInstructions)

    // for (let i = 1; i <= 20; i++) {
    //     // if ()
    //     console.log(detailData?.strIngredient + `${i}`);
    // }

    // const regex = /Ingredient/g;
    // const found = detailData.match(regex);

    // console.log(found);

    // for (let i = 0; i <= 20; i++) {
    //     ingredientArray.push(detailData[detailData.indexOf("strIngredient1") + i]);
    // }


    // Switch between ingredients and instructions
    const [detailsIngredients, setDetailsIngredients] = useState("detailsShown");
    const [detailsInstructions, setDetailsInstructions] = useState("detailsHidden");
    const [switchColorIng, setSwitchColorIng] = useState("buttonActive");
    const [switchColorIns, setSwitchColorIns] = useState("");

    return (
        <div className="detailsWrapper">
            <section className="detailsBgPic">
                <img alt={detailData?.strMeal
                } src={detailData?.strMealThumb
                } />
            </section>
            <div className="detailsLowerPart">
                <section className="detailsHeader">
                    <h2 className="detailsTitle">{detailData?.strMeal}</h2>
                    <p className="detailsMedium">{detailData?.strCategory}</p>
                    <p className="detailsLight">{detailData?.strArea}</p>
                </section>
                <section className="detailsSwitch">
                    <button className={`${switchColorIng}`} type="button" onClick={() => {
                        setDetailsIngredients("detailsShown");
                        setDetailsInstructions("detailsHidden");
                        setSwitchColorIng("buttonActive");
                        setSwitchColorIns("buttonInactive");
                    }}>Ingredients</button>
                    <button className={`${switchColorIns}`} type="button" onClick={() => {
                        setDetailsIngredients("detailsHidden");
                        setDetailsInstructions("detailsShown");
                        setSwitchColorIng("buttonInactive")
                        setSwitchColorIns("buttonActive")
                    }}>Instructions</button>
                </section>

                <section className={detailsIngredients}>
                    <h3 className="detailsMainSec">Ingredients</h3>
                    {ingredientArray.map((singleIngredient, index) => {
                        {/* if (singleIngredient !== " ")  112 */ }

                        if (ingredientArray[index].length > 2) {
                            return <p key={index}>{singleIngredient}</p>
                        }

                    })}

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
            <Navbar
                homeBlau={homeWhite}
                lupeWhite={lupeBlau}
                favs={favsWhite}
                profil={profil}
            />
        </div>
    );
};

export default Detail;