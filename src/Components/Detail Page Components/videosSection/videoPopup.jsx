import ReactPlayer from "react-player/youtube";

export default function videoPopup(props) {


    return (
        <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{props.Videoname}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ReactPlayer
                            id="ReactPlayer"
                            url={`https://www.youtube.com/watch?v=${props.videokey}`}
                            controls
                            width="100%"
                            height="300px"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
