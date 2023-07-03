import React from 'react'

export default function ImageCard(props) {
    // console.log(props.DataArray);
    return (
        <div style={{ margin: "5px", display: "inline-block", width: "260px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>


            <img width={"250px"} src={`https://image.tmdb.org/t/p/w500/${props.DataArray?.poster_path}`} alt={props.DataArray?.id} />


            <p style={{ textAlign: "center", fontWeight: "600" }}>
                {/* display wrt keyword given props */}
                {props.DataArray?.title}
                {props.DataArray?.original_name}
            </p>

            <p>{props.DataArray?.popularity}</p>
        </div>
    )
}
