import React, { useEffect, useState } from 'react'
import { useGlobalContext } from "../../Context"
import ImageCard from "../../Components/Image Card/ImageCard"
import { useNavigate, Link } from 'react-router-dom';
import Footer from "../../Components/Footer/Footer"
import "../../App.css"
import HeroSection from '../../Components/Hero Section/HeroSection';

export default function HomePage() {
    const { Acess_key } = useGlobalContext();
    const Navigate = useNavigate();

    const [Data, setData] = useState();
    const [DataTV, setDataTV] = useState();
    const [pageno, setpageno] = useState(1);
    const [IsLoading, setIsLoading] = useState();
    const [HeroSectionArray, setHeroSectionArray] = useState();


    const fetchApi = async () => {
        try {
            setIsLoading(true);
            var url = `https://api.themoviedb.org/3/discover/movie?api_key=${Acess_key}&include_adult=false&language=en-US&page=${pageno}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setData(parsedData.results);
            setHeroSectionArray(parsedData.results[Math.floor(Math.random() * 20)]);
            setIsLoading(false);
        }
        catch (err) {
            console.log(err.message + " : error msg from fetch api");
        }
    }

    const fetchApiTv = async () => {
        try {
            setIsLoading(true);
            var url = `https://api.themoviedb.org/3/discover/tv?api_key=${Acess_key}&include_adult=false&language=en-US&page=${pageno}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setDataTV(parsedData.results);
            setIsLoading(false);
            // console.log(parsedData.results);
        }
        catch (err) {
            console.log(err.message + " : error msg from fetch api");
        }
    }

    useEffect(() => {
        fetchApi();
        fetchApiTv();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <HeroSection HeroSectionArray={HeroSectionArray} />

            <div className="Wrapper">
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px", alignItems: "center" }}>
                    <h1>Movies</h1>
                    <Link to="/Movie">More</Link>
                </div>

                <div id="movieContainer" >
                    {Data?.map((e, index) => {

                        const onclickHandler = () => {
                            Navigate(`/Movie/${e.id}`);
                        }

                        return (
                            <a href='#' onClick={onclickHandler} key={index} >
                                <ImageCard DataArray={e} />
                            </a>
                        )
                    })};
                </div>
            </div>

            <div className="Wrapper">
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 20px", alignItems: "center" }}>
                    <h1>TV Series</h1>
                    <Link to="/TV-Series">More</Link>
                </div>

                <div id='TvContainer'>
                    {DataTV?.map((e, index) => {

                        const onclickHandler = () => {
                            // console.log(e);
                            Navigate(`/TV-Series/${e.id}`);
                        }

                        return (
                            <a href='#' onClick={onclickHandler} key={index} >
                                <ImageCard DataArray={e} />
                            </a>
                        )
                    })};
                </div>
            </div>

            <Footer />
        </>

    )
}
