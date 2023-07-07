import '../../App.css'

import ImageCard from "../Image Card/ImageCard"
import { useNavigate } from 'react-router-dom';
import useFetch from "../../Api/useFetch"
import Loader from '../loader/loader';

export default function Similar(props) {

    const Navigate = useNavigate();
    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/similar`);

    return (

        <>
            {loading && <h1><Loader /> </h1>}
            {!loading && <div className='horizontalScrollComponent'>

                {data?.results?.map((e, index) => {
                    return (
                        <a href={`/${props.keyWord}/${e.id}`} key={index} style={{ display: "inline-block" }}>
                            <ImageCard DataArray={e} />
                        </a>
                    )
                })}

            </div>}
        </>
    )
}
