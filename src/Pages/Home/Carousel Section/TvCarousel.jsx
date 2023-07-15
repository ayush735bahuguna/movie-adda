import useFetch from "../../../Api/useFetch"
import { Link, useNavigate } from 'react-router-dom';
import ImageCard from "../../../Components/Image Card/ImageCard"
import Loading from "../../../Components/loader/loader"
import "../../../App.css"


export default function TvCarousel() {
    const Navigate = useNavigate();
    const { data, loading } = useFetch("/discover/tv");

    return (
        <>



            {loading && <h1><Loading /></h1>}

            {!loading &&
                <div className="Wrapper">
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px", alignItems: "center" }}>
                        <h1>TV Series</h1>
                        <Link to="/tv">More</Link>
                    </div>

                    <div id='TvContainer'>
                        {data?.results?.map((e, index) => {
                            return (
                                <a href={`/tv/${e.id}`} key={index} >
                                    <ImageCard DataArray={e} />
                                </a>
                            )
                        })};
                    </div>
                </div>
            }
        </>
    )
}
