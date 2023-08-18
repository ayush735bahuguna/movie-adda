import React from 'react'
import { useGlobalContext } from '../../../Context'
import Lazyloadimage from '../../Image Lazy loading/Lazyloadimage';

export default function AllImages() {
    const { AllImages } = useGlobalContext();
    return (
        <>
            <ul className="nav nav-tabs pt-3 pb-2" id="myTab" role="tablist" style={{ position: "sticky", top: "64px", zIndex: "1", backgroundColor: "white" }}>
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" onClick={() => { window.scrollTo(0, 0) }}>Backdrops</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" onClick={() => { window.scrollTo(0, 0) }}>posters</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false" onClick={() => { window.scrollTo(0, 0) }}>logos</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent" >
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0" style={{ textAlign: 'center' }}>
                    {AllImages?.backdrops?.length !== 0 ? (
                        AllImages?.backdrops?.map((e, index) => {
                            return (
                                <span key={index} >
                                    {e.file_path !== null ?
                                        <span>
                                            <a className='link' rel="noopener noreferrer" href={`https://image.tmdb.org/t/p/original/${e.file_path}`} target="_blank" >
                                                <Lazyloadimage imgurl={e.file_path} css={{ margin: "5px", height: "auto", width: "95%", cursor: "pointer", borderRadius: "7px" }} />
                                            </a>
                                        </span>
                                        : ""}
                                </span>)
                        })
                    ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "150px" }}>
                            <div> No Images Available </div>
                        </div>
                    )}
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0" style={{ textAlign: 'center' }}>
                    {AllImages?.posters?.length !== 0 ? (
                        AllImages?.posters?.map((e, index) => {
                            return (
                                <span key={index}>
                                    {e.file_path !== null ?
                                        <span>
                                            <a className='link' rel="noopener noreferrer" href={`https://image.tmdb.org/t/p/original/${e.file_path}`} target="_blank" >
                                                <Lazyloadimage imgurl={e.file_path} css={{ margin: "5px", height: "auto", width: "250px", cursor: "pointer", borderRadius: "7px" }} />
                                            </a>
                                        </span>
                                        : ""}
                                </span>)
                        })
                    ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "150px" }}>
                            <div> No Images Available </div>
                        </div>
                    )}
                </div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0" style={{ textAlign: 'center' }}>

                    {AllImages?.logos?.length !== 0 ? (
                        AllImages?.logos?.map((e, index) => {
                            return (
                                <span key={index}>
                                    {e.file_path !== null ?
                                        <span>
                                            <a className='link' rel="noopener noreferrer" href={`https://image.tmdb.org/t/p/original/${e.file_path}`} target="_blank" >
                                                <Lazyloadimage imgurl={e.file_path} css={{ margin: "5px", height: "auto", width: "200px", cursor: "pointer", borderRadius: "7px" }} />
                                            </a>
                                        </span>
                                        : ""}
                                </span>)
                        })
                    ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "150px" }}>
                            <div> No Images Available </div>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}
