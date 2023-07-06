import '../../App.css'
import ImageCard from "../Image Card/ImageCard"
import useFetch from "../../Api/useFetch"

export default function Videos(props) {

    const { data } = useFetch(`/${props.keyWord}/${props.movieId}/videos`);
    // console.log(data?.results);

    return (

        <>
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
