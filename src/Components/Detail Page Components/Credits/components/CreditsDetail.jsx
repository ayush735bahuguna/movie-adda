import '../../../../App.css'
import useFetch from "../../../../Api/useFetch"
import Lazyloadimage from '../../../Image Lazy loading/Lazyloadimage';
import Loader from '../../../loader/loader';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreditMovie from './inner components/CreditMovie';

export default function CreditsDetail() {
    const params = useParams();
    const [creditId, setcreditId] = useState();

    const { data, loading } = useFetch(`/credit/${creditId}`);

    useEffect(() => { setcreditId(params.id) }, [params.id])
    useEffect(() => { setcreditId(params.id) }, [])

    return (

        <div>

            {loading && <h1> <Loader />  </h1>}
            {!loading &&
                <div>
                    <div id='CreditDetailsWrapper' style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", margin: "10px" }}>

                        <Lazyloadimage css={{ width: "200px", borderRadius: "7px", marginTop: "30px" }} imgurl={data?.person.profile_path} />
                        <div style={{ padding: "5px", margin: "20px" }}>

                            <p style={{ fontWeight: "600", fontSize: "25px" }}>{data?.person.original_name}</p>
                            <p> Character Name : {data?.media.character}</p>
                            <p>[{data?.job}]</p>


                            {/* <Lazyloadimage css={{ width: "200px", borderRadius: "7px" }} imgurl={data?.media.backdrop_path} /> */}

                            <hr></hr>
                            <p> {data?.media.media_type} name : {data?.media.original_title}</p>
                            <br></br>
                            <p>Overview of {data?.media.media_type} : <span style={{ color: "gray" }}>{data?.media.overview}</span>
                            </p>

                        </div>

                    </div>
                    <CreditMovie personId={data?.person.id} />
                </div>
            }

        </div>
    )
}





