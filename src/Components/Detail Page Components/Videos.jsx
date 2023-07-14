import '../../App.css'
import useFetch from "../../Api/useFetch"
import Loader from '../loader/loader';

export default function Videos(props) {

    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/videos`);
    // console.log(data?.results);

    return (

        <>
            {loading && <h1><Loader /></h1>}
            {!loading && <div className='horizontalScrollComponent' style={{ height: "210px" }}>

                {data?.results?.slice(0, 10)?.length !== 0 ? (
                    data?.results?.slice(0, 2).map((e, index) => {
                        return (
                            <div key={index} style={{ width: "400px", margin: "5px" }}>
                                {e?.key}
                                {/* <div className="ratio ratio-16x9">
                                <iframe src={`https://www.youtube.com/embed/${e?.key}?rel=0`} title="YouTube video" allowFullScreen></iframe>
                            </div> */}
                            </div>
                        )
                    })
                ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "150px" }}>
                        <div> No Videos Available </div>
                    </div>
                )}


            </div>}
        </>
    )
}
