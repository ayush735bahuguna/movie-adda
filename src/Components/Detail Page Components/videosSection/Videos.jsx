import { useState } from 'react';
import '../../../App.css'
import useFetch from "../../../Api/useFetch"
import Loader from '../../loader/loader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import VideoPopup from "./videoPopup";

const VideosSection = (props) => {

    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/videos`);
    const [videokey, setVideokey] = useState(null);
    const [Videoname, setVideoname] = useState(null);


    document.getElementById("myModal")?.addEventListener('hidden.bs.modal', function () {
        setVideokey(null)
    })

    return (

        <>
            {loading && <h1><Loader /></h1>}
            {!loading && <div className='horizontalScrollComponent' style={{ height: "280px" }}>

                {data?.results?.length !== 0 ? (
                    data?.results?.slice(0, 10).map((e, index) => {
                        const onclickHandler = () => {
                            setVideokey(e.key)
                            setVideoname(e.name)
                        }
                        return (
                            <div key={index} style={{ display: "flex", flexDirection: "column", position: "relative" }} onClick={onclickHandler} data-bs-toggle="modal" data-bs-target="#myModal">

                                <LazyLoadImage style={{ width: "400px", height: "auto", borderRadius: "10px", margin: "5px" }} src={`https://img.youtube.com/vi/${e.key}/mqdefault.jpg`} />

                                <div id='playButton'>
                                    <i class="bi bi-play-circle"></i>
                                </div>

                                <p style={{ height: "70x", textAlign: "center" }}>{e.name}</p>

                            </div >
                        )
                    })
                ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "150px" }}>
                        <div> No Videos Available </div>
                    </div>
                )}


                <VideoPopup videokey={videokey} Videoname={Videoname} />

            </div >}
        </>

    );
};

export default VideosSection;
