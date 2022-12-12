import "./Home.css";
import Searchbar from "../../components/searchbar/ Searchbar"
import RandomCard from "../../components/randomCard/RandomCard"
import Buttons from "../../components/buttons/Buttons";
import SeeAll from "../../components/seeAll/SeeAll";
import Categories from "../../components/categories/Categories";
import Navbar from "../../components/navbar/Navbar";


function Home() {
    return (
        <div className="Home">
            <Searchbar />
            <RandomCard />
            <section>
                <h2>Areas</h2>
                <SeeAll />
            </section>
            <Buttons />
            <section>
                <h2>Categories</h2>
                <SeeAll />
            </section>
            <Categories />
            <Navbar />
        </div>
    );
}

export default Home;
