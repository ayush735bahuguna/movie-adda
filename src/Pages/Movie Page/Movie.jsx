import React, { useEffect, useState } from 'react'
import { useGlobalContext } from "../../Context"
import InfiniteComponent from "../../Components/Infinite Scroll/InfiniteComponent"

export default function Movie() {
    const { Acess_key } = useGlobalContext();

    const [Data, setData] = useState();
    const [Totalresults, setTotalresults] = useState();
    const [pageno, setpageno] = useState(1);

    const [IsLoading, setIsLoading] = useState();

    const fetchApi = async () => {
        try {
            setIsLoading(true);
            var url = `https://api.themoviedb.org/3/discover/movie?api_key=${Acess_key}&include_adult=false&language=en-US&page=1`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setData(parsedData.results);
            setTotalresults(parsedData.totalresults);
            setIsLoading(false);
        }
        catch (err) {
            console.log(err.message + " : error msg from fetch api");
        }
    }

    const FetchMoreData = async () => {
        try {
            setpageno(pageno + 1);
            var url = `https://api.themoviedb.org/3/discover/movie?api_key=${Acess_key}&include_adult=false&language=en-US&page=${pageno}`;
            let data = await fetch(url);
            let parsedData = await data.json();

            setData(Data.concat(parsedData.results))
            setTotalresults(parsedData.totalResults);
        }
        catch (err) {
            return (err.message)
        }
    }


    useEffect(() => {
        fetchApi();
        // eslint-disable-next-line
    }, []);


    // Data   totalresults   fetchMoreData  Keyword{ Movie / TV - Series }

    return (
        <>
            <InfiniteComponent Data={Data} totalresults={Totalresults} fetchMoreData={FetchMoreData} Keyword={Movie} />
        </>
    )
}
