import useFetch from "../../../Api/useFetch"
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../../../Context"
import ImageCard from "../../../Components/Image Card/ImageCard"
import Loading from "../../../Components/loader/loader"
import "../../../App.css"
import { useEffect } from "react";


export default function MovieCarousel() {
    const { setHeroSectionArray } = useGlobalContext();

    const Navigate = useNavigate();
    const { data, loading } = useFetch("/discover/movie");

    useEffect(() => {
        setHeroSectionArray(data?.results[Math.floor(Math.random() * 20)]);
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
                            <a href={`/movie/${e.id}`} key={index} >
                                <ImageCard DataArray={e} />
                            </a>
                        )
                    })};
                </div>
            </div>}


        </>
    )
}
