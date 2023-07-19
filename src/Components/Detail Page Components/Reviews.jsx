import '../../App.css'
import useFetch from "../../Api/useFetch"
import Loader from '../loader/loader';

export default function Reviews(props) {
    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/reviews`);

    return (
        <>
            {loading && <h1><Loader /></h1>}
            {!loading && <div className='horizontalScrollComponent' style={{
                height: "420px", flexGrow: "0",
                flexShrink: "0", alignItems: "center"
            }}>
                {data?.results.length !== 0 ? (
                    data?.results?.map((e, index) => {
                        return (
                            <div key={index} style={{ margin: "5px", padding: "5px", border: "1px solid black", width: "400px", height: "310px" }}>

                                {e.author_details.name !== "" ? (
                                    <p style={{ fontWeight: "700" }}>{e.author_details.name}</p>
                                ) : (
                                    <p style={{ fontWeight: "700" }}>Anonymous</p>
                                )}

                                <hr></hr>

                                <p style={{ color: "gray", width: "390px", height: "auto", padding: "2px" }}>{e.content.slice(0, 400)} . . . . . </p>

                            </div>
                        )
                    })) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "420px" }}>
                        <div> No Reviews </div>
                    </div>
                )}


            </div>}
        </>
    )
}
