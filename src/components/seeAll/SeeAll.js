import { useState } from "react";


function SeeAll(props) {
    console.log(props)
    console.log(props[0])

    const [see, setSee] = useState("detailsShown");
    // const [catOrAr, setCatOrAr] = useState("strArea");
    //Alle Buttons anzeigen / verstecken
    function showAll() {
        see === "detailsShown" ? setSee("detailsHidden") : setSee("detailsShown");
    }

    // Values aus dem Object holen und als Array speichern
    let myValues = Object.values(props)
    console.log(myValues)


    // console.log(props[0].strCategory)


    // if (typeof props === "object" && props !== null && props.length > 0) {
    //     props[0].strCategory ? setCatOrAr("Category") : setCatOrAr("Area");
    //     console.log(catOrAr)
    // }




    return (
        <div className="Buttons">
            <button onClick={showAll} className="seeAllButton">SeeAll</button>
            {/* Über die Values der Props mappen (sind nun im Array) */}
            {myValues?.map((object, index) => {
                return (
                    <button className={`areaButtons ${see}`} key={index}>
                        {object.strArea}
                    </button>
                )
            })}
        </div>
    );
}


export default SeeAll;
