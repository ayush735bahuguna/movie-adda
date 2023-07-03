import '../../../../App.css'
import ImageCard from "../../../../Components/Image Card/ImageCard"
import { useNavigate } from 'react-router-dom';
import useFetch from "../../../../Api/useFetch"

export default function Recommendations(props) {
    const Navigate = useNavigate();
    const { data } = useFetch(`/movie/${props.movieId}/recommendations`);

    return (

        <>
            <h1>Recommendations</h1>
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
