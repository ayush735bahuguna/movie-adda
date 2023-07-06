import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import "./MovieDetailPageCss.css"
import Recommendations from '../../../Components/Detail Page Components/Recommendations';
import Similar from '../../../Components/Detail Page Components/Similar';
import Videos from '../../../Components/Detail Page Components/Videos';
import Image from '../../../Components/Detail Page Components/Image';
import Reviews from '../../../Components/Detail Page Components/Reviews';
import WatchProviders from '../../../Components/Detail Page Components/WatchProviders';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function MovieDetailPage() {

    const params = useParams();
    const [Data, setData] = useState();

    const fetchApi = async () => {
        try {
            var url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=d1c9a9af41297f93b7ade6e2e96a03fd&language=en-US`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setData(parsedData);
        }
        catch (err) {
            console.log(err.message + "error msg from fetch api");
        }
    }

    useEffect(() => { fetchApi() }, [params.id]);
    useEffect(() => { fetchApi() }, []);

    return (
        <>

            <LazyLoadImage
                id="background_img"
                alt="..."
                effect="blur"
                src={`https://image.tmdb.org/t/p/w500/${Data?.backdrop_path}`}
                placeholderSrc={Data?.backdrop_path}
            />

            <div id="content" >

                <div id="img_wrapper">
                    <img src={`https://image.tmdb.org/t/p/w500/${Data?.poster_path}`} alt="poster" id="poster" />
                </div>


                <div id="details">
                    <div id="title">{Data?.original_title}</div>
                    <div id='geners'>  {Data?.genres.map((e, index) => <div id='genersTag' className="badge text-bg-secondary" key={index}>{e.name}</div>)} </div>
                    <div id="language">language : {Data?.original_language}</div>
                    <div id="release_date">Release Date : {Data?.release_date}</div>
                    <div id="vote_average"> Average vote : {Data?.vote_average}</div>
                    <div id="vote_count"> Vote Count : {Data?.vote_count}</div>
                    <div id="overview"> Details : {Data?.overview}</div>
                    <div id="status">status : {Data?.status}</div>

                    <div id="popularity">popularity : {Data?.popularity}</div>

                    <div id="run_time">run time : {Data?.runtime} min</div>
                    <div id="revenue">revenue : ${Data?.revenue} </div>
                    <div id="budget">budget : ${Data?.budget} </div>
                    <div id="tagline">tagline : {Data?.tagline} </div>
                    <div id='production_companies'> Production Companies:
                        {Data?.production_companies.map((e, index) => <div key={index}>
                            {e?.name}
                            <img width={"100px"} src={`https://image.tmdb.org/t/p/w500/${e?.logo_path}`} alt="poster" />
                            {e?.origin_country}
                        </div>)}
                    </div>
                    <div id="homepage"><a href={Data?.homepage}>Homepage</a> </div>
                </div>

            </div >

            <div id="tabs">

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
                        <Recommendations movieId={Data?.id} keyWord={"movie"} />
                    </div>

                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        <Similar movieId={Data?.id} keyWord={"movie"} />
                    </div>

                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                        <Videos movieId={Data?.id} keyWord={"movie"} />
                    </div>

                    <div className="tab-pane fade" id="pills-image" role="tabpanel" aria-labelledby="pills-image-tab" tabIndex="0">
                        <Image movieId={Data?.id} keyWord={"movie"} />
                    </div>

                    <div className="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab" tabIndex="0">
                        <Reviews movieId={Data?.id} keyWord={"movie"} />
                    </div>

                    <div className="tab-pane fade" id="pills-watch" role="tabpanel" aria-labelledby="pills-reviews-tab" tabIndex="0">
                        <WatchProviders movieId={Data?.id} keyWord={"movie"} />
                    </div>


                </div>

            </div>

        </>

    )
}
