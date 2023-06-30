import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import "./TvDetailPage.css"


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

                        {/* <div id="status">status : {Data?.status}</div>
                        <div id="popularity">popularity : {Data?.popularity}</div>
                        <div id="run_time">run time : {Data?.runtime} min</div>
                        <div id="revenue">revenue : {Data?.revenue} </div>
                        <div id="budget">budget : {Data?.budget} </div>
                        <div id="tagline">tagline : {Data?.tagline} </div> */}

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

            </div>
        </>
    )
}
