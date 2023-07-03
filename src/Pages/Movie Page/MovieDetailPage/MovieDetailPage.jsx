import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import "./MovieDetailPageCss.css"
import Recommendations from './Elements/Recommendations';
import Similar from './Elements/Similar';
import Videos from './Elements/Videos';


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


    useEffect(() => {
        fetchApi();
    }, [params.id]);

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <>
            <div id="Main_Wrapper" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${Data?.backdrop_path})`,
                backgroundColor: "#00000060",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundBlendMode: "color-dodge",
                width: "100vw",
                height: "100vh",
            }}>

                <div id="content" style={{ display: "flex", flexWrap: "wrap", paddingTop: "300px" }}>
                    <div id="img_wrapper">
                        <img src={`https://image.tmdb.org/t/p/w500/${Data?.poster_path}`} alt="poster" id="poster" />
                    </div>

                    <div id="details">
                        <div id="title">{Data?.original_title}</div>
                        <div id="release_date">Release Date : {Data?.release_date}</div>
                        <div id="language">language : {Data?.original_language}</div>
                        <div id="homepage"><a href={Data?.homepage}>Homepage</a> </div>
                        <div id="vote_average"> Average vote : {Data?.vote_average}</div>
                        <div id="vote_count"> Vote Count : {Data?.vote_count}</div>
                        <div id="overview"> Details : {Data?.overview}</div>
                        <div id="status">status : {Data?.status}</div>
                        <div id="popularity">popularity : {Data?.popularity}</div>
                        <div id="run_time">run time : {Data?.runtime} min</div>
                        <div id="revenue">revenue : {Data?.revenue} </div>
                        <div id="budget">budget : {Data?.budget} </div>
                        <div id="tagline">tagline : {Data?.tagline} </div>
                        <div id='geners'> Geners: {Data?.genres.map((e, index) => <div className="badge text-bg-secondary" key={index}>{e.name}</div>)} </div>
                        <div id='production_companies'> Production Companies:
                            {Data?.production_companies.map((e, index) => <div key={index}>
                                {e?.name}
                                <img width={"100px"} src={`https://image.tmdb.org/t/p/w500/${e?.logo_path}`} alt="poster" id="poster" />
                                {e?.origin_country}
                            </div>)}
                        </div>
                    </div>
                </div >


                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Recommendations</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Similar Movies</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Related Videos</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"> <Recommendations movieId={Data?.id} /></div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"> <Similar movieId={Data?.id} /></div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">   <Videos movieId={Data?.id} /></div>
                </div>





            </div>
        </>
    )
}
