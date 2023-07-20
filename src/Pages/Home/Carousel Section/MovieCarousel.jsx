import useFetch from "../../../Api/useFetch"
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../../../Context"
import ImageCard from "../../../Components/Image Card/ImageCard"
import Loading from "../../../Components/loader/loader"
import "../../../App.css"
import { useEffect } from "react";


export default function MovieCarousel() {
    const { setHeroSectionArray1, setHeroSectionArray2, setHeroSectionArray3 } = useGlobalContext();

    const { data, loading } = useFetch("/discover/movie");

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    useEffect(() => {
        setHeroSectionArray1(data?.results[Math.floor(Math.random() * (0 - 6 + 1) + 6)]);
        setHeroSectionArray2(data?.results[Math.floor(Math.random() * (6 - 12 + 1) + 12)]);
        setHeroSectionArray3(data?.results[Math.floor(Math.random() * (12 - 20 + 1) + 20)]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <>
            {loading && <h1><Loading /></h1>}

            {!loading && <div className="Wrapper" >
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px", alignItems: "center" }}>
                    <h1>Movies</h1>
                    <Link to="/movie">More</Link>
                </div>

                <div id="movieContainer" >
                    {data?.results?.map((e, index) => {
                        return (
                            <a className='link' href={`/movie/${e.id}`} key={index} >
                                <ImageCard DataArray={e} />
                            </a>
                        )
                    })};
                </div>
            </div>}


        </>
    )
}
