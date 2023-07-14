import '../../App.css'
import useFetch from "../../Api/useFetch"
import Lazyloadimage from '../Image Lazy loading/Lazyloadimage';

import Loader from '../loader/loader';


export default function Image(props) {
    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/images`);
    // console.log(data?.backdrops?.file_path);

    return (

        <>
            {loading && <h1><Loader /></h1>}
            {!loading && <div className='horizontalScrollComponent' style={{ height: "210px" }}>

                {data?.backdrops?.slice(0, 10)?.length !== 0 ? (
                    data?.backdrops?.slice(0, 6).map((e, index) => {
                        return (
                            <div>
                                {e.file_path !== null ?
                                    <div>
                                        <a href={`https://image.tmdb.org/t/p/w500/${e.file_path}`} target="_blank" key={index} >
                                            <Lazyloadimage imgurl={e.file_path} css={{ margin: "5px", height: "200px", width: "auto", cursor: "pointer", borderRadius: "7px" }} />
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
