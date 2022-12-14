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

    return (
        <div className="Home">
            <Searchbar />
            <RandomCard />
            <section className="homeAreaWrapper">
                <h2>Areas</h2>
                <SeeAll
                    allLink={"/search/areas"}
                />
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
                    allLink={"/search/category"}
                />
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
