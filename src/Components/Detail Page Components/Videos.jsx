import '../../App.css'
import useFetch from "../../Api/useFetch"
import Loader from '../loader/loader';

export default function Videos(props) {

    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/videos`);
    // console.log(data?.results);

    return (

        <>
            {loading && <h1><Loader /></h1>}
            {!loading && <div className='horizontalScrollComponent'>

                {data?.results?.map((e, index) => {
                    return (
                        <div key={index}>
                            {e.id}
                        </div>
                    )
                })}

            </div>}
        </>
    )
}
