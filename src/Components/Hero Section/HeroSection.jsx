import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loader from '../loader/loader';

import "../../App.css"

export default function HeroSection(props) {
    const Navigate = useNavigate();
    const [Show1, setShow1] = useState(false);
    const [Show2, setShow2] = useState(false);
    const [Show3, setShow3] = useState(false);


    const OnclickHandler1 = () => {
        Navigate(`/movie/${props.HeroSectionArray1?.id}`);
    }
    const OnclickHandler2 = () => {
        Navigate(`/movie/${props.HeroSectionArray2?.id}`);
    }
    const OnclickHandler3 = () => {
        Navigate(`/movie/${props.HeroSectionArray3?.id}`);
    }

    return (
        <div id='HeroSection' style={{ position: "relative", height: "90vh" }}>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active"  >
                        {Show1 ? (
                            <div id="herosectiondetails" style={{ position: "absolute", bottom: "10px", left: "10px", color: "white", maxWidth: "50vw", zIndex: "2", padding: "15px", backdropFilter: "blur(5px)", borderRadius: "7px" }} >

                                <p> <strong style={{ fontSize: "25px" }}> {props.HeroSectionArray1?.original_title}</strong> </p>
                                <p>{props.HeroSectionArray1?.overview?.slice(0, 100)} . . . . . .</p>
                                <br></br>
                                <div className="btn btn-primary" onClick={OnclickHandler1}>Visit Movie</div>
                            </div>
                        ) : (<Loader />)}

                        <LazyLoadImage
                            style={{ height: "90vh", width: "100vw", objectFit: "cover", backgroundPosition: "center" }}
                            alt="..."
                            effect="blur"
                            src={`https://image.tmdb.org/t/p/original/${props.HeroSectionArray1?.backdrop_path}`}
                            placeholderSrc={props.HeroSectionArray1?.backdrop_path}
                            onLoad={() => { setShow1(true) }}

                        />



                    </div>

                    <div className="carousel-item" >
                        {Show2 ? (

                            <div id="herosectiondetails" style={{ position: "absolute", bottom: "10px", left: "10px", color: "white", maxWidth: "50vw", zIndex: "2", padding: "15px", backdropFilter: "blur(5px)", borderRadius: "7px" }} >

                                <p> <strong style={{ fontSize: "25px" }}> {props.HeroSectionArray2?.original_title}</strong> </p>
                                <p>{props.HeroSectionArray2?.overview?.slice(0, 100)} . . . . . .</p>
                                <br></br>
                                <div className="btn btn-primary" onClick={OnclickHandler2}>Visit Movie</div>
                            </div>
                        ) : (<Loader />)}
                        <LazyLoadImage
                            style={{ height: "90vh", width: "100vw", objectFit: "cover", backgroundPosition: "center" }}
                            alt="..."
                            effect="blur"
                            src={`https://image.tmdb.org/t/p/original/${props.HeroSectionArray2?.backdrop_path}`}
                            placeholderSrc={props.HeroSectionArray2?.backdrop_path}
                            onLoad={() => { setShow2(true) }}
                        />


                    </div>

                    <div className="carousel-item" >
                        {Show3 ? (

                            <div id="herosectiondetails" style={{ position: "absolute", bottom: "10px", left: "10px", color: "white", maxWidth: "50vw", zIndex: "2", padding: "15px", backdropFilter: "blur(5px)", borderRadius: "7px" }} >

                                <p> <strong style={{ fontSize: "25px" }}> {props.HeroSectionArray3?.original_title}</strong> </p>
                                <p>{props.HeroSectionArray3?.overview?.slice(0, 100)} . . . . . .</p>
                                <br></br>
                                <div className="btn btn-primary" onClick={OnclickHandler3}>Visit Movie</div>
                            </div>
                        ) : (<Loader />)}
                        <LazyLoadImage
                            style={{ height: "90vh", width: "100vw", objectFit: "cover", backgroundPosition: "center" }}
                            alt="..."
                            effect="blur"
                            src={`https://image.tmdb.org/t/p/original/${props.HeroSectionArray3?.backdrop_path}`}
                            placeholderSrc={props.HeroSectionArray3?.backdrop_path}
                            onLoad={() => { setShow3(true) }}
                        />


                    </div>



                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>





        </div>
    )
}
