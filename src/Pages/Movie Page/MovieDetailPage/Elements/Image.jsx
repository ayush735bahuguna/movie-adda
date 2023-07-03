import '../../../../App.css'
import useFetch from "../../../../Api/useFetch"

export default function Image(props) {
    const { data } = useFetch(`/movie/${props.movieId}/images`);
    // console.log(data?.backdrops?.file_path);

    return (

        <>
            <h1>Images</h1>
            <div className='horizontalScrollComponent'>

                {data?.backdrops?.map((e, index) => {

                    return (
                        <div key={index}>

                            <img style={{ margin: "5px" }} height={"300px"} src={`https://image.tmdb.org/t/p/w500/${e.file_path}`} alt={e.file_path} />


                        </div>
                    )
                })};

            </div>
        </>
    )
}
