import { useEffect, useState } from "react";



function SearchArray() {

    const [searchArray, setSearchArray] = useState([]);

    const [searchArrayA, setSearchArrayA] = useState([]);
    const [searchArrayB, setSearchArrayB] = useState([]);
    const [searchArrayC, setSearchArrayC] = useState([]);
    const [searchArrayD, setSearchArrayD] = useState([]);
    const [searchArrayE, setSearchArrayE] = useState([]);
    const [searchArrayF, setSearchArrayF] = useState([]);
    const [searchArrayG, setSearchArrayG] = useState([]);
    const [searchArrayH, setSearchArrayH] = useState([]);
    const [searchArrayI, setSearchArrayI] = useState([]);
    const [searchArrayJ, setSearchArrayJ] = useState([]);
    const [searchArrayK, setSearchArrayK] = useState([]);
    const [searchArrayL, setSearchArrayL] = useState([]);
    const [searchArrayM, setSearchArrayM] = useState([]);
    const [searchArrayN, setSearchArrayN] = useState([]);
    const [searchArrayO, setSearchArrayO] = useState([]);
    const [searchArrayP, setSearchArrayP] = useState([]);
    const [searchArrayQ, setSearchArrayQ] = useState([]);
    const [searchArrayR, setSearchArrayR] = useState([]);
    const [searchArrayS, setSearchArrayS] = useState([]);
    const [searchArrayT, setSearchArrayT] = useState([]);
    const [searchArrayU, setSearchArrayU] = useState([]);
    const [searchArrayV, setSearchArrayV] = useState([]);
    const [searchArrayW, setSearchArrayW] = useState([]);
    const [searchArrayX, setSearchArrayX] = useState([]);
    const [searchArrayY, setSearchArrayY] = useState([]);
    const [searchArrayZ, setSearchArrayZ] = useState([]);

    console.log(searchArrayA);
    console.log(searchArrayB);
    console.log(searchArrayC);

    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayA(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayB(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayC(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=d`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayD(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=e`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayE(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=f`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayF(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=g`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayG(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=h`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayH(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=i`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayI(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=j`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayJ(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=k`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayK(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=l`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayL(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=m`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayM(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=n`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayN(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=o`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayO(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=p`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayP(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=q`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayQ(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=r`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayR(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=s`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayS(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=t`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayT(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=u`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayU(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=v`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayV(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=w`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayW(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=x`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayX(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=y`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayY(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);
    useEffect(() => {
        console.log("render fetch SearchArray")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=z`)
            .then(response => response.json())
            .then(searchAPI => {
                setSearchArrayZ(searchAPI.meals);
                console.log(searchAPI)
            });
    }, []);

    return searchArray;
};

export default SearchArray;