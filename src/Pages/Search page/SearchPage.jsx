import React, { useEffect, useState } from 'react'
import useFetch from "../../Api/useFetch"
import { useGlobalContext } from "../../Context"
import { useParams } from 'react-router-dom';
import InfiniteComponent from "../../Components/Infinite Scroll/InfiniteComponent"
import Loader from "../../Components/loader/loader"
import NoResults from "../../asset/no-results.png"

export default function SearchPage() {

    const { query, setquery, Acess_key } = useGlobalContext();
    const params = useParams();
    const [Data, setData] = useState();
    const [Totalresults, setTotalresults] = useState();
    const [pageno, setpageno] = useState(1);
    const [Keyword, setKeyword] = useState("movie");

    useEffect(() => {
        setquery(params.text);
    }, [params.text]);

    const { data, loading } = useFetch(`/search/${Keyword}?query=${query}`, `?&page=${pageno}`);

    useEffect(() => {
        setData(data?.results);
    }, [data]);


    const FetchMoreData = async () => {
        try {
            setpageno(pageno + 1);
            var url = `https://api.themoviedb.org/3/search/${Keyword}?api_key=${Acess_key}&query=${query}&page=${pageno + 1}`;
            let data = await fetch(url);
            let parsedData = await data.json();

            setData(Data.concat(parsedData.results))
            setTotalresults(parsedData.total_results);
        }
        catch (err) {
            return (err.message)
        }
    }

    // configure tab opening search twice problem

    const KeyWordSelectorMovie = () => {
        setKeyword("movie");
    }
    const KeyWordSelectorTv = () => {
        setKeyword("tv");
    }

    return (
        <>
            <p id='ScrollAfterSearch' style={{ fontSize: "25px", padding: "10px" }}> Search Result For <strong> {query} </strong> </p >


            {data?.results?.length !== 0 ? (
                <div>
                    {loading && <h1> <Loader /></h1>}
                    {!loading && <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button onClick={KeyWordSelectorMovie} className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Movies</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button onClick={KeyWordSelectorTv} className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Tv Serials</button>
                            </li>

                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                            </div>
                            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                            </div>
                        </div>



                        <InfiniteComponent Data={Data} totalresults={Totalresults} fetchMoreData={FetchMoreData} Keyword={Keyword} />
                    </div>
                    }
                </div >
            ) : (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img style={{ width: "90%", maxWidth: "500px" }} src={NoResults} alt='.' />
                </div>)
            }


        </>
    )
}
