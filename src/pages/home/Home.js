import "./Home.css";
import Searchbar from "../../components/searchbar/ Searchbar"
import RandomCard from "../../components/randomCard/RandomCard"
import Buttons from "../../components/buttons/Buttons";
import SeeAll from "../../components/seeAll/SeeAll";
import Categories from "../../components/categories/Categories";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";


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

    //Fetch Areas
    const [categories, setCategories] = useState();
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            .then(response => response.json())
            .then(categoriesAPI => {
                setCategories(categoriesAPI.meals);
                console.log(categoriesAPI.meals)
            });
    }, []);

    return (
        <div className="Home">
            <Searchbar />
            <RandomCard />
            <section>
                <h2>Areas</h2>
                <SeeAll
                    {...areas}
                />
            </section>
            <Buttons
            // firstButton={areas[0].strArea}
            // secondButton={areas[1].strArea}
            // thirdButton={areas[2].strArea}
            />
            {/* <button className="threeButtons">{areas[0].strArea}</button>
            <button className="threeButtons">{areas[1].strArea}</button>
            <button className="threeButtons">{areas[2].strArea}</button> */}
            {/* {areas?.map((object, index) => {
                console.log(object.strArea)
                return (
                    <Buttons
                        key={index}
                        {...object}
                    />
                    //Alle Area- Bezeichnungen geholt
                )

            })} */}

            <section>
                <h2>Categories</h2>
                <SeeAll
                    {...categories}
                />
            </section>
            <Categories />
            <Navbar />
        </div>
    );
}

export default Home;
