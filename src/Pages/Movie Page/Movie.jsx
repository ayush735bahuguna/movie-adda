import React, { useEffect, useState } from 'react'
import { useGlobalContext } from "../../Context"
import InfiniteComponent from "../../Components/Infinite Scroll/InfiniteComponent"
import useFetch from "../../Api/useFetch"

export default function Movie() {
    const { Acess_key } = useGlobalContext();

    const [Data, setData] = useState();
    const [Totalresults, setTotalresults] = useState();
    const [pageno, setpageno] = useState(1);
    const [order_of, setorder_of] = useState("popular");


    const { data } = useFetch(`/movie/${order_of}`, `?&page=${pageno}`);

    useEffect(() => {
        setData(data?.results);
        setTotalresults(data?.totalresults);
    }, [data, order_of]);


    const order_ofHandler = (e) => {
        setorder_of(e.currentTarget.textContent);
    }



    const FetchMoreData = async () => {
        // const { data: LoadMore } = useFetch("/discover/movie", `?&page=${pageno}`);
        // console.log("fetch more data");
        // console.log(LoadMore);

        try {
            setpageno(pageno + 1);
            var url = `https://api.themoviedb.org/3/movie/${order_of}?api_key=${Acess_key}&include_adult=false&language=en-US&page=${pageno + 1}`;
            let data = await fetch(url);
            let parsedData = await data.json();

            setData(Data.concat(parsedData.results))
            setTotalresults(parsedData.totalResults);
        }
        catch (err) {
            return (err.message)
        }
    }


    return (
        <>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>

                <div className="dropdown-center m-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Set Order </button>
                    <ul className="dropdown-menu" >
                        <li>
                            <div className="dropdown-item" onClick={order_ofHandler}>now_playing</div>
                        </li>
                        <li>
                            <div className="dropdown-item" onClick={order_ofHandler}>popular</div>
                        </li>
                        <li>
                            <div className="dropdown-item" onClick={order_ofHandler}>top_rated</div>
                        </li>
                        <li>
                            <div className="dropdown-item" onClick={order_ofHandler}>upcoming</div>
                        </li>
                    </ul>
                </div>



            </div >


            <InfiniteComponent Data={Data} totalresults={Totalresults} fetchMoreData={FetchMoreData} Keyword={"movie"} />
        </>
    )
}
