import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Image from '../../../Components/Detail Page Components/Image';
import Recommendations from '../../../Components/Detail Page Components/Recommendations';
import Reviews from '../../../Components/Detail Page Components/Reviews';
import Similar from '../../../Components/Detail Page Components/Similar';
import Videos from '../../../Components/Detail Page Components/Videos';
import WatchProviders from '../../../Components/Detail Page Components/WatchProviders';

import "../../Movie Page/MovieDetailPage/MovieDetailPageCss.css"
import Credits from '../../../Components/Detail Page Components/Credits/Credits';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from "../../../Components/Footer/Footer"
import Loader from '../../../Components/loader/loader';
import CircleRating from '../../../Components/circleRating/CircleRating';
import Lazyloadimage from '../../../Components/Image Lazy loading/Lazyloadimage';

import NoPoster from "../../../asset/no-poster.png";


export default function TvDetailPage() {
    const params = useParams();
    const [Data, setData] = useState();
    const [loading, setloading] = useState(true);

    const fetchApi = async () => {
        try {
            setloading(true);
            var url = `https://api.themoviedb.org/3/tv/${params.id}?api_key=d1c9a9af41297f93b7ade6e2e96a03fd&language=en-US`;
            let data = await fetch(url);
            setloading(true);
            let parsedData = await data.json();
            setData(parsedData);
            setloading(false);
            // console.log(parsedData);
        }
        catch (err) {
            setloading(false);
            console.log(err.message + "error msg from fetch api");
        }
    }


    useEffect(() => { fetchApi() }, []);
    useEffect(() => { fetchApi() }, [params.id]);

    return (
        <>
            {loading && <h1> <Loader /></h1>}
            {!loading && <div id='Container'>
                <LazyLoadImage
                    id="background_img"
                    alt="..."
                    effect="blur"
                    src={`https://image.tmdb.org/t/p/w500/${Data?.backdrop_path}`}
                    placeholderSrc={Data?.backdrop_path}
                />

                <div id="content">

                    <div id="img_wrapper">
                        {Data?.poster_path !== null ? (
                            <img src={`https://image.tmdb.org/t/p/w500/${Data?.poster_path}`} alt="poster" id="poster" />
                        ) : (<img src={NoPoster} alt="poster" id="poster" />)}
                    </div>

                    <div id="details">

                        <span id="title">{Data?.original_name}</span>
                        <div id="tagline" className='movieSmallDetails'> " {Data?.tagline}  "</div>

                        <div id='geners'>
                            {Data?.genres.map((e, index) => <div id='genersTag' className="badge text-bg-secondary" key={index}>{e.name}</div>)}
                        </div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "5px" }}>
                            <div id="vote_average" style={{ width: "60px" }}>
                                <CircleRating rating={Data?.vote_average?.toFixed(1)} />
                            </div>

                            <div></div>
                        </div>

                        <span className='movieSmallDetails' style={{ margin: "5px" }} > {Data?.status}</span>

                        <div id="release_date">First Air Date : {Data?.first_air_date}</div>

                        <hr></hr>
                        <div id="overview">
                            Details :<span className='movieSmallDetails'> {Data?.overview}</span>
                        </div>
                        <hr></hr>

                        <div id="number_of_episodes">
                            Number Of Episodes  :  <span className='movieSmallDetails'>    {Data?.number_of_episodes}</span></div>
                        <div id="number_of_seasons">
                            Number Of Seasons  :  <span className='movieSmallDetails'>   {Data?.number_of_seasons}</span></div>


                        <hr></hr>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", width: "100%" }}>

                            {Data?.last_episode_to_air !== null ? (
                                <div style={{ textAlign: "center", margin: "5px" }}>
                                    <div>Last episode To Air</div>

                                    <LazyLoadImage
                                        style={{ width: "100%", maxWidth: "273px", borderRadius: "7px" }}
                                        alt="..."
                                        effect="blur"
                                        src={`https://image.tmdb.org/t/p/w500/${Data?.last_episode_to_air?.still_path}`}
                                        placeholderSrc={Data?.last_episode_to_air?.still_path}
                                    />

                                    <div>
                                        Name :&nbsp;
                                        <span className='movieSmallDetails'>{Data?.last_episode_to_air?.name}</span>
                                    </div>

                                    <div>
                                        Episode No :
                                        <span className='movieSmallDetails'>{Data?.last_episode_to_air?.episode_number}</span>
                                    </div>


                                </div>) : ("")}

                            {Data?.next_episode_to_air !== null ? (<div style={{ textAlign: "center", margin: "5px" }}>
                                <div>Next episode To Air</div>

                                <LazyLoadImage
                                    style={{ width: "100%", maxWidth: "273px", borderRadius: "7px" }}
                                    alt="..."
                                    effect="blur"
                                    src={`https://image.tmdb.org/t/p/w500/${Data?.next_episode_to_air?.still_path}`}
                                    placeholderSrc={Data?.next_episode_to_air?.still_path}
                                />



                                <div>
                                    Name :&nbsp;
                                    <span className='movieSmallDetails'>{Data?.next_episode_to_air?.name}</span>
                                </div>

                                <div>
                                    Episode No :
                                    <span className='movieSmallDetails'>{Data?.next_episode_to_air?.episode_number}</span>
                                </div>



                            </div>) : ("")}


                        </div>



                        <hr></hr>

                        Production Companies :
                        <div id='production_companies' style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", alignContent: "center", alignItems: "center"
                        }}>

                            {Data?.production_companies.map((e, index) =>
                                <div key={index} className='movieSmallDetails' style={{ display: "flex", alignItems: "center", width: "fit-content", margin: "5px", flexDirection: "column" }}>
                                    <p> {e?.name}</p>
                                    <Lazyloadimage imgurl={e?.logo_path} css={{ height: "60px", width: "100px", ObjectFit: "contain", margin: "10px" }} />
                                </div>
                            )}
                        </div>

                        <hr></hr>

                        <div id="homepage"><a href={Data?.homepage}>Homepage</a> </div>
                    </div>


                </div >

                <div className="tabs">
                    <WatchProviders movieId={Data?.id} keyWord={"tv"} />
                </div>
                <div className="tabs">
                    <Credits movieId={Data?.id} keyWord={"tv"} />
                </div>



                <div className="tabs mediaTabs">
                    <h3>Media</h3>
                    <ul className="nav nav-pills mb-3" id="pills-tab1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-image-tab" data-bs-toggle="pill" data-bs-target="#pills-image" type="button" role="tab" aria-controls="pills-image" aria-selected="false">Related Images</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Related Videos</button>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent" >

                        <div className="tab-pane fade show active" id="pills-image" role="tabpanel" aria-labelledby="pills-image-tab" tabIndex="0">

                            <Image movieId={Data?.id} keyWord={"tv"} />
                        </div>

                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                            <Videos movieId={Data?.id} keyWord={"tv"} />
                        </div>

                    </div>
                </div>

                <div className="tabs OtherTabs">
                    <h3>Suggestion</h3>

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Recommendations</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Similar Tv-Series</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" type="button" role="tab" aria-controls="pills-reviews" aria-selected="false">Reviews</button>
                        </li>

                    </ul>

                    <div className="tab-content" id="pills-tabContent" >
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                            <Recommendations movieId={Data?.id} keyWord={"tv"} />
                        </div>

                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                            <Similar movieId={Data?.id} keyWord={"tv"} />
                        </div>

                        <div className="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab" tabIndex="0">
                            <Reviews movieId={Data?.id} keyWord={"tv"} />
                        </div>

                    </div>

                </div>

                <Footer />

            </div >}
        </>
    )
}
