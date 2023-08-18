import '../../App.css'
import useFetch from "../../Api/useFetch"
import Lazyloadimage from '../Image Lazy loading/Lazyloadimage';

import Loader from '../loader/loader';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context'
import { useEffect } from 'react';

export default function Image(props) {
    const { setAllImages } = useGlobalContext()
    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/images`);
    useEffect(() => {
        setAllImages(data)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])
    // console.log(data?.backdrops?.file_path);

    return (

        <>

            {loading && <h1><Loader /></h1>}
            <Link to="/allImages">More Images</Link>
            {!loading && <div className='horizontalScrollComponent' style={{ height: "280px" }}>

                {data?.backdrops?.length !== 0 ? (
                    data?.backdrops?.slice(0, 6).map((e, index) => {
                        return (
                            <div key={index}>
                                {e.file_path !== null ?
                                    <div>
                                        <a className='link' rel="noopener noreferrer" href={`https://image.tmdb.org/t/p/original/${e.file_path}`} target="_blank" >
                                            <Lazyloadimage imgurl={e.file_path} css={{ margin: "5px", height: "270px", width: "auto", cursor: "pointer", borderRadius: "7px" }} />
                                        </a>
                                    </div>
                                    : ""}
                            </div>)
                    })
                ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "150px" }}>
                        <div> No Images Available </div>
                    </div>
                )}
            </div>}

        </>
    )
}
