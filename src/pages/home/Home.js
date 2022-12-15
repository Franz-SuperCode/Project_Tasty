import "./Home.css";
import Searchbar from "../../components/searchbar/ Searchbar"
import RandomCard from "../../components/randomCard/RandomCard"
import Buttons from "../../components/buttons/Buttons";
import SeeAll from "../../components/seeAll/SeeAll";
import Navbar from "../../components/navbar/Navbar";
import CategoryButtons from "../../components/buttons/CategoryButtons";
import { useEffect, useState } from "react";
import homeBlau from "../../assets/img/homeBlau.svg"
import lupeWhite from "../../assets/img/lupeWhite.svg"
import favsWhite from "../../assets/img/favsWhite.svg"
import profil from "../../assets/img/profilWhite.svg"
import { Link } from "react-router-dom";




function Home() {

    //Fetch Areas
    const [areas, setAreas] = useState();
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then(response => response.json())
            .then(areasAPI => {
                setAreas(areasAPI.meals);
                console.log(areasAPI.meals)
            });
    }, []);

    //Fetch Categories
    const [categories, setCategories] = useState();
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(response => response.json())
            .then(categoriesAPI => {
                setCategories(categoriesAPI.categories);
                console.log(categoriesAPI.categories);
            });
    }, []);


    const [seeArea, setSeeArea] = useState("detailsHidden");
    const [seeCategory, setSeeCategory] = useState("detailsHidden");
    // const [catOrAr, setCatOrAr] = useState("strArea");
    //Alle Buttons anzeigen / verstecken
    function showAllArea() {
        if (seeArea === "detailsShown") {
            setSeeArea("detailsHidden")
            document.querySelector(".areaButtonsWrapper").style.display = "flex"
        } else {
            setSeeArea("detailsShown")
            document.querySelector(".areaButtonsWrapper").style.display = "none"
        }


    }
    function showAllCategory() {
        if (seeCategory === "detailsShown") {
            setSeeCategory("detailsHidden")
            document.querySelector(".catButtonWrapper").style.display = "flex";
        } else {
            setSeeCategory("detailsShown")
            document.querySelector(".catButtonWrapper").style.display = "none"
        }
    }

    return (
        <div className="Home">
            <Searchbar />
            <RandomCard />
            <section className="homeAreaWrapper">
                <h2>Areas</h2>
                {/* <SeeAll
                    allLink={"/search/areas"}
                /> */}
                {/* ========== Alle Area Buttons ============ */}
                <button onClick={showAllArea} className="seeAllButton">seeAll</button>
                {areas?.map((object, index) => {
                    // console.log(object.strArea)
                    return (
                        <Link to={`/search/${object.strArea}`} className={seeArea} key={index}>
                            <button className="all_buttons" >{object.strArea} </button>
                        </Link>
                    )

                })}
                {/* ============ */}
            </section>
            <section className="areaButtonsWrapper">
                <Buttons
                    buttonName={"American"}
                    buttonLink={"/search/areas&American"}
                />
                <Buttons
                    buttonName={"British"}
                    buttonLink={"/search/areas&British"}
                />
                <Buttons
                    buttonName={"Dutch"}
                    buttonLink={"/search/areas&Dutch"}
                />
            </section>


            <section className="homeCatWrapper">
                <h2>Categories</h2>
                <SeeAll
                    functionBtn={showAllCategory}
                />
                {/* ========== Alle Category Buttons ============ */}
                {/* <button onClick={showAllCategory} className="seeAllButton">seeAll</button> */}
                {categories?.map((object, index) => {
                    console.log(object);
                    return (
                        // <Link to={`/search/${object.strCategory}`} className={seeCategory} key={index}>
                        //     <button className="all_buttons"> {object.strCategory} </button>
                        // </Link>
                        <CategoryButtons
                            classBtn={seeCategory}
                            key={index}
                            url={object.strCategoryThumb}
                            cat={object.strCategory}
                            link={`/search/category&${object.strCategory}`}
                        />
                    )

                })}
                {/* ============ */}
            </section>

            <div className="catButtonWrapper">
                <CategoryButtons url={"https://www.themealdb.com/images/category/beef.png"} cat={"Beef"} link={"/search/category&Beef"} />
                <CategoryButtons url={"https://www.themealdb.com/images/category/chicken.png"} cat={"Chicken"} link={"/search/category&Chicken"} />
                <CategoryButtons url={"https://www.themealdb.com/images/category/dessert.png"} cat={"Dessert"} link={"/search/category&Dessert"} />
            </div>

            <Navbar
                homeBlau={homeBlau}
                lupeWhite={lupeWhite}
                favs={favsWhite}
                profil={profil}
            />

        </div>
    );
}

export default Home;
