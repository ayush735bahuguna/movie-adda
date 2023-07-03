import React, { useEffect, useState } from 'react'
import { useGlobalContext } from "../../Context"
import InfiniteComponent from "../../Components/Infinite Scroll/InfiniteComponent"
import useFetch from "../../Api/useFetch"

export default function Movie() {
    const { Acess_key } = useGlobalContext();

    const [Data, setData] = useState();
    const [Totalresults, setTotalresults] = useState();
    const [pageno, setpageno] = useState(1);


    const { data } = useFetch("/discover/movie", `?&page=${pageno}`);

    useEffect(() => {
        setData(data?.results);
        setTotalresults(data?.totalresults);
    }, [data]);


    const FetchMoreData = async () => {
        // const { data: LoadMore } = useFetch("/discover/movie", `?&page=${pageno}`);
        // console.log("fetch more data");
        // console.log(LoadMore);

        try {
            setpageno(pageno + 1);
            var url = `https://api.themoviedb.org/3/discover/movie?api_key=${Acess_key}&include_adult=false&language=en-US&page=${pageno + 1}`;
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
            <InfiniteComponent Data={Data} totalresults={Totalresults} fetchMoreData={FetchMoreData} Keyword={"movie"} />
        </>
    )
}
