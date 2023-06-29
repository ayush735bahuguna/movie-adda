import React from 'react'
import { useGlobalContext } from "../../Context"
import { Link } from 'react-router-dom';

export default function Header() {
    const { setquery } = useGlobalContext();

    return (
        <div>
            <Link to="/">Home</Link> <p></p>
            <Link to="/Movie">Explore Movie </Link> <p></p>
            <Link to="/Tv-Series">Explore Tv-Series </Link>
        </div>
    )
}
