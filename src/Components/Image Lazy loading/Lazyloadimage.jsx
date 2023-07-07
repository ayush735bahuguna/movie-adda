import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Lazyloadimage(props) {
    return (

        <LazyLoadImage
            style={props.css}
            alt="..."
            effect="blur"
            src={`https://image.tmdb.org/t/p/w500/${props.imgurl}`}
            placeholderSrc={props.imgurl}
        />
    )
}
