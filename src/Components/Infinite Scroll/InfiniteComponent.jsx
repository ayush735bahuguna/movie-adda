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

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignContent: "center", alignItems: "center" }}>


                    {props.Data?.map((e, index) => {
                        return (
                            <a href={`/${props.Keyword}/${e.id}`} key={index} style={{ display: "inline-block" }}>
                                <ImageCard DataArray={e} />
                            </a>
                        )
                    })};
                </div>


            </InfiniteScroll>
        </>
    )
}
