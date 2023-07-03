import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function HeroSection(props) {
    const Navigate = useNavigate();

    // console.log(props.HeroSectionArray);

    const OnclickHandler = () => {
        Navigate(`/movie/${props.HeroSectionArray?.id}`);
    }

    return (
        <div id='HeroSection' style={{ position: "relative", height: "90vh" }}>
            <div id="herosectiondetails" style={{ position: "absolute", bottom: "10px", left: "10px", color: "white", maxWidth: "50vw" }} >
                <p> <strong style={{ fontSize: "25px" }}> {props.HeroSectionArray?.original_title}</strong> </p>
                <p>{props.HeroSectionArray?.overview}</p>
                <p>{props.HeroSectionArray?.popularity}</p>
                <br></br>
                <div className="btn btn-primary" onClick={OnclickHandler}>Visit Movie</div>
            </div>
            <div id="heroSectionImg">

                <img style={{ height: "90vh", width: "100vw", objectFit: "cover" }} src={`https://image.tmdb.org/t/p/w780/${props.HeroSectionArray?.backdrop_path}`} alt="." />

            </div>
        </div>
    )
}
