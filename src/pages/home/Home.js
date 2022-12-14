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
                {/* ========== */}
                {/* <div className="buttonCloud">
                   
                    {areasList?.map((singleArea, index) => {
                        return <Buttons key={index} buttonName={singleArea.strArea
                        } classBtn={index >= 2 ? see : " "} buttonLink={`/search/${singleArea.strArea}`} />
                    })}
                </div> */}
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
