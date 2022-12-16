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
                // console.log(areasAPI.meals)
            });
    }, []);

    //Fetch Categories
    const [categories, setCategories] = useState();
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(response => response.json())
            .then(categoriesAPI => {
                setCategories(categoriesAPI.categories);
                // console.log(categoriesAPI.categories);
            });
    }, []);


    const [seeArea, setSeeArea] = useState("detailsHidden");
    const [seeCategory, setSeeCategory] = useState("detailsHidden");
    const [nameButton1, setNameButton1] = useState();
    const [nameButton2, setNameButton2] = useState();
    // const [catOrAr, setCatOrAr] = useState("strArea");
    //Alle Buttons anzeigen / verstecken
    function showAllArea() {
        if (seeArea === "detailsShown") {
            setSeeArea("detailsHidden");
            setNameButton1("See All")
            document.querySelector(".areaButtonsWrapper").style.display = "flex"
        } else {
            setSeeArea("detailsShown")
            setNameButton1("See Less")
            document.querySelector(".areaButtonsWrapper").style.display = "none"
        }


    }
    function showAllCategory() {
        if (seeCategory === "detailsShown") {
            setSeeCategory("detailsHidden");
            setNameButton2("See All");
            document.querySelector(".catButtonWrapper").style.display = "flex";
        } else {
            setSeeCategory("detailsShown");
            setNameButton2("See Less");
            document.querySelector(".catButtonWrapper").style.display = "none"
        }
    }

    return (
        <div className="Home">
            <div className="unterHome">
                <div>
                    <Searchbar />
                    <RandomCard />
                    <section className="homeAreaWrapper">
                        <div className="CatAreaSeeAll">  <h2>Areas</h2>
                            {/* <SeeAll
                    allLink={"/search/areas"}
                /> */}
                            {/* ========== Alle Area Buttons ============ */}
                            {/* <button onClick={showAllArea} className="seeAllButton">seeAll</button> */}
                            <SeeAll
                                functionBtn={showAllArea}
                                name={nameButton1}
                            />
                        </div>
                        <div className="buttonCloud">
                            {areas?.map((object, index) => {
                                return (
                                    <Link to={`/search/areas&${object.strArea}`} className={seeArea} key={index}>
                                        <button className="all_buttons" >{object.strArea} </button>
                                    </Link>
                                )

                            })}
                        </div>
                        {/* ============ */}
                    </section>
                    <section className="areaButtonsWrapper">
                        <Buttons
                            buttonName={"American"}
                            buttonLink={"/search/areas&American"} classBtn={"areaButtons inline_block"}
                        />
                        <Buttons
                            buttonName={"British"}
                            buttonLink={"/search/areas&British"}
                            classBtn={"areaButtons inline_block"}
                        />
                        <Buttons
                            buttonName={"Dutch"}
                            buttonLink={"/search/areas&Dutch"} classBtn={"areaButtons inline_block"}
                        />
                    </section>

                </div>
                <section className="homeCatWrapper">

                    <div className="CatAreaSeeAll">  <h2>Categories</h2>
                        <SeeAll
                            functionBtn={showAllCategory}
                            name={nameButton2}
                        /></div>
                    <div className="bottomPadding">
                        {/* ========== Alle Category Buttons ============ */}
                        {/* <button onClick={showAllCategory} className="seeAllButton">seeAll</button> */}
                        {categories?.map((object, index) => {
                            // console.log(object);
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
                    </div>
                </section>
                <div className="catButtonWrapper">
                    <CategoryButtons url={"https://www.themealdb.com/images/category/beef.png"} cat={"Beef"} link={"/search/category&Beef"} classBtn={"singleDrei"} />
                    <CategoryButtons url={"https://www.themealdb.com/images/category/chicken.png"} cat={"Chicken"} link={"/search/category&Chicken"} classBtn={"singleDrei"} />
                    <CategoryButtons url={"https://www.themealdb.com/images/category/dessert.png"} cat={"Dessert"} link={"/search/category&Dessert"} classBtn={"singleDrei"} />
                </div>
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
