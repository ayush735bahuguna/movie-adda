import '../../App.css'
import useFetch from "../../Api/useFetch"
import Loader from '../loader/loader';

export default function Reviews(props) {
    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/reviews`);

    return (

        <>
            {loading && <h1><Loader /></h1>}
            {!loading && <div className='horizontalScrollComponent'>

                {data?.results?.map((e, index) => {

                    return (
                        <div key={index} style={{ margin: "5px", border: "2px solid black" }}>

                            <p>{e.author_details.name}</p>
                            <p>{e.author_details.avatar_path}</p>
                            <p>{e.content}</p>


                        </div>
                    )
                })}

            </div>}
        </>
    )
}
