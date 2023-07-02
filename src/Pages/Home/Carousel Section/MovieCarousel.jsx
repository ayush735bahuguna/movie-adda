import useFetch from "../../../Api/useFetch"
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../../../Context"
import ImageCard from "../../../Components/Image Card/ImageCard"
import "../../../App.css"
import { useEffect } from "react";


export default function MovieCarousel() {
    const { setHeroSectionArray } = useGlobalContext();

    const Navigate = useNavigate();
    const { data, loading, error } = useFetch("/discover/movie");

    useEffect(() => {
        setHeroSectionArray(data?.results[Math.floor(Math.random() * 20)]);
    }, [data])

    return (
        <>
            {loading && <h1>Loading....</h1>}

            {!loading && <div className="Wrapper">
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px", alignItems: "center" }}>
                    <h1>Movies</h1>
                    <Link to="/Movie">More</Link>
                </div>

                <div id="movieContainer" >
                    {data?.results?.map((e, index) => {

                        const onclickHandler = () => {
                            Navigate(`/Movie/${e.id}`);
                        }

                        return (
                            <a href='#' onClick={onclickHandler} key={index} >
                                <ImageCard DataArray={e} />
                            </a>
                        )
                    })};
                </div>
            </div>}


        </>
    )
}
