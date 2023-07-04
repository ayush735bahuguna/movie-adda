import '../../../../App.css'
import useFetch from "../../../../Api/useFetch"
import { useNavigate } from 'react-router-dom';
import ImageCard from '../../../../Components/Image Card/ImageCard';

export default function Recommendations(props) {
    const Navigate = useNavigate();
    const { data } = useFetch(`/tv/${props.movieId}/recommendations`);
    // console.log(data);

    return (

        <>
            <h1>Recommendations</h1>
            <div className='horizontalScrollComponent'>

                {data?.results?.map((e, index) => {
                    const onclickHandler = () => {
                        Navigate(`/tv/${e.id}`);
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
