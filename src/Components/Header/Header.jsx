import React from 'react'
// import { useGlobalContext } from "../../Context"
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import Logo from '../../asset/logo.png'

export default function Header() {

    const Navigate = useNavigate();
    const { setquery } = useGlobalContext();

    const clicked = () => {
        if (document.getElementById("searchbar").value.length > 0) {
            setquery(document.getElementById("searchbar").value);
            Navigate(`/Search/ ${document.getElementById("searchbar").value}`);
        }
    }

    const keyPress = (e) => {
        if (e.key === "Enter") {
            if (e.target.value.length > 0) {
                setquery(e.target.value);
                Navigate(`/Search/ ${e.target.value}`)
            }
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ zIndex: "9" }}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" >
                        <img style={{ width: "140px", borderRadius: "10px" }} src={Logo} alt='.' />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/movie">Explore Movie </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tv">Explore Tv-Series </Link>
                            </li>
                        </ul>


                        <div className="d-flex" role="search">
                            <input id='searchbar' onKeyDown={keyPress} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button onClick={clicked} className="btn btn-outline-success" type="submit">Search</button>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
