import React, { useEffect, useState } from 'react'
import { useGlobalContext } from "../../Context"
import ImageCard from "../../Components/Image Card/ImageCard"
import { useNavigate } from 'react-router-dom';

export default function Movie() {
    const { Acess_key } = useGlobalContext();
    const Navigate = useNavigate();

    const [Data, setData] = useState();
    const [pageno, setpageno] = useState(1);
    const [IsLoading, setIsLoading] = useState();

    const fetchApi = async () => {
        try {
            setIsLoading(true);
            var url = `https://api.themoviedb.org/3/discover/tv?api_key=${Acess_key}&include_adult=false&language=en-US&page=${pageno}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setData(parsedData.results);
            setIsLoading(false);
            console.log(parsedData.results);
        }
        catch (err) {
            console.log(err.message + " : error msg from fetch api");
        }
    }

    useEffect(() => {
        fetchApi();
        // eslint-disable-next-line
    }, []);

    return (
        <>

            {Data?.map((e, index) => {

                const onclickHandler = () => {
                    console.log(e);
                    Navigate(`/TV-Series/${e.id}`);
                }

                return (
                    <div onClick={onclickHandler} key={index} style={{ margin: "5px", border: "2px solid black", display: "inline-block", width: "250px", cursor: "pointer" }}>
                        <ImageCard ImageUrl={e.poster_path} Description={e.id} />
                        <p>{e.original_name}</p>
                        <p>{e.popularity}</p>
                    </div>
                )
            })};
        </>
    )
}
