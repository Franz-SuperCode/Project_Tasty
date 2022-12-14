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
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            .then(response => response.json())
            .then(categoriesAPI => {
                setCategories(categoriesAPI.meals);
                console.log(categoriesAPI.meals);
            });
    }, []);


    const [seeArea, setSeeArea] = useState("detailsShown");
    const [seeCategory, setSeeCategory] = useState("detailsShown");
    // const [catOrAr, setCatOrAr] = useState("strArea");
    //Alle Buttons anzeigen / verstecken
    function showAllArea() {
        seeArea === "detailsShown" ? setSeeArea("detailsHidden") : setSeeArea("detailsShown");
    }
    function showAllCategory() {
        seeCategory === "detailsShown" ? setSeeCategory("detailsHidden") : setSeeCategory("detailsShown");
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
                {/* ========== */}
                <button onClick={showAllArea} className="seeAllButton">seeAll</button>
                {areas?.map((object, index) => {
                    console.log(object.strArea)
                    return (
                        <button className={seeArea} key={index}>{object.strArea}</button>
                    )

                })}
                {/* ============ */}
            </section>
            <section className="areaButtonsWrapper">
                <Buttons
                    buttonName={"American"}
                    buttonLink={"/search/American"}
                />
                <Buttons
                    buttonName={"British"}
                    buttonLink={"/search/British"}
                />
                <Buttons
                    buttonName={"Dutch"}
                    buttonLink={"/search/Dutch"}
                />
            </section>


            <section className="homeCatWrapper">
                <h2>Categories</h2>
                <SeeAll
                    allLink={"/search/category"}
                />
                {/* ========== */}
                <button onClick={showAllCategory} className="seeAllButton">seeAll</button>
                {categories?.map((object, index) => {
                    console.log(object.strCategory);
                    console.log(categories);

                    return (
                        <button className={seeCategory} key={index}>{object.strCategory}</button>
                    )

                })}
                {/* ============ */}
            </section>

            <div className="catButtonWrapper">
                <CategoryButtons url={"https://www.themealdb.com/images/category/beef.png"} cat={"Beef"} link={"/search/Beef"} />
                <CategoryButtons url={"https://www.themealdb.com/images/category/chicken.png"} cat={"Chicken"} link={"/search/Chicken"} />
                <CategoryButtons url={"https://www.themealdb.com/images/category/dessert.png"} cat={"Dessert"} link={"/search/Dessert"} />
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
