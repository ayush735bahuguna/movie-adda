import '../../App.css'

import ImageCard from "../Image Card/ImageCard"
import useFetch from "../../Api/useFetch"
import { useEffect } from 'react';
import Lazyloadimage from '../Image Lazy loading/Lazyloadimage';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';

export default function Credits(props) {

    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/credits`);
    // console.log(data?.cast[0]);
    return (

        <>
            {loading && <h1> <Loader />  </h1>}
            {!loading &&
                <>
                    <h3>Highly Paid cast</h3>


                    <div className='horizontalScrollComponent'>

                        {data?.cast?.slice(0, 10).map((e, index) => {
                            return (
                                <div key={index} style={{ margin: "5px", textAlign: "center" }}>
                                    <Lazyloadimage imgurl={e.profile_path} css={{ height: "auto", width: "150px" }} />
                                    <div id="creditName" style={{ fontWeight: "600" }}>{e.character}</div>
                                    <div id="creditOriginalName"> [&nbsp;{e.original_name}&nbsp;]</div>
                                </div>
                            )
                        })}

                        <div >
                            <i style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80%", width: "100px", cursor: "pointer", fontSize: "50px" }} className="bi bi-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                </>}
        </>
    )
}
