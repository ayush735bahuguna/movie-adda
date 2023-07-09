import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer id='FooterWrapper' className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top m-5">
            <div className="col-md-4 d-flex align-items-center">
                <span className=" mb-md-0 text-body-secondary"> Made by Ayush Bahuguna</span> &nbsp; | &nbsp; <a href="/">Home</a>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3  footerIcons">
                    <a className="text-body-secondary" target='_blank' href="https://instagram.com/ayush.jsx?igshid=MzNlNGNkZWQ4Mg==">
                        <i className="bi bi-instagram"></i>
                    </a>
                </li>
                <li className="ms-3 footerIcons">
                    <a className="text-body-secondary " href="#">
                        <i className="bi bi-facebook"></i>
                    </a>
                </li>
                <li className="ms-3 footerIcons">
                    <a className="text-body-secondary" target='_blank' href="https://github.com/ayush735bahuguna">
                        <i className="bi bi-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )

}
