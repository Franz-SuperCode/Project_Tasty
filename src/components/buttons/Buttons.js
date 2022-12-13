import "./Buttons.css"
import { useEffect, useState } from "react";

function Buttons() {

    const [areas, setAreas] = useState();
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then(response => response.json())
            .then(areasAPI => {
                setAreas(areasAPI.meals);

            });
    }, []);




    return (
        <div className="Buttons">

            {areas?.map((object, index) => {
                return (
                    //Alle Area- Bezeichnungen geholt
                    <button key={index}>{object.strArea}</button>
                )

            })}


        </div>
    );
}

export default Buttons;
