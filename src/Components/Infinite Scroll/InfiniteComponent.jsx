import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "../Image Card/ImageCard"
import Loader from "../loader/loader"

export default function InfiniteComponent(props) {

    const [DataLength, setDataLength] = useState(20);

    useEffect(() => {
        setDataLength(props.Data?.length);
    }, [props.Data])

    useEffect(() => {
        setDataLength(props.Data?.length);
    }, [])

    // console.log(props.Data);
    // console.log(props.Data?.length);
    // console.log(props.Data?.length);

    // console.log("totalresults");
    // console.log(props);
    return (
        <>
            <InfiniteScroll
                dataLength={DataLength}
                next={props.fetchMoreData}
                hasMore={props.Data?.length !== props.totalresults}
                scrollThreshold={.99}
                loader={<div> <Loader /> </div>}
                endMessage={<h3 style={{ textAlign: 'center', margin: "20px" }}> No More Items</h3>}
            >


                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(235px, 1fr))", justifyContent: "center", alignItems: "center" }}>


                    {props.Data?.map((e, index) => {
                        return (
                            <a href={`/${props.Keyword}/${e.id}`} key={index} style={{ display: "inline-block", width: "fit-content" }}>
                                <ImageCard DataArray={e} />
                            </a>
                        )
                    })}
                </div>


            </InfiniteScroll>
        </>
    )
}
