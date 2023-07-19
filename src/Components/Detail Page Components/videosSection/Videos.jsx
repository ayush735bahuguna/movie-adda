import '../../../App.css'
import useFetch from "../../../Api/useFetch"
import Loader from '../../loader/loader';
import ReactPlayer from "react-player/youtube";

const VideosSection = (props) => {

    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/videos`);





    return (

        <>
            {loading && <h1><Loader /></h1>}
            {!loading && <div className='horizontalScrollComponent' style={{ height: "210px" }}>

                {data?.results?.slice(0, 10)?.length !== 0 ? (
                    data?.results?.slice(0, 2).map((e, index) => {
                        return (
                            <div key={index} style={{ width: "400px", margin: "5px" }}>
                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=${e.key}`}
                                    controls
                                    width="100%"
                                    height="100%"
                                // playing={true}
                                />
                            </div>
                        )
                    })
                ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "150px" }}>
                        <div> No Videos Available </div>
                    </div>
                )}
            </div>
            }

        </>

    );
};

export default VideosSection;
