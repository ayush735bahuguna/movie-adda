
import useFetch from "../../../Api/useFetch"
import Loader from '../../loader/loader';
import { Link } from 'react-router-dom';
import Component from "./component";

export default function WatchProviders(props) {

    const { data, loading } = useFetch(`/${props.keyWord}/${props.movieId}/watch/providers`);

    return (

        <>
            {loading && <h1><Loader /></h1>}
            {!loading &&
                <>
                    <h2>Watch Providers :</h2>

                    {data?.results?.IN?.buy !== undefined || data?.results?.IN?.rent !== undefined || data?.results?.IN?.flatrate !== undefined ? (
                        <div>
                            <div className="accordion" id="accordionExample">

                                {data?.results?.IN?.buy !== undefined ? (
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Where to Buy?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Component Data={data?.results?.IN?.buy} />
                                            </div>
                                        </div>
                                    </div>
                                ) : ("")}

                                {data?.results?.IN?.rent !== undefined ? (
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Where to Rent?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Component Data={data?.results?.IN?.rent} />
                                            </div>
                                        </div>
                                    </div>
                                ) : ("")}

                                {data?.results?.IN?.flatrate !== undefined ? (
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                                                Where to Watch?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <Component Data={data?.results?.IN?.flatrate} />
                                            </div>
                                        </div>
                                    </div>
                                ) : ("")}

                            </div>

                            <Link style={{ marginTop: "20px" }} target='_blank' to={data?.results?.IN?.link}>External Link</Link>
                        </div>
                    ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "220px" }}>
                            <div> No Watch Providers </div>
                        </div>
                    )}





                </>}
        </>
    )
}
