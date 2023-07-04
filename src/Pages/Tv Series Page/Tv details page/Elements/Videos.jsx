import '../../../../App.css'
import ImageCard from "../../../../Components/Image Card/ImageCard"
import useFetch from "../../../../Api/useFetch"

export default function Videos(props) {

    const { data } = useFetch(`/tv/${props.movieId}/videos`);
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