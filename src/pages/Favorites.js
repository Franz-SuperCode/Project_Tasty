import Construction from "../assets/img/construction.png"
import Navbar from "../components/navbar/Navbar";
import homeWhite from "../assets/img/homeWhite.svg"
import lupeWhite from "../assets/img/lupeWhite.svg"
import favsBlue from "../assets/img/favsBlue.svg"
import profil from "../assets/img/profilWhite.svg"

function Favorites() {



    return (
        <div className="favoritePage">
            <div className="constWrapper">
                <h2 className="constructionTitle">Under Construction</h2>
                <img src={Construction} alt="under construction" className="constructionImg" />
                <p className="constructionText">You will soon be able to save your favorite Recipes here!</p>
            </div>
            <Navbar
                homeBlau={homeWhite}
                lupeWhite={lupeWhite}
                favs={favsBlue}
                profil={profil}
            />
        </div>
    );
};

export default Favorites;