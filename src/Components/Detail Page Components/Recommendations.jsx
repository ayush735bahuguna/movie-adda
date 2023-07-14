import '../../App.css'
import ImageCard from "../Image Card/ImageCard"
import { useNavigate } from 'react-router-dom';
import useFetch from "../../Api/useFetch"

import Loader from '../loader/loader';

export default function Recommendations(props) {
    const Navigate = useNavigate();
    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/recommendations`);

    return (

        <>
            {loading && <h1><Loader /></h1>}
            {!loading && <div className='horizontalScrollComponent'>
                {data?.results.length !== 0 ? (
                    data?.results?.map((e, index) => {
                        return (
                            <a href={`/${props.keyWord}/${e.id}`} key={index} style={{ display: "inline-block" }}>
                                <ImageCard DataArray={e} />
                            </a>
                        )
                    })
                ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "420px" }}>
                        <div> No recommendations </div>
                    </div>
                )}
            </div>}
        </>
    )
}
