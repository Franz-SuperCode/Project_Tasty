

import Navbar from "../../components/navbar/Navbar";
// import homeBlau from "../../assets/img/homeBlau.svg"
import homeWhite from "../../assets/img/homeWhite.svg"
import lupeBlau from "../../assets/img/lupeBlau.svg"
// import lupeWhite from "../../assets/img/lupeWhite.svg"
import favsWhite from "../../assets/img/favsWhite.svg"
import profil from "../../assets/img/profilWhite.svg"
import CardList from "../../components/cardList/CardList";
import Searchbar from "../../components/searchbar/ Searchbar";
import SearchHeader from "./SearchHeader";


function Search() {
    return (
        <div className="searchPage">
            <SearchHeader />
            <Searchbar />
            <CardList />
            <Navbar
                homeBlau={homeWhite}
                lupeWhite={lupeBlau}
                favs={favsWhite}
                profil={profil}
            />
        </div>)
}
export default Search;

