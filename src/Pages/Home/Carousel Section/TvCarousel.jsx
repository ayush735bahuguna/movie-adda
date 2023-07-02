import useFetch from "../../../Api/useFetch"
import { Link, useNavigate } from 'react-router-dom';
import ImageCard from "../../../Components/Image Card/ImageCard"
import "../../../App.css"


export default function TvCarousel() {
    const Navigate = useNavigate();
    const { data, loading, error } = useFetch("/discover/tv");

    return (
        <>



            <div className="Wrapper">
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px", alignItems: "center" }}>
                    <h1>TV Series</h1>
                    <Link to="/TV-Series">More</Link>
                </div>

                <div id='TvContainer'>
                    {data?.results?.map((e, index) => {

                        const onclickHandler = () => {
                            // console.log(e);
                            Navigate(`/TV-Series/${e.id}`);
                        }

                        return (
                            <a href='#' onClick={onclickHandler} key={index} >
                                <ImageCard DataArray={e} />
                            </a>
                        )
                    })};
                </div>
            </div>

        </>
    )
}
