import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import "./TvDetailPage.css"
import Image from './Elements/Images';
import Recommendations from './Elements/Recommendations';
import Reviews from './Elements/Reviews';
import Similar from './Elements/Similar';
import Videos from './Elements/Videos';
import WatchProviders from './Elements/WatchProviders';



export default function TvDetailPage() {
    const params = useParams();
    const [Data, setData] = useState();

    const fetchApi = async () => {
        try {
            var url = `https://api.themoviedb.org/3/tv/${params.id}?api_key=d1c9a9af41297f93b7ade6e2e96a03fd&language=en-US`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setData(parsedData);
            // console.log(parsedData);
        }
        catch (err) {
            console.log(err.message + "error msg from fetch api");
        }
    }


    useEffect(() => { fetchApi() }, []);
    useEffect(() => { fetchApi() }, [params.id]);

    return (
        <>
            <div id="Main_Wrapper"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${Data?.backdrop_path})`, backgroundColor: "#00000060", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundBlendMode: "color-dodge", width: "100vw", height: "100vh",
                }}
            >

                <div id="content" style={{ paddingTop: "300px" }}>
                    <div id="img_wrapper">
                        <img src={`https://image.tmdb.org/t/p/w500/${Data?.poster_path}`} alt="poster" id="poster" />
                    </div>
                    <div id="details">
                        <div id="title">{Data?.original_name}</div>
                        <div id="status">{Data?.status}</div>
                        <div id="release_date">First Air Date : {Data?.first_air_date}</div>
                        <div id="language">language : {Data?.original_language}</div>
                        <div id="homepage"><a href={Data?.homepage}>Homepage</a> </div>
                        <div id="vote_average"> Average vote : {Data?.vote_average}</div>
                        <div id="vote_count"> Vote Count : {Data?.vote_count}</div>
                        <div id="number_of_episodes"> Number Of Episodes : {Data?.number_of_episodes}</div>
                        <div id="number_of_seasons"> Number Of Seasons : {Data?.number_of_seasons}</div>

                        <div id='geners'> Geners: {Data?.genres.map((e, index) => <div key={index}>{e.name}</div>)} </div>
                        <div id='production_companies'> Production Companies:
                            {Data?.production_companies.map((e, index) => <div key={index}>
                                {e?.name}
                                <img width={"100px"} src={`https://image.tmdb.org/t/p/w500/${e?.logo_path}`} alt="poster" id="poster" />
                                {e?.origin_country}
                            </div>)}
                        </div>
                    </div>
                </div >


                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Recommendations</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Similar Movies</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Related Videos</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-image-tab" data-bs-toggle="pill" data-bs-target="#pills-image" type="button" role="tab" aria-controls="pills-image" aria-selected="false">Related Images</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" type="button" role="tab" aria-controls="pills-reviews" aria-selected="false">Reviews</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-watch-tab" data-bs-toggle="pill" data-bs-target="#pills-watch" type="button" role="tab" aria-controls="pills-watch" aria-selected="false">Watch</button>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent" >
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <Recommendations movieId={Data?.id} />

                    </div>

                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        <Similar movieId={Data?.id} />
                    </div>

                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                        < Videos movieId={Data?.id} />
                    </div>

                    <div className="tab-pane fade" id="pills-image" role="tabpanel" aria-labelledby="pills-image-tab" tabIndex="0">
                        <Image movieId={Data?.id} />
                    </div>

                    <div className="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab" tabIndex="0">
                        <Reviews movieId={Data?.id} />
                    </div>

                    <div className="tab-pane fade" id="pills-watch" role="tabpanel" aria-labelledby="pills-reviews-tab" tabIndex="0">
                        <WatchProviders movieId={Data?.id} />
                    </div>


                </div>

            </div>
        </>
    )
}
