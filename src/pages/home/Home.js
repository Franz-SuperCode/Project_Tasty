import "./Home.css";
import Searchbar from "../../components/searchbar/ Searchbar"
import RandomCard from "../../components/randomCard/RandomCard"
import Buttons from "../../components/buttons/Buttons";
import SeeAll from "../../components/seeAll/SeeAll";
import Navbar from "../../components/navbar/Navbar";
import CategoryButtons from "../../components/buttons/CategoryButtons";


function Home() {

    // //Fetch Areas
    // const [areas, setAreas] = useState();
    // useEffect(() => {
    //     fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    //         .then(response => response.json())
    //         .then(areasAPI => {
    //             setAreas(areasAPI.meals);
    //             console.log(areasAPI.meals)
    //         });
    // }, []);

    // //Fetch Areas
    // const [categories, setCategories] = useState();
    // useEffect(() => {
    //     fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    //         .then(response => response.json())
    //         .then(categoriesAPI => {
    //             setCategories(categoriesAPI.meals);
    //             console.log(categoriesAPI.meals)
    //         });
    // }, []);

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
            <Navbar />
        </div>
    );
}

export default Home;
