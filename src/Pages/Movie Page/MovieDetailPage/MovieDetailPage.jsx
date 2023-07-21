import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import "./MovieDetailPageCss.css"
import Recommendations from '../../../Components/Detail Page Components/Recommendations';
import Similar from '../../../Components/Detail Page Components/Similar';
import Videos from '../../../Components/Detail Page Components/videosSection/Videos';
import Image from '../../../Components/Detail Page Components/Image';
import Reviews from '../../../Components/Detail Page Components/Reviews';
import WatchProviders from '../../../Components/Detail Page Components/watch provider/WatchProviders';
import Credits from '../../../Components/Detail Page Components/Credits/Credits';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from "../../../Components/Footer/Footer"
import Loader from '../../../Components/loader/loader';
import CircleRating from '../../../Components/circleRating/CircleRating';
import Lazyloadimage from '../../../Components/Image Lazy loading/Lazyloadimage';
import NoPoster from "../../../asset/no-poster.png";
import dayjs from 'dayjs';



export default function MovieDetailPage() {

    const params = useParams();
    const [Data, setData] = useState();
    const [loading, setloading] = useState(true);


    const fetchApi = async () => {
        try {
            setloading(true);
            var url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=d1c9a9af41297f93b7ade6e2e96a03fd&language=en-US`;
            let data = await fetch(url);
            setloading(true);
            let parsedData = await data.json();
            setData(parsedData);
            setloading(false);
        }
        catch (err) {
            setloading(false);
            console.log(err.message + "error msg from fetch api");
        }
    }

    useEffect(() => { fetchApi() }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , []);

    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    return (
        <>
            {loading && <h1> <Loader /></h1>}
            {!loading && <div id='Container'>

                {Data?.backdrop_path !== null ? (
                    <LazyLoadImage
                        id="background_img"
                        alt="..."
                        effect="blur"
                        src={`https://image.tmdb.org/t/p/w780/${Data?.backdrop_path}`}
                        placeholderSrc={Data?.backdrop_path}
                    />
                ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                        <div> No background image </div>
                    </div>
                )}



                <div id="content"  >

                    <div id="img_wrapper">
                        {Data?.poster_path !== null ? (
                            <img src={`https://image.tmdb.org/t/p/w342/${Data?.poster_path}`} alt="poster" id="poster" />
                        ) : (<img src={NoPoster} alt="poster" id="poster" />)}
                    </div>


                    <div id="details">
                        <span id="title">{Data?.original_title}</span>

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

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0px 10px 0px 0px" }}>
                            <div>
                                Release Date : <span className='movieSmallDetails'>
                                    {dayjs(Data?.release_date).format("MMM D, YYYY")}
                                </span>
                            </div>
                            <div>
                                Run-time : <span className='movieSmallDetails'> {Data?.runtime} min</span>
                            </div>
                            <div></div>
                        </div>

                        <hr></hr>
                        <div id="overview">
                            Details :<span className='movieSmallDetails'> {Data?.overview}</span>
                        </div>
                        <hr></hr>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div>
                                budget :  <span className='movieSmallDetails'> ${Data?.budget} </span>
                            </div>
                            <div>
                                revenue :    <span className='movieSmallDetails'> ${Data?.revenue} </span>
                            </div>
                            <div></div>


                        </div>

                        <hr></hr>

                        <div className="accordion" id="accordionExample">
                            {Data?.production_companies !== undefined ? (
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                                            Production Companies :
                                        </button>

                                    </h2>

                                    <div id="collapseThree" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div id='production_companies' style={{
                                                display: "grid",
                                                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", alignContent: "center", alignItems: "center"
                                            }}>
                                                {Data?.production_companies.map((e, index) =>
                                                    <div key={index} className='movieSmallDetails' style={{ display: "flex", alignItems: "center", width: "120px", margin: "5px", flexDirection: "column" }}>

                                                        <p style={{ textAlign: "center" }}> {e?.name}</p>

                                                        <Lazyloadimage imgurl={e?.logo_path} css={{ height: "auto", width: "60px", ObjectFit: "contain", margin: "10px" }} />

                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : ("")}
                        </div>

                        <div style={{ margin: "10px" }} id="homepage">
                            <a href={Data?.homepage}> Homepage</a> </div>
                    </div>

                </div >

                <div className="tabs">
                    <WatchProviders movieId={Data?.id} keyWord={"movie"} />
                </div>
                <div className="tabs">
                    <Credits movieId={Data?.id} keyWord={"movie"} />
                </div>

                <div className="tabs mediaTabs">
                    <h3>Media</h3>
                    <ul className="nav nav-pills mb-3" id="pills-tab1" role="tablist" >
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-image-tab" data-bs-toggle="pill" data-bs-target="#pills-image" type="button" role="tab" aria-controls="pills-image" aria-selected="false">Related Images</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Related Videos</button>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent" >

                        <div className="tab-pane fade show active" id="pills-image" role="tabpanel" aria-labelledby="pills-image-tab" tabIndex="0">

                            <Image movieId={Data?.id} keyWord={"movie"} />
                        </div>

                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                            <Videos movieId={Data?.id} keyWord={"movie"} />
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
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Similar Movies</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" type="button" role="tab" aria-controls="pills-reviews" aria-selected="false">Reviews</button>
                        </li>

                    </ul>

                    <div className="tab-content" id="pills-tabContent" >
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                            <Recommendations movieId={Data?.id} keyWord={"movie"} />
                        </div>

                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                            <Similar movieId={Data?.id} keyWord={"movie"} />
                        </div>

                        <div className="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab" tabIndex="0">
                            <Reviews movieId={Data?.id} keyWord={"movie"} />
                        </div>

                    </div>

                </div>

                <Footer />
            </div >

            }
        </>
    )
}
