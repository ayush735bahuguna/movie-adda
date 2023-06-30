import React from 'react'

export default function ImageCard(props) {
    // console.log(props.DataArray);
    return (
        <>
            <img width={"250px"} src={`https://image.tmdb.org/t/p/w500/${props.DataArray.poster_path}`} alt={props.DataArray.id} />
            <p>{props.DataArray.title}</p>
            <p>{props.DataArray.original_name}</p>
            <p>{props.DataArray.popularity}</p>
        </>
    )
}
