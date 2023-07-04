import '../../../../App.css'
import useFetch from "../../../../Api/useFetch"

export default function Reviews(props) {
    const { data } = useFetch(`/tv/${props.movieId}/reviews`);
    // console.log(data);

    return (

        <>
            <h1>Reviews</h1>
            <div className='horizontalScrollComponent'>

                {data?.results?.map((e, index) => {

                    return (
                        <div key={index} style={{ margin: "5px", border: "2px solid black" }}>

                            <p>{e.author_details.name}</p>
                            <p>{e.author_details.avatar_path}</p>
                            <p>{e.content}</p>


                        </div>
                    )
                })};

            </div>
        </>
    )
}
