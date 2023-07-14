import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loader from '../loader/loader';

import "../../App.css"

export default function HeroSection(props) {
    const Navigate = useNavigate();
    const [Show, setShow] = useState(false);

    // console.log(props.HeroSectionArray);

    const OnclickHandler = () => {
        Navigate(`/movie/${props.HeroSectionArray?.id}`);
    }

    return (
        <div id='HeroSection' style={{ position: "relative", height: "90vh" }}>

            {Show ? (
                <div id="herosectiondetails" style={{ position: "absolute", bottom: "10px", left: "10px", color: "white", maxWidth: "50vw", zIndex: "1", padding: "15px", backdropFilter: "blur(5px)", borderRadius: "7px" }} >

                    <p> <strong style={{ fontSize: "25px" }}> {props.HeroSectionArray?.original_title}</strong> </p>
                    <p>{props.HeroSectionArray?.overview?.slice(0, 100)} . . . . . .</p>
                    <p>{props.HeroSectionArray?.popularity}</p>

                    <br></br>

                    <div className="btn btn-primary" onClick={OnclickHandler}>Visit Movie</div>

                </div>) : (<Loader />)
            }

            <div id="heroSectionImg">

                <LazyLoadImage
                    style={{ height: "90vh", width: "100vw", objectFit: "cover", backgroundPosition: "center" }}
                    alt="..."
                    effect="blur"
                    src={`https://image.tmdb.org/t/p/original/${props.HeroSectionArray?.backdrop_path}`}
                    placeholderSrc={props.HeroSectionArray?.backdrop_path}
                    onLoad={() => { setShow(true) }}
                />

            </div>

        </div>
    )
}
