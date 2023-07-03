import '../../../../App.css'
import useFetch from "../../../../Api/useFetch"

export default function WatchProviders(props) {
    const { data } = useFetch(`movie/${props.movieId}/watch/providers`);
    console.log(data);


    return (

        <>
            <h1>Watch Providers</h1>
            <div className='horizontalScrollComponent'>
                {/* {data?.map((e, index) => {
                    
                    return (
                        <div key={index}>
                        aa

                        </div>
                    )
                })}; */}

            </div>
        </>
    )
}
