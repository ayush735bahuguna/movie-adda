import '../../App.css'
import useFetch from "../../Api/useFetch"
import Lazyloadimage from '../Image Lazy loading/Lazyloadimage';

export default function Image(props) {
    const { data } = useFetch(`/${props.keyWord}/${props.movieId}/images`);
    // console.log(data?.backdrops?.file_path);

    return (

        <>
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
