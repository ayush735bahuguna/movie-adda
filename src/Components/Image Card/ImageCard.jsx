import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CircleRating from "../circleRating/CircleRating"
import "./imageCard.css"
import dayjs from 'dayjs';
import NoPoster from "../../asset/no-poster.png";

export default function ImageCard(props) {
    // console.log(props.DataArray);
    return (
        <div style={{ margin: "5px", width: "220px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", position: "relative", backgroundColor: "#eceaea", borderRadius: "7px", height: "410px", overflow: "hidden" }}>

            {props.DataArray?.poster_path !== null ? (<LazyLoadImage
                style={{ borderRadius: "7px 7px 0 0" }}
                alt="..."
                width={"220px"}
                effect="blur"
                src={`https://image.tmdb.org/t/p/w500/${props.DataArray?.poster_path}`}
                placeholderSrc={props.DataArray?.id}
            />) : (<img width="220px" style={{ borderRadius: "7px 7px 0 0" }} src={NoPoster} alt='.' />)}



            <div style={{ textAlign: "center", margin: "5px" }}>

                <p style={{ fontWeight: "600" }}>
                    {/* display wrt keyword given props */}
                    {props.DataArray?.title}
                    {props.DataArray?.original_name}
                </p>
                <span className="date">
                    {dayjs(props.DataArray?.release_date).format("MMM D, YYYY")}
                </span>

            </div>

            <div id="imageCardOverlay">
                <CircleRating rating={props.DataArray?.vote_average?.toFixed(1)} />
            </div>
        </div>
    )
}
