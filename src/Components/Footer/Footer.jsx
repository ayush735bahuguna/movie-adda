import React from 'react'
import "./footer.css"

export default function Footer() {
    return (
        <footer id='FooterWrapper' className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top m-4">
            <div className="col-md-4 d-flex align-items-center">
                <span className=" mb-md-0 text-body-secondary"> Made by Ayush Bahuguna</span>
                &nbsp;
                <span>
                    |    <a href="/">  Home</a>
                </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">

                <li className="ms-3  footerIcons">
                    <a rel="noopener noreferrer" className="text-body-secondary" target='_blank' href="https://www.linkedin.com/in/ayush-bahuguna-97baab223">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </li>

                <li className="ms-3 footerIcons">
                    <a rel="noopener noreferrer" className="text-body-secondary" target='_blank' href="https://github.com/ayush735bahuguna">
                        <i className="bi bi-github"></i>
                    </a>
                </li>

                <li className="ms-3  footerIcons">
                    <a rel="noopener noreferrer" className="text-body-secondary" target='_blank' href="https://instagram.com/ayush.jsx?igshid=MzNlNGNkZWQ4Mg==">
                        <i className="bi bi-instagram"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )

}
