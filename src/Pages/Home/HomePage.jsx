import React from 'react'
import { useGlobalContext } from "../../Context"
import Footer from "../../Components/Footer/Footer"
import "../../App.css"
import HeroSection from '../../Components/Hero Section/HeroSection';
import MovieCarousel from './Carousel Section/MovieCarousel';
import TvCarousel from './Carousel Section/TvCarousel';

export default function HomePage() {
    const { HeroSectionArray } = useGlobalContext();
    return (
        <>
            <HeroSection HeroSectionArray={HeroSectionArray} />
            <MovieCarousel />
            <TvCarousel />
            <Footer />
        </>

    )
}
