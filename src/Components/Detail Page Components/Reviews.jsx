import '../../App.css'
import useFetch from "../../Api/useFetch"
import Loader from '../loader/loader';

export default function Reviews(props) {
    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/reviews`);
    // console.log(data?.results?.length);
    return (

        <>
            {loading && <h1><Loader /></h1>}
            {!loading && <div className='horizontalScrollComponent' style={{ height: "420px" }}>

                {data?.results.length !== 0 ? (
                    data?.results?.map((e, index) => {
                        return (
                            <div key={index} style={{ margin: "5px", border: "2px solid black" }}>
                                <p>{e.author_details.name}</p>
                                <p>{e.author_details.avatar_path}</p>
                                <p>{e.content}</p>
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
