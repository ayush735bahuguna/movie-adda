import '../../App.css'

import ImageCard from "../Image Card/ImageCard"
import { useNavigate } from 'react-router-dom';
import useFetch from "../../Api/useFetch"

export default function Similar(props) {

    const Navigate = useNavigate();
    const { data } = useFetch(`/${props.keyWord}/${props.movieId}/similar`);

    return (

        <>
            <div className='horizontalScrollComponent'>

                {data?.results?.map((e, index) => {
                    const onclickHandler = () => {
                        Navigate(`/movie/${e.id}`);
                    }
                    return (
                        <a href='#' onClick={onclickHandler} key={index} style={{ display: "inline-block" }}>
                            <ImageCard DataArray={e} />
                        </a>
                    )
                })};

            </div>
        </>
    )
}
