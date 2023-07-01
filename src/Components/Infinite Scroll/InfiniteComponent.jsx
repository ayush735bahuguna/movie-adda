import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "../Image Card/ImageCard"
import { useNavigate } from 'react-router-dom';

// Data   totalresults   fetchMoreData  Keyword{Movie/TV-Series}

export default function InfiniteComponent(props) {

    const Navigate = useNavigate();
    const [DataLength, setDataLength] = useState(20);

    useEffect(() => {
        setDataLength(props.Data?.length);
    }, [props.Data])

    // console.log(props.Data);
    // console.log(props.Data?.length);

    return (
        <>
            <InfiniteScroll
                dataLength={DataLength}
                next={props.fetchMoreData}
                hasMore={props.Data?.length !== props.totalresults}
                scrollThreshold={.99}
                loader={<div>Loading....</div>}
                endMessage={<h3> No More Images</h3>}
            >

                <div >
                    {props.Data?.map((e, index) => {
                        const onclickHandler = () => {
                            Navigate(`/${props.Keyword}/${e.id}`);
                        }
                        return (
                            <a href='#' onClick={onclickHandler} key={index} style={{ display: "inline-block" }}>
                                <ImageCard DataArray={e} />
                            </a>
                        )
                    })};
                </div>


            </InfiniteScroll>
        </>
    )
}
