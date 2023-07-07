import '../../App.css'

import useFetch from "../../Api/useFetch"
import Loader from '../loader/loader';
import Lazyloadimage from '../Image Lazy loading/Lazyloadimage';

export default function WatchProviders(props) {

    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/videos`);
    // console.log(data?.results);
    return (

        <>
            {loading && <h1><Loader /></h1>}
            {!loading &&
                <>  <h1>Watch Providers</h1>
                    <div className='horizontalScrollComponent'>
                        {data?.results?.map((e, index) => {
                            // console.log(e.logo_path);
                            return (

                                <div key={index}>
                                    {/* 
                                    <Lazyloadimage imgurl={e.logo_path} />
                                    <div>{e.provider_name}</div> */}
                                </div>

                            )
                        })}

                    </div>
                </>}
        </>
    )
}
