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
            {!loading && <div className='horizontalScrollComponent'>

                {data?.backdrops?.slice(0, 6).map((e, index) => {

                    return (
                        <a href={`https://image.tmdb.org/t/p/w500/${e.file_path}`} target="_blank" key={index} >
                            <Lazyloadimage imgurl={e.file_path} css={{ margin: "5px", height: "200px", width: "auto", cursor: "pointer" }} />
                        </a>
                    )
                })}

                <div >
                    <i style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100px", cursor: "pointer", fontSize: "50px" }} className="bi bi-arrow-right-circle-fill"></i>
                </div>

            </div>}

        </>
    )
}
