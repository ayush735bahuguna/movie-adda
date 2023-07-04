import '../../../../App.css'
import useFetch from "../../../../Api/useFetch"
import Lazyloadimage from '../../../../Components/Image Lazy loading/Lazyloadimage';

export default function Image(props) {
    const { data } = useFetch(`/tv/${props.movieId}/images`);
    // console.log(data);

    return (

        <>
            <h1>Images</h1>
            <div className='horizontalScrollComponent'>

                {data?.backdrops?.map((e, index) => {
                    return (
                        <div key={index}>
                            <Lazyloadimage imgurl={e.file_path} css={{ margin: "5px", height: "300px", width: "auto" }} />

                        </div>
                    )
                })};

            </div>
        </>
    )
}
