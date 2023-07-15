import '../../../App.css'
import useFetch from "../../../Api/useFetch"
import Lazyloadimage from '../../Image Lazy loading/Lazyloadimage';
import Loader from '../../loader/loader';
import avatar from "../../../asset/avatar.png";

export default function Credits(props) {

    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/credits`);
    // console.log(data?.cast[0]);

    return (

        <>

            {loading && <h1> <Loader />  </h1>}
            {!loading &&
                <>
                    <h3>Highly Paid cast</h3>
                    <div className='horizontalScrollComponent'>
                        {data?.cast?.slice(0, 10)?.length !== 0 ? (
                            data?.cast?.slice(0, 10).map((e, index) => {
                                return (
                                    <a href={`/${props.keyWord}/credit/${e.credit_id}`} key={index} style={{ margin: "5px", textAlign: "center" }}>
                                        {e.profile_path === null
                                            ?
                                            (<img src={avatar} style={{ height: "225px", objectFit: "cover", width: "150px", borderRadius: "7px" }} />)
                                            :
                                            (<Lazyloadimage imgurl={e.profile_path} css={{ height: "auto", width: "150px", borderRadius: "7px" }} />)
                                        }

                                        <div id="creditName" style={{ fontWeight: "600" }}>{e.character}</div>
                                        <div id="creditOriginalName"> [&nbsp;{e.original_name}&nbsp;]</div>
                                    </a>
                                )
                            })
                        ) : (
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "150px" }}>
                                <div> No Credits Details Available </div>
                            </div>
                        )}
                    </div>
                </>}
        </>
    )
}
