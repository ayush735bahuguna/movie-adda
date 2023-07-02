import '../../../../App.css'
import ImageCard from "../../../../Components/Image Card/ImageCard"
import { useNavigate } from 'react-router-dom';
import useFetch from "../../../../Api/useFetch"

export default function Videos(props) {

    const Navigate = useNavigate();
    const { data } = useFetch(`/movie/${props.movieId}/videos`);
    // console.log(data?.results);

    return (

        <>
            <h1>Videos</h1>
            <div className='horizontalScrollComponent'>

                {data?.results?.map((e, index) => {
                    return (
                        <div key={index}>
                            {e.id}
                        </div>
                    )
                })};

            </div>
        </>
    )
}
