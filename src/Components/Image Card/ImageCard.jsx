import React from 'react'

export default function ImageCard(props) {

    return (
        <>
            <img width={"250px"} src={`https://image.tmdb.org/t/p/w500/${props.ImageUrl}`} alt={props.Description} />
        </>
    )
}
